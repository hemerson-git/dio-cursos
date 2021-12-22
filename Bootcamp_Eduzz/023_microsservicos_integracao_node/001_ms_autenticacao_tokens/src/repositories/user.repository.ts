import db from "../db";
import DatabaseError from "../models/errors/database.error.model";
import User from "../models/user.model";

class UserRepository {
  async findAllUsers(): Promise<User[]> {
    try {
      const query = `
          SELECT uuid, 
          username FROM application_user
        `;

      const { rows } = await db.query<User>(query);

      return rows || [];
    } catch (error) {
      throw new DatabaseError("Erro ao retornar os usuários", error);
    }
  }

  async findById(uuid: string): Promise<User> {
    try {
      const query = `
        SELECT uuid, username
        FROM application_user
        WHERE uuid = $1
      `;

      const values = [uuid];

      const { rows } = await db.query<User>(query, values);

      const [user] = rows;

      return user;
    } catch (error) {
      throw new DatabaseError("Erro ao realizar a consulta por ID", error);
    }
  }

  async findByUsernameAndPassword(
    username: string,
    password: string
  ): Promise<User | null> {
    try {
      const query = `
        SELECT uuid, username
        FROM application_user
        WHERE username = $1
        AND password = crypt($2, 'my_secret_key')
      `;

      const values = [username, password];

      const { rows } = await db.query<User>(query, values);

      const [user] = rows;

      return user || null;
    } catch (error) {
      throw new DatabaseError("Desculpe, algo deu errado!");
    }
  }

  async create(user: User): Promise<string> {
    const script = `
      INSERT INTO application_user (
        username,
        password
      )
      VALUES($1, crypt($2, 'my_secret_key'))
      RETURNING uuid
    `;

    const { username, password } = user;

    const values = [username, password];

    const { rows } = await db.query<{ uuid: string }>(script, values);
    const [newUser] = rows;

    return newUser.uuid;
  }

  async update(user: User): Promise<void> {
    try {
      const script = `
        UPDATE application_user 
        SET
          username = $1,
          password = crypt($2, 'my_secret_key')
        WHERE uuid = $3
      `;

      const { username, password, uuid } = user;

      const values = [username, password, uuid];

      await db.query<{ uuid: string }>(script, values);
    } catch (error) {
      throw error;
    }
  }

  async remove(uuid: string): Promise<void> {
    try {
      const script = `
        DELETE 
        FROM application_user
        WHERE uuid = $1
      `;

      const values = [uuid];

      await db.query<{ uuid: string }>(script, values);
    } catch (error) {
      throw error;
    }
  }
}

export default new UserRepository();

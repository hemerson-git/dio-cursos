interface IUser {
  id: string;
  email: string;
}

interface IAdmin extends IUser {
  role: "manager" | "coordinator" | "super";
}

type IRole = IUser | IAdmin;

function redirect(user: IRole) {
  if ("role" in user) {
    //redirect to admin page
    console.log("it's Admin");
    return;
  }

  // redirect to user page
  console.log("isn't Admin");
}

const newUser: IRole = {
  id: "1234",
  email: "admin@example.com",
  role: "coordinator",
};

redirect(newUser);

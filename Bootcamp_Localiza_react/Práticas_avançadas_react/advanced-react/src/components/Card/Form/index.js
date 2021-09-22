import React, { useEffect } from "react";
import { useAuthProvider } from "../../../contexts/authContext";

function Form() {
  const { handleSetToken, token } = useAuthProvider();

  useEffect(() => {
    setTimeout(() => {
      handleSetToken("laf235glkahlwekio32!09");
    }, 4000);
  }, [handleSetToken]);

  return (
    <>
      {token ? (
        <form action="">
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" />
          </div>

          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id="phone" />
          </div>

          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" />
          </div>
        </form>
      ) : (
        <div>
          <h1>É necessário estar logado!</h1>
        </div>
      )}
    </>
  );
}

export default Form;

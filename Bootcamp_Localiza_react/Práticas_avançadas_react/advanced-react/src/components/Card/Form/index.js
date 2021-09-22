import React, { useEffect } from "react";
import { useAuthProvider } from "../../../contexts/authContext";

function Form() {
  const { handleSetToken } = useAuthProvider();

  useEffect(() => {
    setTimeout(() => {
      handleSetToken("laf235glkahlwekio32!09");
    }, 4000);
  }, [handleSetToken]);

  return (
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
  );
}

export default Form;

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});
export default AuthContext;

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  function handleSetToken(userToken) {
    setToken(userToken);
    console.log(userToken);
  }

  return (
    <AuthContext.Provider value={{ token, handleSetToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthProvider() {
  return useContext(AuthContext);
}

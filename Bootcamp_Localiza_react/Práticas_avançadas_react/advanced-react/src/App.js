import React from "react";

import Card from "./components/Card";
import Form from "./components/Card/Form";

import { ThemeProvider } from "./themes/default";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <main>
          <Form />
          <Card />
        </main>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

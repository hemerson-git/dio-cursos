import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import store from "./redux/store";

import theme from "./themes/default-theme";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

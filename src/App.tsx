import React from "react";
import "./App.css";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme } from "./context/themeModeContext";
import { useState } from "react";
import Router from "./pages/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import EmptyState from "./components/EmptyState/EmptyState";
function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const isLightTheme = theme === Theme.Light;
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div className="App">
          <Router />
        </div>
      </ThemeModeProvider>
    </Provider>
  );
}

export default App;

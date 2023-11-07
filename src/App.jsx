import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="screen" id={theme}>
        <div className="bigswitch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Header />
        <div className="card-wrapper">
          <Card />
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;

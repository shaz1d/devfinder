import Container from "./components/Container";
import DarkTheme from "./assets/icon-dark.svg";
import LightTheme from "./assets/icon-light.svg";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const [theme, setTheme] = useState(userPrefersDark ? "dark" : "light");
  const [searchInput, setSearchInput] = useState("");

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <div className="w-full min-h-screen bg-abg px-5 py-12 text-title">
      <Container>
        <header className="flex justify-between">
          <h3 className="text-xl font-bold">devfinder</h3>
          <div className="flex items-center gap-3">
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
            <button onClick={handleThemeSwitch}>
              <img
                src={theme === "dark" ? LightTheme : DarkTheme}
                alt="dark icon"
              />
            </button>
          </div>
        </header>
        <main className="mt-8 flex flex-col gap-5">
          <Search state={searchInput} setState={setSearchInput} />
          <Result />
        </main>
      </Container>
    </div>
  );
}

export default App;

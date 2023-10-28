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
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const URL = "https://api.github.com/users/";

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const getUserData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(URL + searchInput);
      const data = await res.json();
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
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
          <Search
            state={searchInput}
            setState={setSearchInput}
            setUserData={setUserData}
            getUserData={getUserData}
          />
          <Result userData={userData} isLoading={isLoading} />
        </main>
      </Container>
    </div>
  );
}

export default App;

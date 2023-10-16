import Container from "./components/Layout/Container";
import DarkIcon from "./assets/icon-dark.svg";

function App() {
  return (
    <div className="w-full min-h-screen bg-abg px-5 py-12 text-title">
      <Container>
        <header className="flex justify-between">
          <h3>devfinder</h3>
          <div className="flex items-center gap-3">
            <span>light</span>
            <button>
              <img src={DarkIcon} alt="dark icon" />
            </button>
          </div>
        </header>
      </Container>
    </div>
  );
}

export default App;

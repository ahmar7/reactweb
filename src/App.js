import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Plan from "./components/plan/Plan";
import Services from "./components/services/services";
import Storefront from "./components/storefront/Storefront";
import Trader from "./components/trader/Trader";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Trader />
      <Storefront />
      <Services />
      <Plan />
    </div>
  );
}

export default App;

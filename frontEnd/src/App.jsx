import { BrowserRouter } from "react-router-dom";
import PortfolioApp from "./PortfolioApp.jsx";

// PortfolioApp owns its own Theme/Language/Mode providers and route table
// (/, /tech, /bar, /lab, *). It only needs a Router ancestor.
function App() {
  return (
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  );
}

export default App;

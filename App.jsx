// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./src/Home/HomeApp";
import TeamGeneratorApp from "./src/TeamGenerator/TeamGeneratorApp";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/teamgenerator" element={<TeamGeneratorApp />} />
          </Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;

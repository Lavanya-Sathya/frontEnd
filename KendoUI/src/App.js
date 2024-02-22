import logo from "./logo.svg";
import "./App.css";
// import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-bootstrap/dist/all.css";
// import "bootstrap/scss/bootstrap.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import DrawerRouterContainer from "./components/DrawerRouterContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <DrawerRouterContainer>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </DrawerRouterContainer>
      </Router>
    </div>
  );
}

export default App;

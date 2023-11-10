import Edit from "./components/Edit/Edit";
import Login from "./components/login/login";
import Home from "./components/Home/Home";
import Signup from "./components/signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Edit" element={<Edit />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

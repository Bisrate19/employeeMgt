import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

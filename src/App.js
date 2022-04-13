import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Appointment } from "./components/Appointment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data/:doctorid" element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;

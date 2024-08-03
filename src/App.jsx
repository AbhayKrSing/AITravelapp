import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TripPage from "./pages/TripPage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" key={"Home"} element={<Home />} />
          <Route path="/planTrip" key={"PlanTrip"} element={<PlanTrip />} />
          <Route path="/trip" key={"TripPage"} element={<TripPage />} />
          <Route path="/contact" key={"Contact"} element={<Contact />} />
          <Route path="/register" key={"Register"} element={<Register />} />
          <Route path="/login" key={"Login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

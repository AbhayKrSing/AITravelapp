import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './pages/Header';
import Home from './pages/Home';
import PlanTrip from './pages/PlanTrip'
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TripPage from "./pages/TripPage";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/planTrip" element={<PlanTrip/>}/>
      <Route path="/trip" element={<TripPage />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
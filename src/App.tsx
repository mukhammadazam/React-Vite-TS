import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import LookBook from "./pages/LookBook";
import SHop from "./pages/SHop";
import Fuatures from "./pages/Fuatures";
import Pages from "./pages/Pages";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<SHop />} />
        <Route path='/LookBook' element={<LookBook />} />
        <Route path='/Fuatures' element={<Fuatures />} />
        <Route path='/Pages' element={<Pages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Fuatures from "./pages/Fuatures";
import LookBook from "./pages/LookBook";
import Pages from "./pages/Pages";
import SHop from "./pages/SHop";
import "./App.css";
import Search from "./components/Search";
import LearMore from "./components/LearMore";
import Carousel from "./components/Corusel";
import Trend from "./components/Trend";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<SHop />} />
        <Route path='/LookBook' element={<LookBook />} />
        <Route path='/Fuatures' element={<Fuatures />} />
        <Route path='/Pages' element={<Pages />} />
        <Route path='/search' element={<Search />} />
        <Route path='/LearMore' element={<LearMore />} />
        <Route path='/Corusel' element={<Carousel />} />
        <Route path='/Trend' element={<Trend />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Discover from "./pages/Discover/Discover";
import Trips from "./pages/Trips/Trips";
import Journal from "./pages/Journal/Journal";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

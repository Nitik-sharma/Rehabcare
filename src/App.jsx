import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";
import Bookappointment from "./pages/Bookappointment";
import "./index.css"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<Contactus />} />
        <Route path="/book-appointment" element={<Bookappointment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

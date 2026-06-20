import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";
import Bookappointment from "./pages/Bookappointment";
import "./index.css"
import About from "./pages/About";
import SportsInjuryRehabilitation from "./components/services/SportsInjuryRehabilitation";
import BackPainTreatment from "./components/services/BackPainTreatment";
import NeckPainTreatment from "./components/services/NeckPainTreatment";
import PostSurgeryRehabilitation from "./components/services/PostSurgeryRehabilitation";
import ManualTherapy from "./components/services/ManualTherapy";
import DryNeedlingTherapy from "./components/services/DryNeedlingTherapy";
import HomePhysiotherapyServices from "./components/services/HomePhysiotherapyServices";
import OrthopedicPhysiotherapy from "./components/services/OrthopedicPhysiotherapy";
import NeurologicalRehabilitation from "./components/services/NeurologicalRehabilitation";
import PediatricPhysiotherapy from "./components/services/PediatricPhysiotherapy ";
import PainManagementTherapy from "./components/services/PainManagementTherapy";
import PostureCorrectionTherapy from "./components/services/PostureCorrectionTherapy";
import GeriatricPhysiotherapy from "./components/services/GeriatricPhysiotherapy";
import ExerciseTherapy from "./components/services/ExerciseTherapy";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/about" element={<About />} />
        <Route path="/book-appointment" element={<Bookappointment />} />

        {/* Service Pages */}
        <Route
          path="/sports-injury-rehabilitation"
          element={<SportsInjuryRehabilitation />}
        />
        <Route path="/back-pain-treatment" element={<BackPainTreatment />} />
        <Route path="/neck-pain-treatment" element={<NeckPainTreatment />} />
        <Route
          path="/post-surgery-rehabilitation"
          element={<PostSurgeryRehabilitation />}
        />
        <Route path="/manual-therapy" element={<ManualTherapy />} />
        <Route path="/dry-needling-therapy" element={<DryNeedlingTherapy />} />
        <Route
          path="/home-physiotherapy-services"
          element={<HomePhysiotherapyServices />}
        />
        <Route
          path="/orthopedic-physiotherapy"
          element={<OrthopedicPhysiotherapy />}
        />
        <Route
          path="/neurological-rehabilitation"
          element={<NeurologicalRehabilitation />}
        />
        <Route
          path="/pediatric-physiotherapy"
          element={<PediatricPhysiotherapy />}
        />
        <Route
          path="/pain-management-therapy"
          element={<PainManagementTherapy />}
        />
        <Route
          path="/posture-correction-therapy"
          element={<PostureCorrectionTherapy />}
        />
        <Route
          path="/geriatric-physiotherapy"
          element={<GeriatricPhysiotherapy />}
        />
        <Route path="/exercise-therapy" element={<ExerciseTherapy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

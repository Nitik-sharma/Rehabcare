import React, { useState, useEffect } from "react";
import { HiArrowLongRight, HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import therapy from "../images/hero1.jpeg";
import therapy1 from "../images/hero2.jpeg";
import hero3 from "../images/hero3.jpeg"
import hero4 from "../images/hero5.jpeg"
import ConditionsWeTreat from "./ConditionsWeTreat";
import OurServices from "./Ourservices";
import FAQ from "./Faq";
import WhyChooseUs from "./WhyChooseUs";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";
import TreatmentProcess from "./TreatmentProcess";
import CTASection from "../components/CtaSection";
import ClinicInfoSection from "../components/ClinicInfoSection";

// Add more images here to lengthen the rotation — it cycles through whatever is listed
const SLIDES = [
  {
    src: therapy,
    alt: "Physiotherapist providing rehabilitation treatment to a patient",
  },
  { src: therapy1, alt: "Modern physiotherapy clinic treatment session" },
  {
    src: hero3,
    alt: "Physiotherapist providing rehabilitation treatment to a patient",
  },
  { src: hero4, alt: "Modern physiotherapy clinic treatment session" },
];

const STATS = [
  {
    icon: HiOutlineHeart,
    value: "5000+",
    label: "Happy Patients Treated",
    color: "text-[#8CC63F]",
  },
  {
    icon: MdAdminPanelSettings,
    value: "4+ Years",
    label: "Of Experience",
    color: "text-[#005AA9]",
  },
  {
    icon: CiUser,
    value: "100%",
    label: "Patient Satisfaction",
    color: "text-[#8CC63F]",
  },
];

function Home() {
  const [slide, setSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  // Auto-advance the background every 3 seconds; paused for reduced-motion users
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      <section
        id="home"
        style={{
          paddingTop: "calc(var(--header-h, 80px) + var(--nav-h, 76px) + 2rem)",
        }}
        className="relative flex items-center justify-center overflow-hidden min-h-[92vh] px-6 pb-16 text-white"
        aria-label="RehabCare Physiotherapy Clinic Home"
      >
        {/* Background image carousel */}
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.img
              key={slide}
              src={SLIDES[slide].src}
              alt={SLIDES[slide].alt}
              className="absolute inset-0 h-full w-full object-cover"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Brand-tinted overlay so the white text stays readable over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003322]/90 via-black/70 to-[#0a1f44]/90" />
        </div>

        {/* Foreground content */}
        <motion.div
          className="relative z-10 max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            Best Physiotherapy Clinic in Gurgaon for Pain Relief, Rehabilitation
            &amp; <span className="text-[#8CC63F]">Recovery</span>
          </h2>

          <h3 className="mt-4 font-serif font-medium text-lg sm:text-xl md:text-2xl text-slate-200">
            Expert Physiotherapy Care in Gurgaon – Move Freely, Live Pain-Free
          </h3>

          <p className="mt-5 text-base md:text-lg font-light text-slate-300 max-w-2xl mx-auto">
            Personalized physiotherapy treatments for back pain, neck pain,
            sports injuries, joint pain, post-surgery rehabilitation, and
            mobility improvement.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/book-appointment"
                aria-label="Book a physiotherapy appointment at RehabCare Clinic"
                className="flex items-center gap-2 bg-[#005AA9] hover:bg-[#00488a] text-white px-6 py-3
                rounded-full font-semibold shadow-[0_8px_24px_-6px_rgba(0,90,169,0.6)] transition-colors"
              >
                Book Appointment
                <HiArrowLongRight size={20} />
              </Link>
            </motion.div>

            <motion.a
              href="tel:9034107746"
              aria-label="Call RehabCare Physiotherapy Clinic"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md
              text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <HiOutlinePhone size={20} />
              Call Us
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.4 },
              },
            }}
          >
            {STATS.map(({ icon: Icon, value, label, color }) => (
              <motion.article
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center gap-1 bg-white/10 backdrop-blur-md border
                border-white/15 rounded-xl px-6 py-4 min-w-[140px] shadow-lg"
              >
                <Icon className={color} size={28} />
                <p className="font-bold text-xl">{value}</p>
                <p className="text-xs text-slate-300 text-center">{label}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <WhyChooseUs />
      <ConditionsWeTreat />
      <TreatmentProcess />
      <OurServices />
      <TeamSection />
      <Testimonials />
      <CTASection />

      <FAQ />
      <ClinicInfoSection />
    </>
  );
}

export default Home;

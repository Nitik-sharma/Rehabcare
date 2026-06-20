import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { FaHeartbeat } from "react-icons/fa";
import logo from "../images/logo.png"

/**
 * Navbar
 * -------
 * Healthcare/physiotherapy site navigation.
 * - Glassmorphic, frosted backdrop that solidifies on scroll
 * - "Book Appointment" CTA always visible, even on mobile
 * - Full slide-in mobile menu with staggered link reveal
 * - Active route highlighting via NavLink
 *
 * Brand tokens used here are defined in tailwind.config.js:
 *   brand-blue   #005AA9
 *   brand-green  #8CC63F
 *   brand-gray   #F8FAFC
 *   brand-dark   #1E293B
 */

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  // { label: "Doctors", path: "/doctors" },
  // { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to switch from transparent-glass to solid-glass
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close the mobile menu automatically if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,90,169,0.08)] border-b border-slate-200/60"
            : "bg-white/40 backdrop-blur-md border-b border-white/20"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* ---------- Logo ---------- */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
           <img src={logo} alt="logo" srcset="" className=" h-20 md:h-[120px] p-3"/>
           
          </Link>

          {/* ---------- Desktop links ---------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActive
                        ? "text-brand-blue"
                        : "text-slate-600 hover:text-brand-blue hover:bg-brand-blue/5"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-pill"
                          className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-blue"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ---------- Right side: CTA (desktop) + hamburger (mobile) ---------- */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/book-appointment"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-[#0072D6] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition-shadow duration-200 hover:shadow-lg hover:shadow-brand-blue/35 sm:inline-flex"
              >
                <HiOutlineCalendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </motion.div>

            {/* Compact CTA for very small screens (icon-first, label hidden below 400px handled by parent) */}
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-3.5 py-2 text-xs font-semibold text-white shadow-sm sm:hidden"
            >
              <HiOutlineCalendar className="h-3.5 w-3.5" />
              Book
            </Link>

            {/* Hamburger — mobile/tablet only */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg text-brand-dark transition-colors hover:bg-brand-blue/5 lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiOutlineX className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <HiOutlineMenuAlt3 className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- Mobile slide-in drawer ---------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-brand-dark/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed top-0 right-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-white/95 backdrop-blur-xl shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5 sm:h-20">
                <span className="text-base font-bold text-brand-dark">
                  Physio<span className="text-brand-blue">Care</span>
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <HiOutlineX className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer links — staggered reveal */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                          isActive
                            ? "bg-brand-blue/10 text-brand-blue"
                            : "text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + NAV_LINKS.length * 0.05,
                  duration: 0.3,
                }}
                className="border-t border-slate-100 p-5"
              >
                <Link
                  to="/book-appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-[#0072D6] px-5 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-brand-blue/25"
                >
                  <HiOutlineCalendar className="h-4.5 w-4.5" />
                  Book Appointment
                </Link>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Or call us at{" "}
                  <a
                    href="tel:+91 9034107746"
                    className="font-medium text-brand-blue"
                  >
                    +91 9034107746
                  </a>
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so page content doesn't sit under the fixed header */}
      <div className="h-16 sm:h-20" aria-hidden="true" />
    </>
  );
}

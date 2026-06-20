import React, { useState, useEffect, useRef } from "react";
import Heroimg from "../images/AboutHero.avif"
import {
  Calendar,
  Phone,
  Star,
  CheckCircle2,
  Menu,
  X,
  Award,
  TrendingUp,
  Users,
  Heart,
  Target,
  Rocket,
  Handshake,
  Lightbulb,
  Home,
  Sparkles,
  Stethoscope,
  ClipboardList,
  Activity,
  ShieldCheck,
  Sun,
  Plus,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";
import ClinicInfoSection from "../components/ClinicInfoSection";

// ---- Brand tokens (exact hex values from the design spec) ----
const C = {
  blue: "#005CB9",
  blueDeep: "#003B7A",
  blueSoft: "#E8F1FC",
  green: "#7CC242",
  greenDeep: "#5FA02E",
  greenSoft: "#EEF8E4",
};

// ---- Scroll reveal hook ----
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

// ---- Reusable bits ----
function Eyebrow({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
      style={{ color: C.blue }}
    >
      <span
        className="w-4 h-0.5 rounded-full"
        style={{ background: C.green }}
      />
      {children}
    </span>
  );
}

function PrimaryButton({ children, className = "" }) {
  return (
    <a
      href="#cta"
      className={`inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
      style={{ background: C.green }}
    >
      {children}
    </a>
  );
}

function OutlineButton({ children, className = "" }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full text-white border-2 border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 ${className}`}
    >
      {children}
    </a>
  );
}

// ---- Data ----
const STATS = [
  { icon: Users, num: "5000+", label: "Patients Treated" },
  { icon: TrendingUp, num: "95%", label: "Success Rate" },
  { icon: Award, num: "10+", label: "Years Experience" },
  { icon: Activity, num: "1000+", label: "Successful Recoveries" },
];

const DOCTORS = [
  {
    initials: "PV",
    name: "Dr. Pankaj Vats",
    role: "MPT Orthopedics",
    subRole: "Senior Physiotherapist",
    grad: [C.blue, C.blueDeep],
    accent: C.blue,
    specs: [
      "Sports Injury Rehabilitation",
      "Orthopedic Physiotherapy",
      "Back Pain Treatment",
      "Neck Pain Treatment",
      "Post Surgery Rehabilitation",
      "Manual Therapy",
    ],
    desc: "Dr. Pankaj Vats specializes in orthopedic rehabilitation and sports injury management, helping patients regain strength, mobility, and confidence through evidence-based physiotherapy care.",
  },
  {
    initials: "NV",
    name: "Dr. Nisha Vats",
    role: "Physiotherapist",
    subRole: "Rehabilitation Specialist",
    grad: [C.green, C.greenDeep],
    accent: C.greenDeep,
    specs: [
      "Neurological Rehabilitation",
      "Pediatric Physiotherapy",
      "Functional Recovery",
      "Mobility Training",
      "Home Physiotherapy",
      "Manual Therapy",
    ],
    desc: "Dr. Nisha Vats is passionate about helping patients achieve functional independence through personalized rehabilitation programs and compassionate physiotherapy care.",
  },
];

const FEATURES = [
  {
    icon: Target,
    title: "Personalized Treatment Plans",
    desc: "Every patient receives a customized rehabilitation plan.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Physiotherapists",
    desc: "Qualified professionals dedicated to your recovery.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "Focused on measurable outcomes and long-term wellness.",
  },
  {
    icon: Home,
    title: "Home Physiotherapy",
    desc: "Professional treatment in the comfort of your home.",
  },
  {
    icon: Sparkles,
    title: "Advanced Rehabilitation",
    desc: "Evidence-based techniques and modern equipment.",
  },
  {
    icon: Users,
    title: "One-on-One Attention",
    desc: "Dedicated support throughout your recovery journey.",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Treating every patient with empathy and respect.",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "Delivering the highest standard of physiotherapy care.",
  },
  {
    icon: Handshake,
    title: "Trust",
    desc: "Building long-term relationships through transparency.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Continuously improving through learning and technology.",
  },
];

const STEPS = [
  { icon: ClipboardList, title: "Assessment & Diagnosis" },
  { icon: Target, title: "Personalized Treatment Plan" },
  { icon: Activity, title: "Hands-On Therapy & Rehabilitation" },
  { icon: ShieldCheck, title: "Recovery & Prevention" },
  { icon: Sun, title: "Healthy Active Lifestyle" },
];

const FAQS = [
  {
    q: "Do I need a doctor's referral?",
    a: "No. You can directly book an appointment.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your condition and recovery goals.",
  },
  {
    q: "Do you offer home physiotherapy?",
    a: "Yes, we provide home physiotherapy services across Gurgaon.",
  },
  {
    q: "Is physiotherapy painful?",
    a: "Our treatments are designed to reduce pain and improve mobility safely.",
  },
  {
    q: "Do you treat sports injuries?",
    a: "Yes, sports injury rehabilitation is one of our specialties.",
  },
  {
    q: "What conditions do you treat?",
    a: "Back pain, neck pain, sports injuries, arthritis, neurological disorders, post-surgery rehabilitation, and more.",
  },
];

const QUICK_LINKS = ["Home", "About", "Services", "Team", "Contact"];
const SERVICES = [
  "Sports Injury Rehabilitation",
  "Back Pain Treatment",
  "Neck Pain Treatment",
  "Post Surgery Rehabilitation",
  "Manual Therapy",
  "Dry Needling",
  "Home Physiotherapy",
];

// ---- Sub components ----
function Logo({ light }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2.5 font-bold text-lg ${light ? "text-white" : "text-slate-900"}`}
    >
      <span
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${C.green}, ${C.blue})` }}
      >
        <Activity className="w-4 h-4 text-white" strokeWidth={2.4} />
      </span>
      RehabCare Clinic
    </a>
  );
}



//    and pass heroImg here instead of a string.
const HERO_IMAGE_URL = Heroimg;
 
function Hero() {
  return (
    <section
      className="relative flex items-center pt-36 pb-40 overflow-hidden"
      style={{
        minHeight: "80vh",
        backgroundImage: `linear-gradient(160deg, rgba(0,40,90,.94), rgba(0,67,130,.88) 45%, rgba(95,160,46,.6)), url(${HERO_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: C.blueDeep,
      }}
    >
      {/* decorative blurred circles */}
      <div className="absolute -top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: C.green }} />
      <div className="absolute bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl opacity-10 bg-white" />
 
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 text-white">
        <Eyebrow>
          <span style={{ color: "#BFE6A6" }}>Gurgaon's Trusted Recovery Partner</span>
        </Eyebrow>
        <h1 className="mt-4 font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight">
          ABOUT REHABCARE CLINIC
        </h1>
        <p className="mt-5 text-lg sm:text-xl font-medium" style={{ color: "#E3EEFB" }}>
          Helping Patients Recover, Move Better, and Live Pain-Free Lives.
        </p>
        <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#C9DAF0" }}>
          At RehabCare Clinic, we combine expert physiotherapy care, personalized rehabilitation
          programs, and advanced treatment techniques to help individuals recover from injuries,
          surgeries, and chronic pain conditions.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton>
            <Calendar className="w-4 h-4" /> Book Appointment
          </PrimaryButton>
          <OutlineButton>
            <Phone className="w-4 h-4" /> Call Now
          </OutlineButton>
        </div>
        <div className="mt-9 flex flex-col items-center gap-1.5">
          <div className="flex gap-1" style={{ color: C.green }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4" fill={C.green} strokeWidth={0} />
            ))}
          </div>
          <span className="text-xs font-medium" style={{ color: "#CBDBF0" }}>
            Trusted by Patients Across Gurgaon
          </span>
        </div>
      </div>
 
      {/* floating cards */}
      <div className="hidden lg:flex absolute items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/25 rounded-2xl px-5 py-4 shadow-2xl animate-bounce" style={{ left: "4%", bottom: "22%", animationDuration: "5s" }}>
        <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: C.green }}>
          <CheckCircle2 className="w-5 h-5 text-slate-900" />
        </span>
        <div className="text-white">
          <b className="block text-sm font-semibold">5000+ Patients</b>
          <small className="text-xs" style={{ color: "#D7E5F6" }}>Successfully treated</small>
        </div>
      </div>
      <div className="hidden lg:flex absolute items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/25 rounded-2xl px-5 py-4 shadow-2xl animate-bounce" style={{ right: "4%", top: "28%", animationDuration: "6s", animationDelay: "1s" }}>
        <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: C.blue }}>
          <Stethoscope className="w-5 h-5 text-white" />
        </span>
        <div className="text-white">
          <b className="block text-sm font-semibold">Expert Physiotherapists</b>
          <small className="text-xs" style={{ color: "#D7E5F6" }}>Personalized care</small>
        </div>
      </div>
 
      {/* curved bottom edge */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-20 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,90 C 320,0 860,0 1440,90 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}

function StoryVisual() {
  return (
    <div className="relative">
      <div
        className="rounded-3xl overflow-hidden shadow-2xl relative"
        style={{
          aspectRatio: "4 / 4.6",
          background: `linear-gradient(150deg, ${C.blue} 0%, ${C.blueDeep} 60%, ${C.blueDeep} 100%)`,
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-25 blur-2xl"
          style={{ background: C.green }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
            <Stethoscope className="w-9 h-9 text-white/90" />
          </div>
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: C.green }}
            />
            <span className="w-16 h-0.5 bg-white/40 rounded-full" />
            <span className="w-3 h-3 rounded-full bg-white/70" />
            <span className="w-16 h-0.5 bg-white/40 rounded-full" />
            <span
              className="w-3 h-3 rounded-full"
              style={{ background: C.green }}
            />
          </div>
          <div className="w-24 h-16 rounded-xl bg-white/10 flex items-center justify-center">
            <Activity className="w-7 h-7" style={{ color: C.green }} />
          </div>
        </div>
      </div>
      <div className="absolute -top-6 -right-4 sm:-right-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3">
        <div className="font-bold text-xl" style={{ color: C.blue }}>
          10+
        </div>
        <div className="text-xs leading-tight text-slate-500 font-medium">
          Years
          <br />
          Experience
        </div>
      </div>
      <div className="absolute -bottom-6 -left-4 sm:-left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3">
        <div className="font-bold text-xl" style={{ color: C.greenDeep }}>
          95%
        </div>
        <div className="text-xs leading-tight text-slate-500 font-medium">
          Success
          <br />
          Rate
        </div>
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <StoryVisual />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            A Mission Built Around Real Recovery
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            RehabCare Clinic was founded with a simple mission — to help people
            overcome pain, restore movement, and regain confidence in their
            daily lives.
          </p>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            We recognized that many individuals suffer from chronic pain, sports
            injuries, post-surgical complications, and mobility limitations
            without receiving the comprehensive rehabilitation support they
            deserve.
          </p>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Through personalized treatment plans, evidence-based physiotherapy
            techniques, and compassionate care, we help our patients achieve
            lasting recovery and improved quality of life.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <s.icon
                  className="w-5 h-5 mb-2"
                  style={{ color: i % 2 === 0 ? C.blue : C.greenDeep }}
                />
                <div
                  className="font-bold text-2xl"
                  style={{ color: i % 2 === 0 ? C.blue : C.greenDeep }}
                >
                  {s.num}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      bg: C.blueSoft,
      color: C.blue,
      text: "To provide exceptional physiotherapy care through evidence-based treatment methods, personalized rehabilitation programs, and patient-centered services that promote long-term health and wellness.",
    },
    {
      icon: Rocket,
      title: "Our Vision",
      bg: C.greenSoft,
      color: C.greenDeep,
      text: "To become Gurgaon's most trusted physiotherapy and rehabilitation center by delivering innovative treatments, outstanding patient experiences, and measurable recovery outcomes.",
    },
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <Eyebrow>What Drives Us</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Mission &amp; Vision
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="bg-white rounded-3xl p-10 border border-slate-100 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: c.bg }}
                >
                  <c.icon className="w-6 h-6" style={{ color: c.color }} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experts() {
  return (
    <section className="py-28 bg-white" id="experts">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-14">
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Meet Our Physiotherapy Experts
          </h2>
          <p className="mt-3 text-slate-500">
            Dedicated professionals committed to your recovery journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {DOCTORS.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <div className="border border-slate-100 rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-bold text-xl text-white"
                    style={{
                      background: `linear-gradient(135deg, ${d.grad[0]}, ${d.grad[1]})`,
                    }}
                  >
                    {d.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {d.name}
                    </h3>
                    <div
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: d.accent }}
                    >
                      {d.role}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {d.subRole}
                    </div>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 my-6">
                  {d.specs.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-xs text-slate-700"
                    >
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: d.accent }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {d.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border-b-2 pb-0.5"
                  style={{ color: d.accent, borderColor: d.accent }}
                >
                  View Profile <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <Eyebrow>Our Advantage</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Why Patients Choose RehabCare
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div
                className="bg-white rounded-2xl p-7 border border-slate-100 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = C.green)
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: C.blueSoft }}
                >
                  <f.icon className="w-5 h-5" style={{ color: C.blue }} />
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-2">
                  {f.title}
                </h4>
                <p className="text-sm text-slate-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <Eyebrow>What We Stand For</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${C.blueSoft}, ${C.greenSoft})`,
                }}
              >
                <v.icon className="w-6 h-6" style={{ color: C.blue }} />
              </div>
              <h4 className="font-bold text-base text-slate-900 mb-1.5">
                {v.title}
              </h4>
              <p className="text-xs text-slate-500">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Your Recovery Journey
          </h2>
        </div>

        {/* desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 gap-3 relative">
          <div
            className="absolute left-0 right-0 h-0.5 bg-slate-200"
            style={{ top: "34px" }}
          />
          {STEPS.map((s, i) => {
            const accent = i % 2 === 0 ? C.blue : C.greenDeep;
            return (
              <Reveal
                key={s.title}
                delay={i * 100}
                className="relative text-center"
              >
                <div
                  className="relative z-10 w-16 h-16 rounded-full bg-white border-2 mx-auto mb-4 flex items-center justify-center"
                  style={{
                    borderColor: accent,
                    boxShadow: "0 0 0 8px #F8FAFC",
                  }}
                >
                  <s.icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 px-1.5">
                  {s.title}
                </h4>
              </Reveal>
            );
          })}
        </div>

        {/* mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-7 pl-9 border-l-2 border-dashed border-slate-200">
          {STEPS.map((s, i) => {
            const accent = i % 2 === 0 ? C.blue : C.greenDeep;
            return (
              <Reveal
                key={s.title}
                delay={i * 80}
                className="flex items-center gap-4 -ml-11"
              >
                <div
                  className="w-14 h-14 rounded-full bg-slate-50 border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: accent }}
                >
                  <s.icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h4 className="text-sm font-semibold text-slate-900">
                  {s.title}
                </h4>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border border-slate-100 rounded-2xl mb-3.5 overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-base text-slate-900"
      >
        {item.q}
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
          style={{
            background: isOpen ? C.green : C.blueSoft,
            transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
          }}
        >
          <Plus
            className="w-3.5 h-3.5"
            style={{ color: isOpen ? "#0F172A" : C.blue }}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <Eyebrow>Got Questions?</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIdx === i}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="cta"
      className="py-24 text-center text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(120deg, ${C.blue} 0%, ${C.blueDeep} 38%, ${C.greenDeep} 100%)`,
      }}
    >
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Start Your Recovery Journey Today
        </h2>
        <p className="mt-4 text-base" style={{ color: "#E4EFFA" }}>
          Take the first step towards a healthier, pain-free life with expert
          physiotherapy care from RehabCare Clinic.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton>
            <Calendar className="w-4 h-4" /> Book Appointment
          </PrimaryButton>
          <OutlineButton>
            <Phone className="w-4 h-4" /> Call Now
          </OutlineButton>
        </div>
        <p className="mt-7 text-xs font-medium" style={{ color: "#DCEAF8" }}>
          Trusted by Hundreds of Patients Across Gurgaon
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-7">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <Logo light />
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-slate-400">
            RehabCare Clinic is a trusted physiotherapy and rehabilitation
            center in Gurgaon dedicated to helping patients recover from
            injuries, manage pain, and improve mobility through personalized
            treatment plans and expert care.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-white transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: C.green }}
              />
              Phone Number
            </li>
            <li className="flex items-start gap-2.5">
              <Mail
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: C.green }}
              />
              Email Address
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                style={{ color: C.green }}
              />
              Gurgaon, Haryana
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-xs text-slate-500">
        Copyright © 2026 RehabCare Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
     
      <Hero />
      <OurStory />
      <MissionVision />
      <Experts />
      <WhyChoose />
      <Values />
      <Process />
      <FAQ />
      <FinalCTA />
      <ClinicInfoSection/>
     
    </div>
  );
}

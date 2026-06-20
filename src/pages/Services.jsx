import React, { useEffect, useState } from "react";
import serviceImage from "../images/serviceHero.avif";
import CTASection from "../components/CtaSection";
import service1 from "../images/s1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png";
import service6 from "../images/service6.png";
import service7 from "../images/service7.png";
import service8 from "../images/service8.png";
import service9 from "../images/service9.png";
import service10 from "../images/service10.png";
import service11 from "../images/service11.png";
import service12 from "../images/service12.png";
import service13 from "../images/service13.png";
import pain from "../images/pain.png";
import { Link } from "react-router-dom";

/**
 * Swap in a licensed photo here (e.g. a physiotherapist working with a
 * patient) and it will automatically sit behind the blue gradient scrim
 * below. Left empty, the hero falls back to the gradient + dial graphic.
 */
const HERO_IMAGE_URL = serviceImage;

/**
 * Each service can take an `image` URL (e.g. '/images/services/sports-injury.jpg'
 * once you have real photos, or any hosted URL). Left as an empty string,
 * the card shows a branded placeholder instead — never a broken image.
 */
const SERVICES = [
  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    description:
      "Recover safely and return to your active lifestyle with rehabilitation programs built to restore strength, mobility and performance.",
    tags: ["Ligament Injuries", "Muscle Strains", "Knee Injuries"],
    progress: 0.62,
    image: service1,
    path: "/sports-injury-rehabilitation",
  },
  {
    id: "back-pain",
    title: "Back Pain Treatment",
    description:
      "Targeted treatment for acute and chronic back pain, helping you regain comfort, posture and everyday mobility.",
    tags: ["Lower Back Pain", "Sciatica", "Disc Problems"],
    progress: 0.58,
    image: service2,
    path: "/back-pain-treatment",
  },
  {
    id: "neck-pain",
    title: "Neck Pain Treatment",
    description:
      "Specialized care for neck pain, stiffness and posture-related conditions, easing tension from the first session.",
    tags: ["Cervical Pain", "Whiplash Injury", "Tension Headaches"],
    progress: 0.55,
    image: service3,
    path: "/neck-pain-treatment",
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Rehabilitation",
    description:
      "Structured recovery programs that rebuild strength and function safely after surgery, at a pace your body can handle.",
    tags: ["Knee Replacement", "ACL Reconstruction", "Fracture Recovery"],
    progress: 0.7,
    image: service4,
    path: "/post-surgery-rehabilitation",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description:
      "Hands-on techniques that relieve pain, release tight tissue and restore movement where it matters most.",
    tags: ["Joint Mobilization", "Myofascial Release", "Trigger Point Therapy"],
    progress: 0.66,
    image: service5,
    path: "/manual-therapy",
  },
  {
    id: "dry-needling",
    title: "Dry Needling Therapy",
    description:
      "Precise treatment of muscle trigger points to ease chronic tightness and speed up recovery.",
    tags: ["Chronic Pain", "Sports Injuries", "Muscle Tightness"],
    progress: 0.6,
    image: service6,
    path: "/dry-needling-therapy",
  },
  {
    id: "home-physio",
    title: "Home Physiotherapy Services",
    description:
      "Professional physiotherapy delivered in the comfort of your home, with care plans built around your routine.",
    tags: ["Senior Citizens", "Post-Surgery Patients", "Neurological Patients"],
    progress: 0.5,
    image: service7,
    path: "/home-physiotherapy-services",
  },
  {
    id: "orthopedic",
    title: "Orthopedic Physiotherapy",
    description:
      "Focused care for the bones, joints and muscles, easing pain while rebuilding the strength behind it.",
    tags: ["Arthritis", "Frozen Shoulder", "Tennis Elbow"],
    progress: 0.72,
    image: service8,
    path: "/orthopedic-physiotherapy",
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    description:
      "Rehabilitation built for the nervous system, helping rebuild balance, coordination and independence.",
    tags: ["Stroke", "Parkinson's Disease", "Spinal Cord Injury"],
    progress: 0.68,
    image: service9,
    path: "/neurological-rehabilitation",
  },
  {
    id: "pediatric",
    title: "Pediatric Physiotherapy",
    description:
      "Gentle, specialized therapy that supports children's physical development, coordination and confidence.",
    tags: ["Developmental Delays", "Cerebral Palsy", "Balance Disorders"],
    progress: 0.54,
    image: service10,
    path: "/pediatric-physiotherapy",
  },
  {
    id: "pain-management",
    title: "Pain Management Therapy",
    description:
      "Long-term strategies for chronic and recurring pain, reducing dependence on medication over time.",
    tags: ["Chronic Back Pain", "Joint Pain", "Arthritis"],
    progress: 0.6,
    image: pain,
    path: "/pain-management-therapy",
  },
  {
    id: "posture-correction",
    title: "Posture Correction Therapy",
    description:
      "Correct postural habits before they become pain, with daily-life adjustments that actually stick.",
    tags: ["Spinal Alignment", "Ergonomic Coaching", "Core Stability"],
    progress: 0.5,
    image: service11,
    path: "/posture-correction-therapy",
  },
  {
    id: "geriatric",
    title: "Geriatric Physiotherapy",
    description:
      "Mobility-focused care for older adults, built around balance, strength and confident independence.",
    tags: ["Fall Prevention", "Balance Training", "Joint Care"],
    progress: 0.56,
    image: service12,
    path: "/geriatric-physiotherapy",
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    description:
      "Custom exercise programs that rebuild strength, flexibility and endurance, one session at a time.",
    tags: ["Strength Building", "Flexibility", "Injury Prevention"],
    progress: 0.64,
    image: service13,
    path: "/exercise-therapy",
  },
];

/** A small goniometer-style dial — physiotherapy's own instrument for
 *  measuring range of motion — used as the visual signature throughout.
 *  `tone="light"` is for use on the blue gradient (hero, image placeholders);
 *  `tone="brand"` is for use on white/light surfaces (the card badge). */
function ArcIcon({ progress = 0.6, size = 56, tone = "brand" }) {
  const stroke = Math.max(4, size / 11);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const sweep = 0.72;
  const dash = c * sweep;
  const gap = c - dash;
  const [filled, setFilled] = useState(0);

  const trackColor =
    tone === "light" ? "rgba(255,255,255,0.35)" : "rgba(0,85,184,0.14)";
  const dotColor = tone === "light" ? "#FFFFFF" : "#0055B8";

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setFilled(progress);
      return undefined;
    }
    const t = setTimeout(() => setFilled(progress), 150);
    return () => clearTimeout(t);
  }, [progress]);

  const offset = dash * (1 - filled);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="block"
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={trackColor}
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(126 ${size / 2} ${size / 2})`}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#8CC63F"
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(126 ${size / 2} ${size / 2})`}
        style={{
          transition: "stroke-dashoffset 1.1s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={Math.max(2, size / 22)}
        fill={dotColor}
      />
    </svg>
  );
}

function ServiceCard({ service, index }) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(service.image) && !imgError;

  return (
    <Link
      to={service.path}
      className="group relative flex h-full flex-col rounded-[20px] border border-[#0055B8]/10 bg-[#F2F7FC] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0A73D9]/35 hover:bg-white hover:shadow-2xl hover:shadow-[#0055B8]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A73D9] motion-safe:opacity-0 motion-safe:[animation:physio-fade-up_0.6s_ease_both]"
      style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-t-[20px] bg-gradient-to-br from-[#0055B8] to-[#0A73D9]">
          {showImage ? (
            <img
              src={service.image}
              alt={`${service.title} at our physiotherapy clinic`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ArcIcon progress={service.progress} size={76} tone="light" />
            </div>
          )}
        </div>
        <div className="absolute bottom-0 right-6 flex h-14 w-14 translate-y-1/2 items-center justify-center rounded-2xl border border-[#0055B8]/10 bg-white shadow-lg">
          <ArcIcon progress={service.progress} size={40} tone="brand" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-7 pb-7 pt-9">
        <h3 className="font-display text-lg font-semibold text-[#1F2937]">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#1F2937]/70">
          {service.description}
        </p>
        <div className="mt-auto flex flex-col gap-3 pt-2">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-data rounded-full border border-[#8CC63F]/45 bg-white px-3 py-1 text-[0.66rem] uppercase tracking-wide text-[#0055B8]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-display inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A73D9] transition-transform duration-300 group-hover:translate-x-1">
            Learn more
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function Hero() {
  const heroStyle = HERO_IMAGE_URL
    ? {
        backgroundImage: `linear-gradient(125deg, rgba(0,45,110,0.93), rgba(10,115,217,0.82)), url(${HERO_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#003E87] via-[#0055B8] to-[#0A73D9] px-6 pb-20 pt-24 text-white sm:px-10 sm:pb-24 sm:pt-28"
      style={heroStyle}
    >
      <div
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[140%] w-[60%] bg-[radial-gradient(circle,rgba(140,198,63,0.18)_0%,rgba(140,198,63,0)_65%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="font-data mb-4 text-xs uppercase tracking-[0.2em] text-[#8CC63F] sm:text-sm">
            Physiotherapy &amp; Rehabilitation Clinic
          </p>
          <h1 className="font-display mb-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Restore Your Range of Motion.{" "}
            <span className="text-[#C9EB95]">Recover Without Limits.</span>
          </h1>
          <p className="mb-8 max-w-[46ch] text-base leading-relaxed text-white/85 sm:text-lg">
            Licensed physiotherapists treat sports injuries, back and neck pain,
            and post-surgery recovery — combining manual therapy, dry needling
            and personalized exercise plans to get you moving again, in clinic
            or at home.
          </p>
          <div className="flex flex-col items-start gap-3">
            <button
              type="button"
              className="font-display rounded-full bg-[#8CC63F] px-8 py-4 text-sm font-semibold text-[#14210F] shadow-lg shadow-[#8CC63F]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7CBF32] hover:shadow-xl hover:shadow-[#8CC63F]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Your Assessment
            </button>
            <p className="font-data text-xs uppercase tracking-wide text-white/65">
              14 specialized programs · Licensed physiotherapists · In-clinic
              &amp; home visits
            </p>
          </div>
        </div>
        <div
          className="relative mx-auto hidden h-60 w-60 motion-safe:animate-[physio-spin_60s_linear_infinite] lg:col-span-2 lg:block"
          aria-hidden="true"
        >
          <ArcIcon progress={0.78} size={220} tone="light" />
          <div className="absolute left-12 top-12 opacity-55">
            <ArcIcon progress={0.42} size={140} tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FONT_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap');

.physio-root { font-family: 'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif; }
.font-display { font-family: 'Sora', ui-sans-serif, system-ui, sans-serif; }
.font-data { font-family: 'IBM Plex Mono', ui-monospace, monospace; }

@keyframes physio-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes physio-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

function Services() {
  return (
    <div className="physio-root bg-white text-[#1F2937] antialiased">
      <style>{FONT_STYLES}</style>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
        <div className="mb-12 max-w-[64ch]">
          <p className="font-data mb-4 text-xs uppercase tracking-[0.2em] text-[#0A73D9] sm:text-sm">
            Our Services
          </p>
          <h2 className="font-display mb-4 text-3xl font-bold leading-tight text-[#1F2937] sm:text-4xl">
            Comprehensive Care, Built Around Your Recovery
          </h2>
          <p className="text-base leading-relaxed text-[#1F2937]/70 sm:text-lg">
            Every program is led by a licensed physiotherapist and tailored to
            your condition, your goals and your pace — from your first
            assessment to full recovery.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.id} />
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}

export default Services;

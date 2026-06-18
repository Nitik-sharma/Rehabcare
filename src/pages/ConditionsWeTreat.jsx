
import React from "react";
import { motion } from "framer-motion";
import {
  FaBone,
  FaWalking,
  FaDumbbell,
  FaBrain,
  FaRunning,
  FaUserInjured,
  FaHeartbeat,
} from "react-icons/fa";
import { MdAccessibilityNew } from "react-icons/md";

const CONDITIONS = [
  {
    icon: FaBone,
    title: "Back Pain",
    blurb: "Relief for chronic and acute lower or upper back pain.",
  },
  {
    icon: FaWalking,
    title: "Knee Pain",
    blurb: "Restore strength and mobility after injury or wear.",
  },
  {
    icon: FaDumbbell,
    title: "Shoulder Pain",
    blurb: "Treatment for frozen shoulder, stiffness, and rotator cuff issues.",
  },
  {
    icon: FaBrain,
    title: "Neurological Rehab",
    blurb: "Recovery support after stroke, paralysis, or nerve injury.",
  },
  {
    icon: FaRunning,
    title: "Sports Injury",
    blurb: "Sport-specific rehab to get you back in the game safely.",
  },
  {
    icon: MdAccessibilityNew,
    title: "Posture Correction",
    blurb: "Fix alignment issues from desk jobs and screen time.",
  },
  {
    icon: FaUserInjured,
    title: "Arthritis",
    blurb: "Manage joint stiffness and pain with targeted therapy.",
  },
  {
    icon: FaHeartbeat,
    title: "Joint Pain",
    blurb: "Non-surgical relief for hips, ankles, wrists, and more.",
  },
];

// Simple stylised body map — abstract, not anatomical, just enough to anchor
// the grid visually and echo the pulse-dot motif used elsewhere on the site.
function BodyIllustration() {
  return (
    <svg
      viewBox="0 0 240 420"
      className="w-40 lg:w-48 h-auto mx-auto"
      aria-hidden="true"
    >
      <circle cx="120" cy="55" r="38" fill="#EAF4FB" />
      <rect x="75" y="110" width="90" height="150" rx="45" fill="#EAF4FB" />
      <rect x="40" y="120" width="34" height="120" rx="17" fill="#EAF4FB" />
      <rect x="166" y="120" width="34" height="120" rx="17" fill="#EAF4FB" />
      <rect x="80" y="250" width="34" height="150" rx="17" fill="#EAF4FB" />
      <rect x="126" y="250" width="34" height="150" rx="17" fill="#EAF4FB" />

      {[
        { cx: 120, cy: 55, fill: "#8CC63F" },
        { cx: 120, cy: 160, fill: "#005AA9" },
        { cx: 183, cy: 150, fill: "#8CC63F" },
        { cx: 97, cy: 320, fill: "#005AA9" },
      ].map((dot, i) => (
        <g key={i}>
          <circle
            cx={dot.cx}
            cy={dot.cy}
            r="7"
            fill={dot.fill}
            opacity="0.5"
            className="animate-ping"
            style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
          />
          <circle cx={dot.cx} cy={dot.cy} r="5" fill={dot.fill} />
        </g>
      ))}
    </svg>
  );
}

function ConditionsWeTreat() {
  return (
    <section
      id="conditions"
      style={{
        scrollMarginTop: "calc(var(--header-h, 80px) + var(--nav-h, 76px))",
      }}
      className="bg-[#F8FAFC] py-16 px-6"
      aria-label="Conditions we treat"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1E293B]">
            Conditions We Treat
          </h2>
          <p className="mt-3 text-slate-500">
            From everyday aches to post-surgical recovery, our physiotherapists
            treat a wide range of conditions with personalized, evidence-based
            care.
          </p>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 items-center">
          <div className="hidden lg:block">
            <BodyIllustration />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CONDITIONS.map(({ icon: Icon, title, blurb }, idx) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md
                hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col items-center text-center gap-2"
              >
                <span className="h-12 w-12 flex items-center justify-center rounded-full bg-[#EAF4FB]">
                  <Icon className="text-[#005AA9]" size={22} />
                </span>
                <h3 className="font-semibold text-sm text-[#1E293B]">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">{blurb}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConditionsWeTreat;

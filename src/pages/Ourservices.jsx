import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdHealing } from "react-icons/md";
import {
  FaRunning,
  FaHome,
  FaChild,
  FaBrain,
  FaProcedures,
} from "react-icons/fa";

const SERVICES = [
  {
    slug: "orthopedic-physiotherapy",
    title: "Orthopedic Physiotherapy",
    icon: MdHealing,
    blurb:
      "Targeted care for bone, joint, and muscle conditions — from fractures to chronic stiffness.",
  },
  {
    slug: "sports-physiotherapy",
    title: "Sports Physiotherapy",
    icon: FaRunning,
    blurb:
      "Injury recovery and performance-focused rehab for athletes and active individuals.",
  },
  {
    slug: "home-physiotherapy",
    title: "Home Physiotherapy",
    icon: FaHome,
    blurb:
      "Professional treatment sessions delivered at your doorstep across Gurgaon.",
  },
  {
    slug: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    icon: FaChild,
    blurb:
      "Gentle, developmental therapy designed specifically for infants and children.",
  },
  {
    slug: "neurological-physiotherapy",
    title: "Neurological Physiotherapy",
    icon: FaBrain,
    blurb:
      "Rehabilitation support for stroke, paralysis, and nerve-related conditions.",
  },
  {
    slug: "post-surgery-rehab",
    title: "Post-Surgery Rehab",
    icon: FaProcedures,
    blurb:
      "Structured recovery plans to safely rebuild strength after surgery.",
  },
];

function OurServices() {
  return (
    <section
      id="services"
      style={{
        scrollMarginTop: "calc(var(--header-h, 80px) + var(--nav-h, 76px))",
      }}
      className="bg-white py-16 px-6"
      aria-label="Our physiotherapy services"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1E293B]">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500">
            Six specialized physiotherapy programs, each built around a
            different stage or type of recovery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ slug, title, icon: Icon, blurb }, idx) => (
            <motion.article
              key={slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg
              transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-28 bg-gradient-to-br from-[#005AA9] to-[#0a2f55] flex items-center justify-center">
                <Icon className="text-white" size={36} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-[#1E293B]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 flex-1">{blurb}</p>
                <Link
                  to={`/services#${slug}`}
                  aria-label={`Learn more about ${title}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#005AA9]
                  hover:gap-2.5 transition-all duration-300"
                >
                  Learn More
                  <HiArrowLongRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;

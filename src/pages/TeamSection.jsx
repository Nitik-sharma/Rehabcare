import React from "react";
import doctor1 from "../images/doctor1.avif"
import doctor2 from "../images/doctor2.avif"
import pankaj from "../../src/images/dr_Pankaj_physiotherapyist_best_in_gurgaon.png"
import nisa from "../../src/images/dr_nisha_best_physiotherapy_in_gurgaon.png"
const doctors = [
  {
    image: pankaj,
    name: "Dr.Pankaj Vats",
    degree: "MPT Sports",
    experience: "5+ Years",
    specialization: "Sports Injury & Rehabilitation",
  },
  {
    image: nisa,
    name: "Dr.Nisha Vats",
    degree: "MPT Ortho",
    experience: "5+ Years",
    specialization: "Orthopadic Rehabilitation",
  },
  
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            OUR EXPERTS
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-5">
            Meet Our Physiotherapy Specialists
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Experienced physiotherapy professionals dedicated to helping you
            recover faster, move better, and live pain-free.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_8px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Cropped Doctor Image */}
              <div className="relative h-[500px] overflow-hidden  bg-slate-100">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} - Physiotherapist`}
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

                {/* Specialization Badge */}
                <div className="absolute bottom-4 left-5">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-800 shadow-sm">
                    {doctor.degree}
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Information */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {doctor.name}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Licensed Physiotherapy Specialist
                    </p>
                  </div>

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                </div>

                <div className="h-px bg-slate-100 my-5"></div>

                {/* Specialization */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9 12l2 2 4-4m5-5v6a8 8 0 11-16 0V5l8-3 8 3z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Specialization
                    </p>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      {doctor.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

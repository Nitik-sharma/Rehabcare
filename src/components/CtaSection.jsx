import React from "react";
import { HiOutlinePhone, HiOutlineCalendarDays } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 p-10 md:p-16">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                Start Your Recovery Today
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready To Live
                <span className="block">Pain-Free Again?</span>
              </h2>

              <p className="text-white/90 mt-6 text-lg max-w-xl">
                Our experienced physiotherapists provide personalized treatment
                plans to help you recover faster, reduce pain, and restore
                mobility. Schedule your consultation today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 lg:justify-end">
              <NavLink to={"/book-appointment"}>
                <button className="group flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition duration-300">
                  <HiOutlineCalendarDays size={24} />
                  Book Appointment
                </button>
              </NavLink>
              <a
                href="tel:+91 9034107746"
                className="group flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition duration-300"
              >
                <HiOutlinePhone size={24} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

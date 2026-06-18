import React from "react";
import { FaCheckCircle, FaShieldAlt, FaAward, FaClock } from "react-icons/fa";
import choose from "../images/choose.jpeg"

const benefits = [
  {
    icon: <FaCheckCircle />,
    title: "Personalized Treatment Plans",
    description:
      "Customized rehabilitation programs designed for your recovery goals.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Evidence-Based Care",
    description:
      "Modern physiotherapy techniques backed by clinical expertise.",
  },
  {
    icon: <FaAward />,
    title: "Experienced Specialists",
    description:
      "Certified physiotherapists with years of hands-on experience.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Appointment Scheduling",
    description: "Convenient appointment slots to fit your busy lifestyle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <img
              src={choose}
              alt="Physiotherapist"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Right */}
          <div>
            <span className="text-green-600 font-semibold">WHY CHOOSE US</span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              Trusted Physiotherapy Care For Every Patient
            </h2>

            <p className="text-gray-600 mb-8">
              We combine advanced physiotherapy techniques with compassionate
              patient care to help you recover faster and live pain-free.
            </p>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="text-green-600 text-3xl">{item.icon}</div>

                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>

                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import React, { useState } from "react";
import { toast } from "react-toastify";
import appointmentImg from "../images/HappyBackpain.png";

function Bookappointment() {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/prehabcare@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(e.target),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("🎉 Your Appointment Has Been Booked Successfully!", {
          position: "top-right",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          query: "",
        });
      } else {
        toast.error("❌ Failed to submit appointment.");
      }
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative">
            <img
              src={appointmentImg}
              alt="Physiotherapy Appointment"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#005CB9]/90 to-[#7CC242]/70"></div>

            <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
              <span className="uppercase tracking-widest text-sm font-semibold">
                RehabCare Clinic
              </span>

              <h1 className="text-5xl font-bold mt-4 leading-tight">
                Book Your Appointment
              </h1>

              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Get expert physiotherapy care from our experienced team. Whether
                you're recovering from an injury, surgery, or managing chronic
                pain, we're here to help.
              </p>

              <div className="mt-10 space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  ✓ Personalized Treatment Plans
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  ✓ Experienced Physiotherapists
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  ✓ Home Physiotherapy Available
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-[#005CB9]">
                Schedule a Visit
              </h2>

              <p className="text-gray-600 mt-3">
                Fill in your details and choose your preferred date and time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-gray-700">
                    Appointment Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    min={today}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">
                    Appointment Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
                  />
                </div>
              </div>

              <textarea
                rows="5"
                name="query"
                placeholder="Describe your pain, injury, or concern..."
                value={formData.query}
                onChange={handleChange}
                className="w-full p-4 border rounded-xl outline-none focus:border-[#005CB9]"
              />

              <button
                type="submit"
                className="w-full bg-[#005CB9] hover:bg-[#00489A] text-white py-4 rounded-xl font-semibold text-lg transition"
              >
                Book Appointment
              </button>
            </form>

            <div className="mt-8 p-5 rounded-2xl bg-[#F8FAFC] border">
              <h3 className="font-semibold text-[#005CB9] mb-3">
                Clinic Information
              </h3>

              <p>📞 +91 9034107746</p>

              <p>✉️ prehabcare@gmail.com</p>

              <p>📍 18, Yadav Market, Dhanwapur Road, Laxman Vihar, Gurugram</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bookappointment;
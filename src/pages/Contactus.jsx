
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../images/hero5.jpeg";

function Contactus() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/prehabcare@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("✅ Your query has been submitted successfully!");

        e.target.reset();
      } else {
        toast.error("❌ Failed to submit query.");
      }
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#7CC242] font-semibold uppercase tracking-wider">
              Contact RehabCare
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#005CB9] mt-4">
              Let's Start Your Recovery Journey
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Whether you're dealing with pain, recovering from surgery,
              managing a sports injury, or seeking expert physiotherapy care,
              our team is here to help.
            </p>

            <div className="mt-10 space-y-5">
              <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#005CB9]">
                <h3 className="font-semibold text-[#005CB9]">Call Us</h3>
                <a href="tel:9034107746" className="text-gray-700">
                  +91 9034107746
                </a>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#7CC242]">
                <h3 className="font-semibold text-[#005CB9]">Email</h3>
                <a href="mailto:prehabcare@gmail.com" className="text-gray-700">
                  prehabcare@gmail.com
                </a>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-[#005CB9]">
                <h3 className="font-semibold text-[#005CB9]">Visit Clinic</h3>
                <p className="text-gray-700">
                  18, Yadav Market, Dhanwapur Road, Laxman Vihar, Gurugram,
                  Haryana
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={contactImage}
              alt="RehabCare Physiotherapy Clinic"
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#005CB9]">
              Send Us a Message
            </h2>

            <p className="text-gray-600 mt-4">
              Have questions about treatment or want to book an appointment?
              Fill out the form below and our team will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />

            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="p-4 rounded-xl border border-gray-300 focus:border-[#005CB9] outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="p-4 rounded-xl border border-gray-300 focus:border-[#005CB9] outline-none"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
              className="p-4 rounded-xl border border-gray-300 focus:border-[#005CB9] outline-none"
            />

            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="p-4 rounded-xl border border-gray-300 focus:border-[#005CB9] outline-none"
            />

            <textarea
              rows="6"
              name="message"
              required
              placeholder="Write your message..."
              className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:border-[#005CB9] outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#005CB9] hover:bg-[#00489A] text-white py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#005CB9] mb-10">
            Find Our Clinic
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              title="RehabCare Location"
              src="https://www.google.com/maps?q=18,Yadav Market,Dhanwapur Road,Laxman Vhiar,Gurugram&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
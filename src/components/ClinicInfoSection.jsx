
import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";

function ClinicInfoSection() {
  // Google Maps location URL for QR Code
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=18%2C%20Yadav%20Market%2C%20Dhanwapur%20Road%2C%20Laxman%20Vihar%2C%20Gurugram%2C%20Haryana";

  return (
    <section className="py-20 bg-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Map */}
        <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">
          <iframe
            title="RehabCare Location"
            src="https://www.google.com/maps?q=18,Yadav%20Market,Dhanwapur%20Road,Laxman%20Vihar,Gurugram,Haryana&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Right Side */}
        <div>
          <span className="text-[#7CC242] font-semibold uppercase tracking-wider">
            Visit Our Clinic
          </span>

          <h2 className="text-4xl font-bold text-[#005CB9] mt-3 mb-6">
            Book Your Consultation Today
          </h2>

          {/* Address Card */}
          <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
            <div className="flex items-start gap-4">
              {/* Location Icon */}
              <FaMapMarkerAlt className="text-[#005CB9] text-2xl mt-1 shrink-0" />

              <div className="flex-1">
                <h3 className="font-semibold text-[#005CB9] text-lg">
                  RehabCare Clinic
                </h3>

                <p className="text-gray-600 mt-2">
                  18, Yadav Market, Dhanwapur Road, Laxman Vihar, Gurugram,
                  Haryana
                </p>

                {/* QR Code Section */}
                {/* QR Code Section */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-5">
                  <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm shrink-0">
                    <QRCodeSVG
                      value={mapUrl}
                      size={110}
                      level="H"
                      includeMargin={true}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#005CB9]">
                      Get Directions
                    </h4>

                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      Scan to get directions to
                      <br />
                      RehabCare Clinic in
                      <br />
                      Google Maps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Card */}
          <div className="bg-gradient-to-br from-[#005CB9] to-[#0A73D9] text-white rounded-3xl p-8 shadow-xl">
            <p className="text-white/80 uppercase tracking-wider text-sm">
              Consultation Fee
            </p>

            <h3 className="text-6xl font-bold mt-2">
              ₹500
              <span className="text-3xl align-super ml-1">*</span>
            </h3>

            <p className="mt-4 text-white/90">
              Expert physiotherapy consultation including assessment, diagnosis,
              and personalized treatment planning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* Book Appointment */}
              <Link
                to="/book-appointment"
                className="flex-1 bg-[#7CC242] hover:bg-[#6EB437] text-[#1F2937] text-center py-4 rounded-xl font-semibold transition"
              >
                Book Appointment
              </Link>

              {/* Call Now */}
              <a
                href="tel:9034107746"
                className="flex-1 border border-white/30 hover:bg-white/10 text-center py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicInfoSection;


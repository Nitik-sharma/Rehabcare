const doctors = [
  {
    image: "/images/doctor1.jpg",
    name: "Dr. Rajesh Sharma",
    degree: "MPT Orthopedics",
    experience: "12+ Years",
    specialization: "Sports Injury & Rehabilitation",
  },
  {
    image: "/images/doctor2.jpg",
    name: "Dr. Priya Gupta",
    degree: "BPT, MPT",
    experience: "10+ Years",
    specialization: "Neurological Physiotherapy",
  },
  {
    image: "/images/doctor3.jpg",
    name: "Dr. Amit Verma",
    degree: "MPT Sports",
    experience: "8+ Years",
    specialization: "Sports & Fitness Recovery",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold">OUR EXPERTS</span>

          <h2 className="text-4xl font-bold mt-3">
            Meet Our Physiotherapy Specialists
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{doctor.name}</h3>

                <p className="text-green-600 font-medium mt-1">
                  {doctor.degree}
                </p>

                <div className="mt-4 space-y-2 text-gray-600">
                  <p>
                    <strong>Experience:</strong> {doctor.experience}
                  </p>

                  <p>
                    <strong>Specialization:</strong> {doctor.specialization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

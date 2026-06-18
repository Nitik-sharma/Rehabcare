import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "/images/patient1.jpg",
    name: "Rahul Mehta",
    review:
      "The treatment was excellent. My back pain improved significantly within a few sessions.",
  },
  {
    image: "/images/patient2.jpg",
    name: "Anjali Sharma",
    review:
      "Highly professional physiotherapists and a friendly environment. Highly recommended.",
  },
  {
    image: "/images/patient3.jpg",
    name: "Vikram Singh",
    review:
      "Outstanding rehabilitation program that helped me recover from a sports injury.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold">TESTIMONIALS</span>

          <h2 className="text-4xl font-bold mt-3">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 italic">"{item.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

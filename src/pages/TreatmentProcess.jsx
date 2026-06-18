import {
  FaClipboardList,
  FaSearch,
  FaHeartbeat,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Assessment",
    desc: "Detailed evaluation of your condition and medical history.",
  },
  {
    icon: <FaSearch />,
    title: "Diagnosis",
    desc: "Identifying the root cause of pain and mobility issues.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Treatment",
    desc: "Personalized physiotherapy sessions and rehabilitation exercises.",
  },
  {
    icon: <FaTrophy />,
    title: "Recovery",
    desc: "Achieve improved strength, flexibility, and pain-free movement.",
  },
];

export default function TreatmentProcess() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold">
            TREATMENT PROCESS
          </span>

          <h2 className="text-4xl font-bold mt-3">Your Recovery Journey</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center bg-white p-8 rounded-3xl shadow-md"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl mb-5">
                {step.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">{step.title}</h3>

              <p className="text-gray-600 text-sm">{step.desc}</p>

              <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";

const FAQS = [
  {
    q: "What conditions does RehabCare Physiotherapy Clinic treat?",
    a: "We treat a wide range of conditions including back and neck pain, knee and shoulder injuries, arthritis, frozen shoulder, sports injuries, post-surgery recovery, and neurological conditions such as stroke or nerve-related weakness. Every treatment plan is built around your specific diagnosis and recovery goals.",
  },
  {
    q: "Do I need a doctor's referral to see a physiotherapist?",
    a: "No referral is required. You can book a physiotherapy assessment with us directly, and if your condition needs further medical investigation, we'll guide you to the right specialist.",
  },
  {
    q: "How many physiotherapy sessions will I need?",
    a: "This depends on the condition, its severity, and how your body responds to treatment. Some patients notice improvement within a few sessions, while post-surgical or chronic conditions typically need a longer, structured program. Your physiotherapist will outline an estimated timeline after your first assessment.",
  },
  {
    q: "Is physiotherapy covered by insurance in India?",
    a: "Coverage varies by insurer and policy. Some health insurance plans reimburse physiotherapy when it's prescribed as part of post-surgical or post-hospitalization care. We recommend checking with your provider, and we're happy to provide the documentation you need to file a claim.",
  },
  {
    q: "What should I expect during my first physiotherapy session?",
    a: "Your first visit starts with a detailed assessment of your medical history, posture, movement patterns, and pain points. Based on this, your physiotherapist explains the likely cause of your symptoms and designs a personalized treatment plan before any hands-on therapy begins.",
  },
  {
    q: "Do you offer home physiotherapy services in Gurgaon?",
    a: "Yes — our home physiotherapy service brings the same personalized care to your doorstep across Gurgaon, which is especially useful for post-surgery patients, elderly individuals, or anyone with limited mobility.",
  },
  {
    q: "How is physiotherapy different from a massage?",
    a: "A massage primarily relaxes muscles and improves circulation, while physiotherapy is a clinical treatment aimed at diagnosing and correcting the underlying cause of pain or movement difficulty. It combines manual therapy, targeted exercises, and education to restore long-term function rather than just temporary relief.",
  },
  {
    q: "What are your clinic hours and how do I book an appointment?",
    a: 'We\'re open Monday to Friday from 8 AM to 6 PM, and Saturday from 9 AM to 2 PM. You can book through the "Book Appointment" button on this site, or call us directly to check for a same-day slot.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section
      id="faq"
      style={{
        scrollMarginTop: "calc(var(--header-h, 80px) + var(--nav-h, 76px))",
      }}
      className="bg-[#F8FAFC] py-16 px-6"
      aria-label="Frequently asked questions"
    >
      {/* Helps search engines render FAQ rich results for this section */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1E293B]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-500">
            Answers to what patients in Gurgaon most often ask before their
            first visit.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={q}
                className="bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4
                  font-medium text-[#1E293B] focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-[#005AA9]"
                >
                  {q}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-[#005AA9]"
                  >
                    <HiChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${idx}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

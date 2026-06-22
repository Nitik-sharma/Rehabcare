import React from "react";

import ServiceDetailPage from "../Servicedetailpage";

const data = {
  seoTitle:
    "Home Physiotherapy Services in Gurgaon | Physiotherapy at Home | RehabCare Clinic",
  metaDescription:
    "Professional physiotherapy delivered at your home in Gurgaon. RehabCare Clinic offers personalized care for senior citizens, post-surgery patients, and mobility-limited individuals.",
  h1: "Home Physiotherapy Services in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Expert Physiotherapy Care, Delivered to Your Doorstep",
    copy: "Not everyone can easily travel to a clinic for treatment. Our home physiotherapy services bring professional, personalized care directly to you.\n\nAt RehabCare Clinic, we provide the same quality of treatment in the comfort of your home, with care plans built around your routine and needs.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Home-based physiotherapy is ideal for patients who face mobility challenges, are recovering from surgery, or simply prefer the comfort and convenience of treatment at home.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Personalized Care",
      "Comfortable Environment",
      "Flexible Scheduling",
      "Convenient Treatment",
    ],
    closing:
      "Our goal is to make quality physiotherapy accessible, wherever you are most comfortable.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist providing treatment in a patient's home",
  conditionsHeading: "Who Home Physiotherapy Is Ideal For",
  conditions: [
    {
      title: "Senior Citizens",
      description:
        "Gentle, accessible care for elderly patients who find clinic visits difficult.",
      examples: [],
    },
    {
      title: "Post-Surgery Patients",
      description:
        "Continued rehabilitation support during early recovery at home.",
      examples: [],
    },
    {
      title: "Neurological Patients",
      description:
        "Tailored therapy for patients managing neurological conditions at home.",
      examples: [],
    },
    {
      title: "Mobility-Limited Individuals",
      description:
        "Accessible treatment for those who face challenges traveling to a clinic.",
      examples: [],
    },
  ],

  signs: [
    "Difficulty traveling to a clinic for treatment",
    "Recovering from surgery and need ongoing care",
    "Limited mobility that makes travel uncomfortable",
    "Preference for treatment in a familiar environment",
    "Managing a condition that benefits from home-based exercises",
    "Family caregivers needing guidance on safe home exercises",
  ],
  signsHeading: "Signs Home Physiotherapy Could Help",

  benefits: [
    {
      title: "Personalized Care",
      description:
        "Receive treatment tailored to your home environment and daily routine.",
    },
    {
      title: "Comfortable Environment",
      description: "Recover in the familiar comfort of your own home.",
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions at times that work around your schedule.",
    },
    {
      title: "Convenient Treatment",
      description: "Avoid the stress and difficulty of traveling for care.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Physiotherapist guiding a home exercise session",
  approach: [
    {
      title: "Initial Home Assessment",
      items: ["Mobility Evaluation", "Home Environment Review", "Care Goals"],
    },
    {
      title: "Personalized Treatment Plan",
      items: ["Tailored Exercises", "Hands-On Therapy"],
    },
    {
      title: "Family & Caregiver Guidance",
      items: ["Home Exercise Support", "Safety Recommendations"],
    },
    {
      title: "Ongoing Progress Review",
      items: ["Regular Reassessment", "Plan Adjustments"],
    },
  ],

  whyChooseUs: [
    {
      title: "Experienced Physiotherapists",
      description:
        "Our team brings specialized experience in physiotherapy assessment and treatment.",
    },
    {
      title: "Individualized Treatment Plans",
      description:
        "Every patient receives a treatment plan tailored to their specific condition and goals.",
    },
    {
      title: "Evidence-Based Care",
      description: "We use modern physiotherapy techniques backed by research.",
    },
    {
      title: "Holistic Recovery",
      description:
        "Focus on long-term outcomes rather than temporary symptom relief.",
    },
    {
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is designed around your goals and needs.",
    },
  ],

  processImage: "",
  processImageAlt: "Physiotherapist reviewing a home care plan with a patient",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of your condition.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the root cause of your pain.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description: "Develop a personalized rehabilitation program.",
    },
    {
      step: "04",
      title: "Recovery",
      description: "Restore movement, strength, and confidence.",
    },
  ],

  faqs: [
    {
      question: "What areas in Gurgaon do you cover for home visits?",
      answer:
        "We cover a wide range of areas across Gurgaon — get in touch to confirm availability at your location.",
    },
    {
      question: "Is home physiotherapy as effective as clinic treatment?",
      answer:
        "Yes. Treatment is tailored to your home environment and goals, with the same professional standards.",
    },
    {
      question: "What equipment is brought for home sessions?",
      answer:
        "Our physiotherapists carry the necessary portable equipment for assessment and treatment.",
    },
    {
      question: "Can home physiotherapy help after a stroke?",
      answer:
        "Yes, home-based rehabilitation can be especially valuable for neurological recovery and daily function.",
    },
    {
      question: "How do I book a home physiotherapy session?",
      answer:
        "You can book directly through our appointment page or by calling the clinic.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient receiving physiotherapy care at home",
    headline: "Ready for Physiotherapy at Your Doorstep?",
    copy: "Don't let travel be a barrier to your recovery. Our expert physiotherapists are ready to bring quality care to you.",
    subheadline: "Book Your Home Physiotherapy Visit Today",
    phoneNumber: "+91-9034107746",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function HomePhysiotherapyServices() {
  return <ServiceDetailPage data={data} />;
}

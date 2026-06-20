import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";

const data = {
  seoTitle:
    "Dry Needling Therapy in Gurgaon | Trigger Point Treatment | RehabCare Clinic",
  metaDescription:
    "Effective dry needling therapy at RehabCare Clinic Gurgaon. Targeted treatment for chronic pain, sports injuries, muscle tightness, neck pain, and back pain.",
  h1: "Dry Needling Therapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Targeted Relief for Stubborn Muscle Pain",
    copy: "Dry needling is an advanced technique that targets muscle trigger points to reduce pain, ease tightness, and improve movement.\n\nAt RehabCare Clinic, our trained physiotherapists use dry needling as part of a comprehensive treatment plan to speed up recovery and relieve persistent muscle tension.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Tight, overactive muscle trigger points can contribute to ongoing pain that doesn't always respond to stretching or rest alone. Dry needling helps release these points directly.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Faster Recovery",
      "Reduced Pain",
      "Better Mobility",
      "Improved Muscle Function",
    ],
    closing:
      "Our goal is to relieve trigger point pain and support your broader recovery plan.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist performing dry needling treatment",
  conditionsHeading: "Conditions Dry Needling Can Help With",
  conditions: [
    {
      title: "Chronic Pain",
      description:
        "Ongoing muscle pain that persists despite other treatment approaches.",
      examples: [],
    },
    {
      title: "Sports Injuries",
      description:
        "Muscle tightness and trigger points related to sports activity and overuse.",
      examples: [],
    },
    {
      title: "Muscle Tightness",
      description:
        "Persistent tension in specific muscle groups affecting movement.",
      examples: [],
    },
    {
      title: "Neck Pain",
      description:
        "Trigger points contributing to neck stiffness and discomfort.",
      examples: [],
    },
    {
      title: "Back Pain",
      description:
        "Muscle tightness in the back contributing to pain and restricted movement.",
      examples: [],
    },
  ],

  signs: [
    "Persistent, localized muscle tightness",
    "Pain that doesn't ease with stretching alone",
    "Muscle knots that are tender to touch",
    "Restricted movement linked to muscle tension",
    "Recurring tightness in the same areas",
    "Pain that radiates from a specific trigger point",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Faster Recovery",
      description:
        "Speed up recovery by directly addressing tight, overactive trigger points.",
    },
    {
      title: "Reduced Pain",
      description:
        "Relieve pain associated with muscle tightness and trigger points.",
    },
    {
      title: "Better Mobility",
      description: "Restore movement that's been restricted by muscle tension.",
    },
    {
      title: "Improved Muscle Function",
      description: "Help muscles function more effectively during activity.",
    },
  ],

  approachImage: "",
  approachImageAlt:
    "Physiotherapist explaining dry needling technique to a patient",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: ["Pain Mapping", "Muscle Tightness", "Movement Limitations"],
    },
    {
      title: "Dry Needling Treatment",
      items: ["Trigger Point Release", "Targeted Needling"],
    },
    {
      title: "Complementary Therapy",
      items: ["Stretching", "Strengthening Exercises"],
    },
    {
      title: "Progress Monitoring",
      items: ["Symptom Tracking", "Treatment Adjustment"],
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
  processImageAlt: "Physiotherapist reviewing a patient's treatment progress",
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
      question: "Does dry needling hurt?",
      answer:
        "Most patients feel a brief muscle twitch or mild discomfort, which typically settles quickly.",
    },
    {
      question: "How many sessions are needed?",
      answer:
        "This varies by individual, often combined with other treatments for the best results.",
    },
    {
      question: "Is dry needling the same as acupuncture?",
      answer:
        "No. While both use thin needles, dry needling specifically targets muscle trigger points based on physiotherapy principles.",
    },
    {
      question: "Are there side effects?",
      answer:
        "Mild soreness or bruising can occur but usually resolves within a day or two.",
    },
    {
      question: "Who shouldn't get dry needling?",
      answer:
        "Your physiotherapist will screen for contraindications during your assessment to ensure it's appropriate for you.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient relieved of muscle tension after dry needling treatment",
    headline: "Ready to Release Persistent Muscle Pain?",
    copy: "Don't let stubborn trigger points hold you back. Our expert physiotherapists are here to help you find lasting relief.",
    subheadline: "Book Your Dry Needling Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function DryNeedlingTherapy() {
  return <ServiceDetailTemplate data={data} />;
}

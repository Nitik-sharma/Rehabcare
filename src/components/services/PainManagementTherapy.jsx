import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";

const data = {
  seoTitle:
    "Pain Management Therapy in Gurgaon | Chronic Pain Physiotherapy | RehabCare Clinic",
  metaDescription:
    "Effective pain management therapy at RehabCare Clinic Gurgaon. Physiotherapy for chronic back pain, neck pain, joint pain, arthritis, and muscle pain.",
  h1: "Pain Management Therapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Take Back Control from Chronic and Recurring Pain",
    copy: "Living with ongoing pain can affect every part of daily life. Pain management physiotherapy focuses on understanding the root cause and building a sustainable path forward.\n\nAt RehabCare Clinic, we create personalized pain management programs that go beyond temporary relief, aiming for long-term improvement in function and quality of life.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Chronic and recurring pain often involves a combination of physical, postural, and lifestyle factors. A comprehensive physiotherapy approach addresses these together rather than treating symptoms in isolation.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Long-Term Relief",
      "Improved Functionality",
      "Reduced Dependence on Medication",
      "Better Quality of Life",
    ],
    closing:
      "Our goal is to help you manage pain effectively and get back to doing what matters most to you.",
  },

  conditionsImage: "",
  conditionsImageAlt:
    "Physiotherapist discussing a pain management plan with a patient",
  conditionsHeading: "Pain Conditions We Help Manage",
  conditions: [
    {
      title: "Chronic Back Pain",
      description:
        "Ongoing back pain that persists beyond the typical healing timeframe.",
      examples: [],
    },
    {
      title: "Neck Pain",
      description:
        "Persistent neck discomfort often linked to posture or muscle tension.",
      examples: [],
    },
    {
      title: "Joint Pain",
      description: "Recurring pain affecting one or more joints.",
      examples: [],
    },
    {
      title: "Arthritis",
      description:
        "Chronic joint inflammation contributing to ongoing pain and stiffness.",
      examples: [],
    },
    {
      title: "Muscle Pain",
      description: "Persistent muscular discomfort affecting daily movement.",
      examples: [],
    },
  ],

  signs: [
    "Pain that has lasted longer than expected",
    "Pain that interferes with sleep or daily activities",
    "Reliance on medication for pain relief",
    "Reduced ability to do things you used to enjoy",
    "Pain that flares up unpredictably",
    "Frustration with pain that hasn't responded to other treatment",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Long-Term Relief",
      description:
        "Address the underlying causes of pain for more lasting results.",
    },
    {
      title: "Improved Functionality",
      description: "Regain the ability to do more of what matters to you.",
    },
    {
      title: "Reduced Dependence on Medication",
      description:
        "Support pain management through movement and active strategies.",
    },
    {
      title: "Better Quality of Life",
      description: "Improve daily comfort, function, and overall well-being.",
    },
  ],

  approachImage: "",
  approachImageAlt:
    "Physiotherapist guiding a patient through pain management exercises",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Pain History",
        "Movement Patterns",
        "Lifestyle Factors",
        "Functional Goals",
      ],
    },
    {
      title: "Hands-On & Exercise Therapy",
      items: ["Manual Therapy", "Therapeutic Exercise"],
    },
    {
      title: "Pain Education",
      items: ["Understanding Pain", "Self-Management Strategies"],
    },
    {
      title: "Long-Term Planning",
      items: ["Activity Pacing", "Maintenance Programs"],
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
  processImageAlt:
    "Physiotherapist reviewing a patient's long-term pain management plan",
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
      question: "Can physiotherapy really help chronic pain?",
      answer:
        "Yes. A well-structured physiotherapy program can meaningfully improve function and reduce pain over time.",
    },
    {
      question: "How is chronic pain different from acute pain treatment?",
      answer:
        "Chronic pain management often takes a broader approach, addressing movement, lifestyle, and pain education alongside hands-on treatment.",
    },
    {
      question: "Will I need to rely less on medication?",
      answer:
        "Many patients find they can reduce medication use as function improves, though this should be discussed with your doctor.",
    },
    {
      question: "How long does pain management therapy take?",
      answer:
        "This varies widely depending on the condition, often involving ongoing, periodic care.",
    },
    {
      question: "Is pain management therapy suitable for arthritis?",
      answer:
        "Yes, physiotherapy is commonly used to manage arthritis-related pain and stiffness.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient enjoying daily activities after pain management therapy",
    headline: "Ready to Manage Your Pain More Effectively?",
    copy: "You don't have to navigate chronic pain alone. Our expert physiotherapists are here to help you find a sustainable path forward.",
    subheadline: "Book Your Pain Management Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function PainManagementTherapy() {
  return <ServiceDetailTemplate data={data} />;
}

import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";

const data = {
  seoTitle:
    "Geriatric Physiotherapy in Gurgaon | Physiotherapy for Elderly Patients | RehabCare Clinic",
  metaDescription:
    "Specialized geriatric physiotherapy at RehabCare Clinic Gurgaon. Supporting elderly patients with fall prevention, balance, strength, and mobility.",
  h1: "Geriatric Physiotherapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Supporting Mobility and Independence at Every Age",
    copy: "Maintaining mobility, strength, and balance becomes increasingly important as we age. Geriatric physiotherapy is designed to support safe, confident movement in daily life.\n\nAt RehabCare Clinic, our physiotherapists provide gentle, specialized care to help elderly patients stay active and independent.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Age-related changes in strength, balance, and joint health can increase the risk of falls and reduce independence. A targeted physiotherapy program can help address these changes proactively.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Fall Prevention",
      "Improved Balance",
      "Enhanced Strength",
      "Better Mobility",
    ],
    closing:
      "Our goal is to help elderly patients stay active, confident, and independent for as long as possible.",
  },

  conditionsImage: "",
  conditionsImageAlt:
    "Physiotherapist supporting an elderly patient with balance exercises",
  conditionsHeading: "Who Geriatric Physiotherapy Supports",
  conditions: [
    {
      title: "Fall Risk",
      description: "Assessment and exercises to reduce the risk of falls.",
      examples: [],
    },
    {
      title: "Balance Difficulties",
      description:
        "Targeted training to improve stability and confidence in movement.",
      examples: [],
    },
    {
      title: "General Weakness",
      description: "Strengthening programs suited to age and ability.",
      examples: [],
    },
    {
      title: "Reduced Mobility",
      description: "Support for maintaining independence in daily movement.",
      examples: [],
    },
  ],

  signs: [
    "Recent falls or near-falls",
    "Unsteadiness while walking or standing",
    "Reduced confidence moving around the home",
    "Noticeable decline in strength or stamina",
    "Difficulty with stairs or getting up from a chair",
    "General reduction in activity levels",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Fall Prevention",
      description:
        "Reduce fall risk through targeted balance and strength training.",
    },
    {
      title: "Improved Balance",
      description:
        "Build greater stability and confidence in everyday movement.",
    },
    {
      title: "Enhanced Strength",
      description:
        "Maintain or rebuild strength suited to your ability and pace.",
    },
    {
      title: "Better Mobility",
      description: "Support safe, independent movement in daily life.",
    },
  ],

  approachImage: "",
  approachImageAlt:
    "Physiotherapist guiding a strength exercise for an elderly patient",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Balance & Stability",
        "Strength",
        "Mobility",
        "Fall Risk Factors",
      ],
    },
    {
      title: "Balance & Strength Training",
      items: ["Guided Exercise", "Stability Work"],
    },
    {
      title: "Functional Movement Training",
      items: ["Daily Activity Practice", "Safe Movement Strategies"],
    },
    {
      title: "Home Safety Guidance",
      items: ["Environment Tips", "Family Education"],
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
    "Physiotherapist reviewing a home safety plan with an elderly patient",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of strength, balance, and mobility.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the factors affecting safe, independent movement.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description: "Develop a personalized rehabilitation program.",
    },
    {
      step: "04",
      title: "Progress",
      description: "Build strength, balance, and confidence over time.",
    },
  ],

  faqs: [
    {
      question: "Is geriatric physiotherapy safe for very elderly patients?",
      answer:
        "Yes, programs are tailored to each patient's ability and health status to ensure safety.",
    },
    {
      question: "Can physiotherapy reduce fall risk?",
      answer:
        "Yes, balance and strength training are proven approaches to reducing fall risk in older adults.",
    },
    {
      question: "Do you offer geriatric physiotherapy at home?",
      answer:
        "Yes, home-based sessions are available and often well-suited for elderly patients.",
    },
    {
      question: "How often should sessions take place?",
      answer:
        "This depends on individual needs and will be discussed during your assessment.",
    },
    {
      question: "Can family members be involved in sessions?",
      answer:
        "Yes, family involvement is welcomed and can support progress between sessions.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt:
      "Elderly patient moving confidently after geriatric physiotherapy",
    headline: "Ready to Support Safe, Confident Movement?",
    copy: "Independence and confidence in movement matter at every age. Our expert physiotherapists are here to help.",
    subheadline: "Book Your Geriatric Physiotherapy Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function GeriatricPhysiotherapy() {
  return <ServiceDetailTemplate data={data} />;
}

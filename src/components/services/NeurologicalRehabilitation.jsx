import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate.jsx";
import NuroHero from "../../images/NuroHero.png"
import NuroFirst from "../../images/NuroSecond.png"
import NuroSecond from "../../images/NuroThird.png"
import NuroThird from "../../images/NuroFourth.png"
import NuroCta from "../../images/hero3.jpeg"

const data = {
  seoTitle:
    "Neurological Rehabilitation in Gurgaon | Physiotherapy for Stroke & Neurological Conditions | RehabCare Clinic",
  metaDescription:
    "Expert neurological rehabilitation at RehabCare Clinic Gurgaon. Physiotherapy for stroke, Parkinson's disease, multiple sclerosis, spinal cord injury, and neuropathy.",
  h1: "Neurological Rehabilitation in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Rebuilding Movement, Balance, and Independence",
    copy: "Neurological conditions can significantly affect movement, coordination, and daily independence. Recovery often requires patience, consistency, and specialized care.\n\nAt RehabCare Clinic, our physiotherapists provide focused neurological rehabilitation programs designed around each patient's specific condition and goals.",
    image: NuroHero,
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Neurological rehabilitation supports the nervous system's ability to adapt and recover function over time, helping patients regain as much independence and mobility as possible.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Improved Balance",
      "Enhanced Coordination",
      "Better Mobility",
      "Increased Independence",
    ],
    closing:
      "Our goal is to support meaningful, sustainable progress at every stage of neurological recovery.",
  },

  conditionsImage: NuroFirst,
  conditionsImageAlt:
    "Physiotherapist guiding a balance exercise during neurological rehabilitation",
  conditionsHeading: "Neurological Conditions We Support",
  conditions: [
    {
      title: "Stroke",
      description:
        "Rehabilitation to help regain movement, strength, and function after a stroke.",
      examples: [],
    },
    {
      title: "Parkinson's Disease",
      description:
        "Therapy focused on maintaining mobility, balance, and quality of life.",
      examples: [],
    },
    {
      title: "Multiple Sclerosis",
      description:
        "Supportive rehabilitation to manage symptoms and maintain function.",
      examples: [],
    },
    {
      title: "Spinal Cord Injury",
      description:
        "Rehabilitation to maximize movement and independence after spinal cord injury.",
      examples: [],
    },
    {
      title: "Neuropathy",
      description:
        "Therapy to manage symptoms and support safe, functional movement.",
      examples: [],
    },
  ],

  signs: [
    "Difficulty with balance or coordination",
    "Weakness on one side of the body",
    "Reduced independence in daily activities",
    "Difficulty walking or changing positions",
    "Stiffness or abnormal muscle tone",
    "Frequent falls or near-falls",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Improved Balance",
      description: "Build stability and confidence in everyday movement.",
    },
    {
      title: "Enhanced Coordination",
      description: "Support smoother, more controlled movement patterns.",
    },
    {
      title: "Better Mobility",
      description:
        "Work toward greater ease and independence in moving around.",
    },
    {
      title: "Increased Independence",
      description:
        "Support your ability to manage daily activities with less assistance.",
    },
  ],

  approachImage: NuroSecond,
  approachImageAlt:
    "Physiotherapist supporting a patient with walking practice",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Movement Patterns",
        "Balance & Coordination",
        "Muscle Strength",
        "Functional Goals",
      ],
    },
    {
      title: "Neuro-Focused Exercise",
      items: ["Balance Training", "Coordination Drills"],
    },
    {
      title: "Functional Retraining",
      items: ["Walking Practice", "Daily Activity Training"],
    },
    {
      title: "Caregiver & Family Guidance",
      items: ["Home Exercise Support", "Safety Strategies"],
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

  processImage: NuroThird,
  processImageAlt: "Physiotherapist guiding a coordination exercise",
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
      question: "Can physiotherapy help after a stroke?",
      answer:
        "Yes. Physiotherapy plays a key role in regaining movement, strength, and function after a stroke.",
    },
    {
      question: "How soon after diagnosis should rehabilitation start?",
      answer:
        "Earlier, guided rehabilitation often supports better long-term outcomes, but it's never too late to begin.",
    },
    {
      question: "Is neurological rehabilitation ongoing or short-term?",
      answer:
        "This depends on the condition — some programs are short-term, while others involve longer, ongoing management.",
    },
    {
      question: "Can therapy help with balance and fall risk?",
      answer:
        "Yes, balance and coordination training are central parts of neurological rehabilitation.",
    },
    {
      question: "Do you offer neurological rehabilitation at home?",
      answer:
        "Yes, home-based sessions are available and can be especially helpful for this type of care.",
    },
  ],

  finalCta: {
    image: NuroCta,
    imageAlt:
      "Patient walking with improved balance after neurological rehabilitation",
    headline: "Ready to Take the Next Step in Your Recovery?",
    copy: "Recovery from a neurological condition takes time and the right support. Our expert physiotherapists are here to walk that path with you.",
    subheadline: "Book Your Neurological Rehabilitation Assessment Today",
    phoneNumber: "+91-9034107746",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function NeurologicalRehabilitation() {
  return <ServiceDetailTemplate data={data} />;
}

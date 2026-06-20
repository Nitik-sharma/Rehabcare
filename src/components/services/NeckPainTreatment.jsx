import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate.jsx";
import NackPainHero from "../../images/NackpainHero.png"
import NackProblem from "../../images/commanNackProblem.png"
import NackTreatment from "../../images/NackTreatment.png"
import Nackapproach from "../../images/NackApp.png"
import NackCta from "../../images/NackCta.avif"
const data = {
  seoTitle:
    "Neck Pain Treatment in Gurgaon | Physiotherapy for Cervical Pain & Stiffness | RehabCare Clinic",
  metaDescription:
    "Expert neck pain treatment in Gurgaon at RehabCare Clinic. Physiotherapy for cervical pain, stiff neck, cervical spondylosis, whiplash injury, and tension headaches. Book your appointment today.",
  h1: "Neck Pain Treatment in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Relieve Neck Pain and Move with Comfort Again",
    copy: "Neck pain and stiffness can make even simple daily tasks uncomfortable, whether it's caused by poor posture, prolonged screen time, sudden injury, or underlying spinal conditions.\n\nAt RehabCare Clinic, our physiotherapists provide specialized treatment for neck pain, stiffness, and posture-related conditions, helping you move freely and comfortably again.",
    image: NackPainHero,
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Neck pain is increasingly common due to desk jobs, mobile phone use, and poor posture habits. Left untreated, it can lead to chronic stiffness, headaches, and reduced range of motion.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Pain Relief",
      "Improved Mobility",
      "Posture Correction",
      "Headache Reduction",
    ],
    closing:
      "Our goal is to help you regain comfortable, pain-free movement in your neck and shoulders.",
  },

  conditionsImage: NackProblem,
  conditionsImageAlt: "Physiotherapist examining a patient's neck mobility",
  conditionsHeading: "Common Neck Conditions We Treat",
  conditions: [
    {
      title: "Cervical Pain",
      description:
        "General pain and discomfort in the neck region, often caused by muscle strain or poor posture.",
      examples: [],
    },
    {
      title: "Stiff Neck",
      description:
        "Restricted neck movement and tightness, often following sleeping awkwardly or prolonged poor posture.",
      examples: [],
    },
    {
      title: "Cervical Spondylosis",
      description:
        "Age-related wear and tear of the cervical spine leading to stiffness and discomfort.",
      examples: [],
    },
    {
      title: "Whiplash Injury",
      description:
        "Neck strain caused by sudden, forceful back-and-forth movement, commonly from accidents.",
      examples: [],
    },
    {
      title: "Tension Headaches",
      description:
        "Headaches linked to muscle tightness in the neck and shoulders.",
      examples: [],
    },
  ],

  signs: [
    "Persistent neck pain or stiffness",
    "Reduced ability to turn or tilt the head",
    "Pain radiating into the shoulders",
    "Frequent tension headaches",
    "Discomfort after long periods at a desk",
    "Muscle tightness in the neck and upper back",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Reduced Pain",
      description:
        "Ease neck pain and discomfort through targeted physiotherapy techniques.",
    },
    {
      title: "Improved Mobility",
      description: "Restore full range of motion in the neck and shoulders.",
    },
    {
      title: "Better Posture",
      description: "Correct postural habits that contribute to neck strain.",
    },
    {
      title: "Reduced Headaches",
      description:
        "Decrease the frequency and intensity of tension headaches linked to neck tightness.",
    },
  ],

  approachImage: Nackapproach,
  approachImageAlt:
    "Physiotherapist treating a patient's neck and shoulder area",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Posture Analysis",
        "Range of Motion",
        "Muscle Strength",
        "Pain Patterns",
      ],
    },
    {
      title: "Manual Therapy",
      items: ["Soft Tissue Release", "Joint Mobilization"],
    },
    {
      title: "Posture Correction",
      items: ["Ergonomic Guidance", "Workstation Setup", "Movement Habits"],
    },
    {
      title: "Therapeutic Exercise",
      items: ["Stretching", "Strengthening", "Mobility Drills"],
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

  processImage: NackTreatment,
  processImageAlt: "Physiotherapist guiding neck mobility exercises",
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
      question: "How long does neck pain treatment take?",
      answer:
        "Recovery time varies depending on the cause and severity, but many patients notice improvement within a few sessions.",
    },
    {
      question: "Can physiotherapy help with cervical spondylosis?",
      answer:
        "Yes. Physiotherapy can reduce stiffness, improve mobility, and manage symptoms effectively.",
    },
    {
      question: "Is neck pain treatment safe after a whiplash injury?",
      answer:
        "Yes, when guided by a qualified physiotherapist following a proper assessment.",
    },
    {
      question: "Can poor posture be corrected?",
      answer:
        "Yes. With consistent guidance and exercises, postural habits can be improved significantly.",
    },
    {
      question: "Do I need a doctor's referral?",
      answer: "No referral is required to book a physiotherapy assessment.",
    },
  ],

  finalCta: {
    image: NackCta,
    imageAlt: "Patient with full, pain-free neck mobility",
    headline: "Ready to Say Goodbye to Neck Pain?",
    copy: "Don't let neck pain and stiffness hold you back. Our expert physiotherapists are here to help you move comfortably again.",
    subheadline: "Book Your Neck Pain Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function NeckPainTreatment() {
  return <ServiceDetailTemplate data={data} />;
}

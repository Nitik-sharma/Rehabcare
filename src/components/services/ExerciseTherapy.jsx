import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";

const data = {
  seoTitle:
    "Exercise Therapy in Gurgaon | Therapeutic Exercise Programs | RehabCare Clinic",
  metaDescription:
    "Customized exercise therapy at RehabCare Clinic Gurgaon. Therapeutic exercise programs for rehabilitation, strength, flexibility, and endurance.",
  h1: "Exercise Therapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Build Strength, Flexibility, and Resilience",
    copy: "Exercise therapy uses customized, therapeutic exercise programs to support rehabilitation, build strength, and improve overall physical performance.\n\nAt RehabCare Clinic, our physiotherapists design exercise programs tailored to your specific condition, goals, and fitness level.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Whether recovering from an injury or working to prevent one, a well-structured exercise program is one of the most effective tools in physiotherapy.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Improved Strength",
      "Better Flexibility",
      "Injury Prevention",
      "Enhanced Physical Performance",
    ],
    closing:
      "Our goal is to help you build a stronger, more resilient body through guided exercise.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist guiding a strength training exercise",
  conditionsHeading: "Who Exercise Therapy Is Suited For",
  conditions: [
    {
      title: "Post-Injury Recovery",
      description:
        "Structured exercise to rebuild strength and function after injury.",
      examples: [],
    },
    {
      title: "General Deconditioning",
      description:
        "Programs to rebuild strength and stamina after periods of inactivity.",
      examples: [],
    },
    {
      title: "Chronic Pain Management",
      description: "Exercise as part of a broader pain management plan.",
      examples: [],
    },
    {
      title: "Performance & Prevention",
      description:
        "Programs designed to improve performance and reduce injury risk.",
      examples: [],
    },
  ],

  signs: [
    "Recovering from injury and ready to rebuild strength",
    "Reduced fitness after a period of inactivity",
    "Recurring pain that may benefit from targeted exercise",
    "Looking to prevent future injuries",
    "Uncertainty about which exercises are safe for you",
    "Wanting a structured, guided fitness program",
  ],
  signsHeading: "Signs Exercise Therapy Could Help",

  benefits: [
    {
      title: "Improved Strength",
      description:
        "Build strength safely and progressively, suited to your starting point.",
    },
    {
      title: "Better Flexibility",
      description: "Improve range of motion and reduce stiffness.",
    },
    {
      title: "Injury Prevention",
      description: "Build resilience to help reduce the risk of future injury.",
    },
    {
      title: "Enhanced Physical Performance",
      description:
        "Support better performance in daily activities, sport, or fitness goals.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Physiotherapist guiding a flexibility exercise",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: ["Strength Testing", "Flexibility Assessment", "Functional Goals"],
    },
    {
      title: "Customized Exercise Program",
      items: ["Strength Training", "Flexibility Work"],
    },
    {
      title: "Progressive Programming",
      items: ["Gradual Progression", "Regular Reassessment"],
    },
    {
      title: "Education & Maintenance",
      items: ["Home Exercise Guidance", "Long-Term Habits"],
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
    "Physiotherapist tracking a patient's exercise program progress",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of your strength and fitness.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the right focus areas for your program.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description: "Develop a personalized exercise program.",
    },
    {
      step: "04",
      title: "Progress",
      description: "Build strength, flexibility, and endurance over time.",
    },
  ],

  faqs: [
    {
      question: "Is exercise therapy the same as going to the gym?",
      answer:
        "No. Exercise therapy is guided by a physiotherapist and tailored specifically to your condition and goals.",
    },
    {
      question: "Can exercise therapy help with injury prevention?",
      answer:
        "Yes, building strength and flexibility is a key part of reducing injury risk.",
    },
    {
      question: "Is exercise therapy suitable for beginners?",
      answer:
        "Yes, programs are designed around your current fitness level and adjusted as you progress.",
    },
    {
      question: "How often should I do exercise therapy sessions?",
      answer:
        "This depends on your goals and condition, and will be discussed during your assessment.",
    },
    {
      question: "Can exercise therapy be combined with other treatments?",
      answer:
        "Yes, it's often used alongside manual therapy and other physiotherapy techniques.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient confidently completing a strength training program",
    headline: "Ready to Build a Stronger, More Resilient Body?",
    copy: "Whether you're recovering, rebuilding, or preventing injury, our expert physiotherapists are here to guide your program.",
    subheadline: "Book Your Exercise Therapy Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function ExerciseTherapy() {
  return <ServiceDetailTemplate data={data} />;
}

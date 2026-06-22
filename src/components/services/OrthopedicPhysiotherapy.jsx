import React from "react";
import ServiceDetailPage from "../Servicedetailpage";


const data = {
  seoTitle:
    "Orthopedic Physiotherapy in Gurgaon | Treatment for Joints, Bones & Muscles | RehabCare Clinic",
  metaDescription:
    "Specialized orthopedic physiotherapy at RehabCare Clinic Gurgaon. Treatment for arthritis, frozen shoulder, tennis elbow, joint pain, fractures, and tendon injuries.",
  h1: "Orthopedic Physiotherapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Specialized Care for Your Bones, Joints, and Muscles",
    copy: "Musculoskeletal conditions can affect your ability to move, work, and enjoy daily life. Orthopedic physiotherapy focuses on restoring function in the bones, joints, ligaments, and muscles.\n\nAt RehabCare Clinic, our physiotherapists create individualized treatment plans to relieve pain and rebuild strength for long-term joint and muscle health.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Orthopedic conditions can develop from injury, overuse, ageing, or underlying joint disease. Without proper care, they can progressively limit mobility and independence.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Pain Management",
      "Improved Mobility",
      "Increased Strength",
      "Better Quality of Life",
    ],
    closing:
      "Our goal is to help you move with less pain and greater confidence in daily life.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist examining a patient's joint mobility",
  conditionsHeading: "Common Orthopedic Conditions We Treat",
  conditions: [
    {
      title: "Arthritis",
      description:
        "Joint inflammation causing pain, stiffness, and reduced mobility.",
      examples: [],
    },
    {
      title: "Frozen Shoulder",
      description:
        "Progressive stiffness and pain that restricts shoulder movement.",
      examples: [],
    },
    {
      title: "Tennis Elbow",
      description:
        "Pain on the outside of the elbow caused by repetitive strain on the forearm tendons.",
      examples: [],
    },
    {
      title: "Joint Pain",
      description:
        "General pain affecting one or more joints, often linked to overuse or degeneration.",
      examples: [],
    },
    {
      title: "Fractures",
      description:
        "Rehabilitation support for bone fractures during and after healing.",
      examples: [],
    },
    {
      title: "Tendon Injuries",
      description:
        "Pain and dysfunction caused by overuse or strain of tendons.",
      examples: [],
    },
  ],

  signs: [
    "Persistent joint pain or stiffness",
    "Swelling around a joint",
    "Reduced range of motion",
    "Pain that worsens with activity",
    "Weakness around a joint or limb",
    "Difficulty with daily tasks due to pain",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Pain Management",
      description:
        "Reduce pain through targeted, evidence-based physiotherapy techniques.",
    },
    {
      title: "Improved Mobility",
      description: "Restore movement in affected joints and muscles.",
    },
    {
      title: "Increased Strength",
      description: "Rebuild strength to support long-term joint health.",
    },
    {
      title: "Better Quality of Life",
      description: "Return to daily activities and hobbies with greater ease.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Physiotherapist guiding joint mobility exercises",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Joint Mobility",
        "Muscle Strength",
        "Pain Patterns",
        "Functional Limitations",
      ],
    },
    {
      title: "Manual Therapy",
      items: ["Joint Mobilization", "Soft Tissue Techniques"],
    },
    {
      title: "Strengthening Program",
      items: ["Progressive Exercise", "Functional Training"],
    },
    {
      title: "Education & Prevention",
      items: ["Activity Modification", "Joint Protection Strategies"],
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
    "Physiotherapist guiding strength training for joint recovery",
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
      question: "Can physiotherapy help arthritis pain?",
      answer:
        "Yes. Physiotherapy can reduce pain and improve joint function in many forms of arthritis.",
    },
    {
      question: "How long does treatment for frozen shoulder take?",
      answer:
        "Frozen shoulder often requires a longer treatment course, sometimes several months, due to its gradual nature.",
    },
    {
      question: "Is orthopedic physiotherapy suitable after a fracture?",
      answer:
        "Yes, once cleared by your doctor, physiotherapy supports safe and effective recovery.",
    },
    {
      question: "Can I avoid surgery with physiotherapy?",
      answer:
        "In many cases, physiotherapy can effectively manage orthopedic conditions and may reduce the need for surgery.",
    },
    {
      question: "Do you treat both acute and chronic conditions?",
      answer:
        "Yes, we treat both recent injuries and long-standing orthopedic conditions.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient moving comfortably after orthopedic physiotherapy",
    headline: "Ready to Move with Less Pain?",
    copy: "Don't let joint or muscle pain limit your life. Our expert physiotherapists are here to help you recover strength and mobility.",
    subheadline: "Book Your Orthopedic Assessment Today",
    phoneNumber: "+91-9034107746",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function OrthopedicPhysiotherapy() {
  return <ServiceDetailPage data={data} />;
}

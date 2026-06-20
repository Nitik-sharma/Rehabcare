import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";
import BackpainHero from "../../images/Backpainhero.png"
import BackpainCondition from "../../images/BackpainCondition.png"
import manualTherapyBackPain from "../../images/manualTherpyBackpain.png"
import BackPainExcercise from "../../images/ExcerciseBackPain.png"
import HappyBackPain from "../../images/HappyBackpain.png"

/**
 * Drop real photo imports in here once you have them, e.g.:
 *   import heroImg from "../images/back-pain/hero.jpg";
 * and reference them below (data.hero.image, data.conditionsImage, etc).
 * Left as empty strings, each spot shows a branded placeholder instead
 * of a broken image.
 */
const data = {
  seoTitle:
    "Back Pain Treatment in Gurgaon | Physiotherapy for Lower Back Pain | RehabCare Clinic",
  metaDescription:
    "Get expert back pain treatment in Gurgaon at RehabCare Clinic. Effective physiotherapy for lower back pain, sciatica, slipped disc, postural pain, and chronic back conditions. Book your appointment today.",
  h1: "Back Pain Treatment in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Find Relief from Back Pain and Move Freely Again",
    copy: "Back pain is one of the most common musculoskeletal conditions affecting people of all ages. Whether caused by poor posture, prolonged sitting, injury, muscle strain, or spinal conditions, back pain can significantly impact your daily life.\n\nAt RehabCare Clinic, our experienced physiotherapists provide personalized treatment plans that address the root cause of your pain and help you achieve long-term relief.",
    image: BackpainHero, // Suggested: physiotherapist assessing a patient with lower back pain
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Back pain can develop gradually over time or occur suddenly due to injury or strain. Without proper treatment, it can affect mobility, work productivity, sleep quality, and overall well-being.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Pain Relief",
      "Posture Correction",
      "Mobility Restoration",
      "Core Strengthening",
      "Functional Recovery",
      "Prevention of Recurrence",
    ],
    closing:
      "Our goal is to help you return to a pain-free and active lifestyle.",
  },

  conditionsImage: BackpainCondition, // Suggested: patient experiencing lower back discomfort while sitting
  conditionsImageAlt:
    "Patient experiencing lower back discomfort while sitting",
  conditionsHeading: "Common Back Conditions We Treat",
  conditions: [
    {
      title: "Lower Back Pain",
      description:
        "Pain and stiffness affecting the lumbar region due to muscle strain, poor posture, or spinal dysfunction.",
      examples: [],
    },
    {
      title: "Sciatica",
      description:
        "Pain radiating from the lower back down the leg caused by irritation of the sciatic nerve.",
      examples: [],
    },
    {
      title: "Slipped Disc (Disc Bulge)",
      description:
        "Disc-related problems causing back pain, numbness, and radiating symptoms.",
      examples: [],
    },
    {
      title: "Postural Back Pain",
      description:
        "Pain caused by prolonged sitting, desk work, mobile usage, and poor posture habits.",
      examples: [],
    },
    {
      title: "Muscle Spasms",
      description:
        "Sudden muscle tightening causing pain and movement restrictions.",
      examples: [],
    },
    {
      title: "Degenerative Spine Conditions",
      description:
        "Age-related spinal changes leading to stiffness and chronic discomfort.",
      examples: [],
    },
  ],

  signs: [
    "Persistent back pain",
    "Difficulty standing or sitting for long periods",
    "Pain while bending or lifting",
    "Stiffness in the morning",
    "Pain radiating into the legs",
    "Reduced flexibility",
    "Weak core muscles",
    "Frequent episodes of back pain",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Pain Reduction",
      description:
        "Reduce pain naturally using evidence-based treatment methods.",
    },
    {
      title: "Improved Posture",
      description: "Correct faulty posture contributing to pain.",
    },
    {
      title: "Better Mobility",
      description: "Restore flexibility and movement.",
    },
    {
      title: "Stronger Core",
      description: "Improve spinal support through targeted exercises.",
    },
    {
      title: "Faster Recovery",
      description: "Return to work and daily activities sooner.",
    },
    {
      title: "Reduced Risk of Recurrence",
      description: "Prevent future episodes of back pain.",
    },
  ],

  approachImage: manualTherapyBackPain, // Suggested: physiotherapist performing manual therapy on lower back
  approachImageAlt: "Physiotherapist performing manual therapy on lower back",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Pain Patterns",
        "Posture",
        "Mobility",
        "Muscle Strength",
        "Functional Limitations",
      ],
    },
    {
      title: "Manual Therapy",
      items: ["Hands-On Techniques", "Joint Mobility"],
    },
    {
      title: "Posture Correction",
      items: ["Sitting Habits", "Standing Habits", "Movement Habits"],
    },
    {
      title: "Core Strengthening",
      items: ["Abdominal Muscles", "Spinal Stabilizing Muscles"],
    },
    {
      title: "Flexibility Training",
      items: ["Stretching Programs", "Stiffness Reduction"],
    },
    {
      title: "Lifestyle Guidance",
      items: ["Ergonomic Recommendations", "Activity Recommendations"],
    },
  ],

  whyChooseUs: [
    {
      title: "Experienced Physiotherapists",
      description: "Specialized care for acute and chronic back pain.",
    },
    {
      title: "Individualized Treatment Plans",
      description: "Treatment tailored to your specific condition.",
    },
    {
      title: "Evidence-Based Care",
      description: "Modern physiotherapy techniques backed by research.",
    },
    {
      title: "Holistic Recovery",
      description:
        "Focus on long-term relief rather than temporary symptom management.",
    },
    {
      title: "Patient-Centered Care",
      description: "Every treatment plan is designed around your goals.",
    },
  ],

  processImage: BackPainExcercise, // Suggested: physiotherapist guiding core strengthening exercises
  processImageAlt: "Physiotherapist guiding core strengthening exercises",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of your condition.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the root cause of pain.",
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
      question: "Can physiotherapy help chronic back pain?",
      answer:
        "Yes. Physiotherapy is highly effective for managing chronic back pain and improving function.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "The number of sessions depends on the severity and duration of your condition.",
    },
    {
      question: "Can physiotherapy help sciatica?",
      answer:
        "Yes. Physiotherapy can reduce nerve irritation and improve mobility.",
    },
    {
      question: "Is exercise safe during back pain?",
      answer: "Yes, when guided by a physiotherapist.",
    },
    {
      question: "Can back pain return after treatment?",
      answer:
        "Proper rehabilitation and preventive exercises significantly reduce recurrence risk.",
    },
  ],

  finalCta: {
    image: HappyBackPain, // Suggested: happy patient standing pain-free after recovery
    imageAlt: "Happy patient standing pain-free after recovery",
    headline: "Start Living Without Back Pain",
    copy: "Don't let back pain limit your daily life. Our expert physiotherapists are ready to help you regain comfort, mobility, and confidence.",
    subheadline: "Book Your Back Pain Assessment Today",
    phoneNumber: "+91-9034107746", // replace with the real clinic number
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function BackPainTreatment() {
  return <ServiceDetailTemplate data={data} />;
}

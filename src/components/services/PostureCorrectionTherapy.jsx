import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate.jsx";

const data = {
  seoTitle:
    "Posture Correction Therapy in Gurgaon | Fix Poor Posture | RehabCare Clinic",
  metaDescription:
    "Correct poor posture and prevent musculoskeletal pain with RehabCare Clinic Gurgaon. Personalized posture correction therapy for better alignment and daily comfort.",
  h1: "Posture Correction Therapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Stand Taller, Move Better, Feel Stronger",
    copy: "Poor posture habits — from desk work, screen time, or daily routines — can quietly lead to pain and long-term musculoskeletal problems.\n\nAt RehabCare Clinic, our posture correction programs help you build healthier movement habits and prevent future pain before it starts.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Posture-related pain often develops gradually, making it easy to overlook until discomfort becomes persistent. Addressing posture early helps prevent more serious issues down the line.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Better Alignment",
      "Reduced Neck & Back Pain",
      "Improved Confidence",
      "Enhanced Daily Function",
    ],
    closing:
      "Our goal is to help you build posture habits that support comfort and movement for the long term.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist assessing a patient's posture",
  conditionsHeading: "Who Benefits from Posture Correction",
  conditions: [
    {
      title: "Desk & Screen Workers",
      description:
        "Support for those experiencing strain from long hours at a desk or screen.",
      examples: [],
    },
    {
      title: "Forward Head Posture",
      description:
        "Correction for the head-forward posture common with screen and phone use.",
      examples: [],
    },
    {
      title: "Rounded Shoulders",
      description:
        "Guidance to address shoulder positioning linked to prolonged sitting.",
      examples: [],
    },
    {
      title: "Lower Back Strain",
      description: "Support for posture-related lower back discomfort.",
      examples: [],
    },
  ],

  signs: [
    "Rounded shoulders or forward head posture",
    "Neck or back discomfort after sitting",
    "Noticeable slouching when standing or sitting",
    "Fatigue in the neck and shoulders by end of day",
    "Reduced confidence in posture or appearance",
    "Discomfort that worsens with prolonged screen use",
  ],
  signsHeading: "Signs You Need Posture Correction",

  benefits: [
    {
      title: "Better Alignment",
      description:
        "Improve overall postural alignment for more efficient movement.",
    },
    {
      title: "Reduced Neck & Back Pain",
      description: "Ease discomfort linked to poor postural habits.",
    },
    {
      title: "Improved Confidence",
      description: "Stand and move with greater confidence and presence.",
    },
    {
      title: "Enhanced Daily Function",
      description: "Support more comfortable movement throughout your day.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Physiotherapist guiding a posture correction exercise",
  approach: [
    {
      title: "Posture Assessment",
      items: ["Postural Analysis", "Movement Screening"],
    },
    { title: "Corrective Exercise", items: ["Strengthening", "Stretching"] },
    {
      title: "Ergonomic Guidance",
      items: ["Workstation Setup", "Daily Habit Adjustments"],
    },
    {
      title: "Ongoing Reinforcement",
      items: ["Habit Tracking", "Progress Review"],
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
    "Physiotherapist demonstrating a corrective posture exercise",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of your posture and movement.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the habits contributing to discomfort.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description: "Develop a personalized correction program.",
    },
    {
      step: "04",
      title: "Progress",
      description: "Build lasting, healthier posture habits.",
    },
  ],

  faqs: [
    {
      question: "Can posture really be corrected?",
      answer:
        "Yes, with consistent guidance and exercises, postural habits can improve significantly over time.",
    },
    {
      question: "How long does posture correction take?",
      answer:
        "This varies by individual, but many people notice improvement within a few weeks of consistent practice.",
    },
    {
      question: "Is posture correction only for office workers?",
      answer:
        "No, anyone experiencing posture-related strain can benefit, regardless of occupation.",
    },
    {
      question: "Will I need special equipment?",
      answer:
        "Most exercises require minimal or no equipment and can be done at home.",
    },
    {
      question: "Can poor posture cause long-term problems if untreated?",
      answer:
        "Yes, prolonged poor posture can contribute to chronic pain and musculoskeletal issues over time.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient standing with improved, confident posture",
    headline: "Ready to Improve Your Posture?",
    copy: "Small daily habits add up over time. Our expert physiotherapists are here to help you build lasting postural change.",
    subheadline: "Book Your Posture Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function PostureCorrectionTherapy() {
  return <ServiceDetailTemplate data={data} />;
}

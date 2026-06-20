import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";

const data = {
  seoTitle:
    "Manual Therapy in Gurgaon | Hands-On Physiotherapy Treatment | RehabCare Clinic",
  metaDescription:
    "Experience expert manual therapy at RehabCare Clinic Gurgaon. Hands-on techniques including joint mobilization, soft tissue release, myofascial release, and trigger point therapy.",
  h1: "Manual Therapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Hands-On Relief for Pain and Restricted Movement",
    copy: "Manual therapy uses skilled, hands-on techniques to relieve pain, release tight tissue, and restore movement where it's needed most.\n\nAt RehabCare Clinic, our physiotherapists use evidence-based manual therapy techniques as part of a complete approach to your recovery.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Manual therapy is often used alongside exercise-based rehabilitation to provide more immediate relief from pain and stiffness, helping the body respond better to active treatment.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Immediate Relief",
      "Improved Joint Mobility",
      "Reduced Muscle Tightness",
      "Enhanced Recovery",
    ],
    closing:
      "Our goal is to combine hands-on care with active rehabilitation for lasting results.",
  },

  conditionsImage: "",
  conditionsImageAlt: "Physiotherapist performing hands-on manual therapy",
  conditionsHeading: "Techniques We Use",
  conditions: [
    {
      title: "Joint Mobilization",
      description:
        "Gentle, targeted movements to improve joint mobility and reduce stiffness.",
      examples: [],
    },
    {
      title: "Soft Tissue Release",
      description:
        "Techniques to relieve tension and tightness in muscles and connective tissue.",
      examples: [],
    },
    {
      title: "Myofascial Release",
      description:
        "Sustained pressure techniques to release tightness in the fascia surrounding muscles.",
      examples: [],
    },
    {
      title: "Trigger Point Therapy",
      description:
        "Targeted pressure on muscle trigger points to relieve localized pain.",
      examples: [],
    },
  ],

  signs: [
    "Joint stiffness that limits movement",
    "Muscle tightness that doesn't ease with rest",
    "Localized areas of persistent tension",
    "Reduced range of motion in a joint",
    "Pain that responds well to touch or pressure",
    "Recurring tightness in the same muscle groups",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Immediate Relief",
      description:
        "Experience noticeable relief from pain and tightness during treatment.",
    },
    {
      title: "Improved Joint Mobility",
      description:
        "Restore movement in joints affected by stiffness or restriction.",
    },
    {
      title: "Reduced Muscle Tightness",
      description:
        "Release tension that builds up in overworked or strained muscles.",
    },
    {
      title: "Enhanced Recovery",
      description:
        "Support faster, more effective recovery alongside active rehabilitation.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Physiotherapist applying soft tissue release techniques",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Movement Patterns",
        "Tissue Quality",
        "Joint Mobility",
        "Pain Triggers",
      ],
    },
    {
      title: "Hands-On Treatment",
      items: ["Joint Mobilization", "Soft Tissue Techniques"],
    },
    {
      title: "Active Rehabilitation",
      items: ["Guided Exercise", "Movement Retraining"],
    },
    {
      title: "Home Care Guidance",
      items: ["Self-Release Techniques", "Stretching Routines"],
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
  processImageAlt: "Physiotherapist demonstrating joint mobilization technique",
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
      question: "Is manual therapy painful?",
      answer:
        "Some techniques may cause mild, temporary discomfort, but treatment is always adjusted to your comfort level.",
    },
    {
      question: "How often will I need manual therapy?",
      answer:
        "Frequency depends on your condition, often combined with active exercise for best results.",
    },
    {
      question: "Can manual therapy be combined with other treatments?",
      answer:
        "Yes. It's commonly used alongside exercise therapy and other rehabilitation techniques.",
    },
    {
      question: "Is manual therapy suitable for chronic pain?",
      answer:
        "Yes, it can be an effective part of a broader chronic pain management plan.",
    },
    {
      question: "Do I need a referral for manual therapy?",
      answer: "No referral is required to book an assessment.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt: "Patient experiencing relief after manual therapy treatment",
    headline: "Ready for Hands-On Relief?",
    copy: "Don't let stiffness and tension hold you back. Our expert physiotherapists are here to help you move freely again.",
    subheadline: "Book Your Manual Therapy Assessment Today",
    phoneNumber: "+91-XXXXXXXXXX",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function ManualTherapy() {
  return <ServiceDetailTemplate data={data} />;
}

import React from "react";
import ServiceDetailPage from "../Servicedetailpage";


const data = {
  seoTitle:
    "Pediatric Physiotherapy in Gurgaon | Physiotherapy for Children | RehabCare Clinic",
  metaDescription:
    "Specialized pediatric physiotherapy at RehabCare Clinic Gurgaon. Supporting children with developmental delays, cerebral palsy, muscle weakness, balance disorders, and postural issues.",
  h1: "Pediatric Physiotherapy in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Supporting Every Child's Physical Development",
    copy: "Every child develops at their own pace, but some benefit from extra support to build strength, coordination, and confidence.\n\nAt RehabCare Clinic, our pediatric physiotherapists provide gentle, specialized care designed to help children reach their physical milestones.",
    image: "",
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Pediatric physiotherapy addresses a wide range of developmental and movement-related needs, using play-based, age-appropriate techniques suited to each child.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Improved Movement",
      "Better Coordination",
      "Enhanced Strength",
      "Increased Confidence",
    ],
    closing:
      "Our goal is to support each child's development in a way that feels encouraging, not intimidating.",
  },

  conditionsImage: "",
  conditionsImageAlt:
    "Physiotherapist working with a child during a play-based session",
  conditionsHeading: "Conditions We Support",
  conditions: [
    {
      title: "Developmental Delays",
      description:
        "Support for children who are not meeting expected movement milestones.",
      examples: [],
    },
    {
      title: "Cerebral Palsy",
      description:
        "Ongoing therapy to support movement, strength, and function.",
      examples: [],
    },
    {
      title: "Muscle Weakness",
      description: "Targeted exercises to build strength and coordination.",
      examples: [],
    },
    {
      title: "Balance Disorders",
      description: "Therapy to improve stability and confidence in movement.",
      examples: [],
    },
    {
      title: "Postural Issues",
      description:
        "Guidance and exercises to support healthy posture development.",
      examples: [],
    },
  ],

  signs: [
    "Delayed motor milestones compared to peers",
    "Frequent falls or clumsiness",
    "Low muscle tone or weakness",
    "Difficulty with balance or coordination",
    "Avoidance of physical activities",
    "Noticeable postural differences",
  ],
  signsHeading: "Signs Your Child May Benefit from Physiotherapy",

  benefits: [
    {
      title: "Improved Movement",
      description: "Support smoother, more confident movement patterns.",
    },
    {
      title: "Better Coordination",
      description:
        "Build coordination skills through guided, engaging activities.",
    },
    {
      title: "Enhanced Strength",
      description:
        "Develop the strength needed for everyday physical activities.",
    },
    {
      title: "Increased Confidence",
      description:
        "Help children feel more confident in their physical abilities.",
    },
  ],

  approachImage: "",
  approachImageAlt: "Child engaging in a play-based physiotherapy exercise",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Developmental Milestones",
        "Movement Patterns",
        "Strength & Balance",
      ],
    },
    {
      title: "Play-Based Therapy",
      items: ["Engaging Exercises", "Age-Appropriate Activities"],
    },
    {
      title: "Family Involvement",
      items: ["Home Exercise Guidance", "Parent Education"],
    },
    {
      title: "Progress Tracking",
      items: ["Milestone Monitoring", "Plan Adjustments"],
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
    "Physiotherapist guiding a child through a milestone exercise",
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Detailed evaluation of your child's condition.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the underlying cause of movement challenges.",
    },
    {
      step: "03",
      title: "Treatment Plan",
      description: "Develop a personalized, play-based therapy program.",
    },
    {
      step: "04",
      title: "Progress",
      description: "Build movement, strength, and confidence over time.",
    },
  ],

  faqs: [
    {
      question: "At what age can children start physiotherapy?",
      answer:
        "Pediatric physiotherapy can begin at any age, from infancy through adolescence, depending on individual needs.",
    },
    {
      question: "Is pediatric physiotherapy only for diagnosed conditions?",
      answer:
        "No. It can also support children who are simply behind on movement milestones.",
    },
    {
      question: "Will sessions involve play?",
      answer:
        "Yes, sessions are designed to be engaging and play-based, suited to each child's age and interests.",
    },
    {
      question: "Can parents be involved in sessions?",
      answer:
        "Yes, parent involvement is encouraged and supports progress between sessions.",
    },
    {
      question: "How long does pediatric physiotherapy typically continue?",
      answer:
        "Duration varies widely depending on the child's condition and goals.",
    },
  ],

  finalCta: {
    image: "",
    imageAlt:
      "Child confidently playing after pediatric physiotherapy sessions",
    headline: "Ready to Support Your Child's Development?",
    copy: "Every child deserves the chance to move, play, and grow with confidence. Our pediatric physiotherapists are here to help.",
    subheadline: "Book Your Pediatric Physiotherapy Assessment Today",
    phoneNumber: "+91-9034107746",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function PediatricPhysiotherapy() {
  return <ServiceDetailPage data={data} />;
}

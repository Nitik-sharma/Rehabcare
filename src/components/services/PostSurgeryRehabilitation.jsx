import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";
import PostHero from "../../images/HeroPost.png"
import PostRec from "../../images/PostImagee.png"
import PostApp from "../../images/process.png"
import PostTrt from "../../images/PostImage3.png"
import PostCta from "../../images/NackCta.avif"

const data = {
  seoTitle:
    "Post-Surgery Rehabilitation in Gurgaon | Physiotherapy After Surgery | RehabCare Clinic",
  metaDescription:
    "Recover safely after surgery with expert physiotherapy at RehabCare Clinic Gurgaon. Rehabilitation for knee replacement, hip replacement, ACL reconstruction, shoulder surgery, and fracture recovery.",
  h1: "Post-Surgery Rehabilitation in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Recover Safely and Regain Strength After Surgery",
    copy: "Surgery is often just the first step toward recovery. Proper rehabilitation is essential to restore strength, mobility, and confidence in the weeks and months that follow.\n\nAt RehabCare Clinic, we provide structured post-surgery rehabilitation programs designed to support safe, steady recovery at every stage of healing.",
    image: PostHero,
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Consultation",
  },

  overview: {
    intro:
      "Without proper rehabilitation after surgery, patients may experience stiffness, weakness, or delayed recovery. A guided physiotherapy program helps ensure surgical outcomes translate into real functional improvement.",
    focusNote: "Our physiotherapy programs focus on:",
    focusAreas: [
      "Faster Healing",
      "Improved Function",
      "Increased Strength",
      "Better Mobility",
    ],
    closing:
      "Our goal is to help you recover safely and return to your daily activities with confidence.",
  },

  conditionsImage: PostRec,
  conditionsImageAlt:
    "Physiotherapist assisting a patient with post-surgery mobility exercises",
  conditionsHeading: "Surgeries We Support Recovery For",
  conditions: [
    {
      title: "Knee Replacement",
      description:
        "Rehabilitation to restore strength and movement after total or partial knee replacement surgery.",
      examples: [],
    },
    {
      title: "Hip Replacement",
      description:
        "Guided recovery programs to regain mobility and stability after hip replacement surgery.",
      examples: [],
    },
    {
      title: "ACL Reconstruction",
      description:
        "Structured rehabilitation to safely rebuild strength and stability after ACL surgery.",
      examples: [],
    },
    {
      title: "Shoulder Surgery",
      description:
        "Recovery support for rotator cuff repairs and other shoulder surgical procedures.",
      examples: [],
    },
    {
      title: "Fracture Recovery",
      description:
        "Rehabilitation to restore strength and function after fracture surgery or immobilization.",
      examples: [],
    },
  ],

  signs: [
    "Stiffness following surgery",
    "Difficulty bearing weight or moving the operated area",
    "Reduced strength compared to before surgery",
    "Swelling that limits movement",
    "Uncertainty about safe exercises post-surgery",
    "Slower than expected functional recovery",
  ],
  signsHeading: "Signs You Need Physiotherapy",

  benefits: [
    {
      title: "Faster Healing",
      description:
        "Support your body's natural healing process with guided, progressive rehabilitation.",
    },
    {
      title: "Improved Function",
      description:
        "Regain the ability to perform daily activities with confidence.",
    },
    {
      title: "Increased Strength",
      description: "Rebuild muscle strength safely around the surgical site.",
    },
    {
      title: "Better Mobility",
      description: "Restore range of motion lost during surgery and recovery.",
    },
  ],

  approachImage: PostApp,
  approachImageAlt:
    "Physiotherapist guiding a patient through post-surgery strength exercises",
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Surgical History",
        "Healing Stage",
        "Pain Levels",
        "Functional Goals",
      ],
    },
    {
      title: "Pain & Swelling Management",
      items: ["Manual Therapy", "Therapeutic Modalities"],
    },
    {
      title: "Progressive Strengthening",
      items: ["Guided Exercise Progression", "Muscle Re-Activation"],
    },
    {
      title: "Functional Retraining",
      items: ["Walking & Movement Patterns", "Return to Daily Activities"],
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

  processImage: PostTrt,
  processImageAlt:
    "Physiotherapist tracking a patient's post-surgery recovery progress",
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
      question: "When should I start physiotherapy after surgery?",
      answer:
        "Your surgeon and physiotherapist will guide the right timing based on your procedure, but early, guided movement often supports better outcomes.",
    },
    {
      question: "Is post-surgery rehabilitation painful?",
      answer:
        "Some discomfort is normal, but your physiotherapist will pace your program to keep it manageable and safe.",
    },
    {
      question: "How long does recovery usually take?",
      answer:
        "Recovery timelines vary by procedure and individual healing, ranging from a few weeks to several months.",
    },
    {
      question: "Can rehabilitation prevent complications?",
      answer:
        "Yes. Proper rehabilitation reduces stiffness, supports healing, and helps prevent long-term complications.",
    },
    {
      question: "Do you coordinate with my surgeon?",
      answer:
        "We're happy to align your rehabilitation plan with your surgeon's recommendations.",
    },
  ],

  finalCta: {
    image: PostCta,
    imageAlt: "Patient walking confidently after post-surgery rehabilitation",
    headline: "Ready to Begin Your Recovery Journey?",
    copy: "Surgery is the first step — rehabilitation is what gets you back to living fully. Our expert physiotherapists are here to guide every stage of your recovery.",
    subheadline: "Book Your Post-Surgery Rehabilitation Assessment Today",
    phoneNumber: "+91-9034107746",
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function PostSurgeryRehabilitation() {
  return <ServiceDetailTemplate data={data} />;
}

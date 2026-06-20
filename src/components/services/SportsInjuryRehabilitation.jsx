import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate.jsx";
import SportsHero from "../../images/sportsHero.png"
import sportProcess from "../../images/sportsprocess.png"
import sportsConditions from "../../images/sportsCondition.png"
import sportsApproach from "../../images/sportsApproach.png"
import sportsCta from "../../images/sportsFinalcta.png"

/**
 * Drop real photo imports in here once you have them, e.g.:
 *   import heroImg from "../images/sports-injury/hero.jpg";
 * and reference them below (data.hero.image, data.conditionsImage, etc).
 * Left as empty strings, each spot shows a branded placeholder instead
 * of a broken image.
 */
const data = {
  seoTitle:
    "Sports Injury Rehabilitation in Gurgaon | Sports Physiotherapy & Recovery | RehabCare Clinic",
  metaDescription:
    "Recover from sports injuries with expert physiotherapy at RehabCare Clinic Gurgaon. Specialized rehabilitation for ligament injuries, muscle strains, ACL injuries, ankle sprains, shoulder injuries, and sports-related pain. Book your consultation today.",
  h1: "Sports Injury Rehabilitation in Gurgaon",

  hero: {
    eyebrow: "RehabCare Clinic · Gurgaon",
    headline: "Get Back in the Game Stronger Than Before",
    copy: "Sports injuries can disrupt your training, performance, and daily life. At RehabCare Clinic, we provide evidence-based sports injury rehabilitation programs designed to help athletes and active individuals recover safely, regain strength, and return to their sport with confidence.\n\nWhether you're a professional athlete, fitness enthusiast, runner, football player, cricketer, or recreational sports participant, our expert physiotherapists create personalized recovery plans tailored to your goals.",
    image: SportsHero, // Suggested: professional physiotherapist treating an athlete
    primaryCta: "Book Appointment",
    secondaryCta: "Schedule Assessment",
  },

  overview: {
    intro:
      "Sports injuries are common among athletes and physically active individuals. These injuries can occur due to overuse, improper technique, inadequate warm-up, sudden impact, or accidents during sports activities.\n\nWithout proper rehabilitation, injuries may lead to chronic pain, reduced performance, weakness, or repeated injuries.",
    focusNote:
      "At RehabCare Clinic Gurgaon, our sports rehabilitation programs focus on:",
    focusAreas: [
      "Pain Reduction",
      "Injury Recovery",
      "Strength Restoration",
      "Mobility Improvement",
      "Performance Enhancement",
      "Injury Prevention",
    ],
    closing:
      "Our goal is not only to help you recover but also to ensure you return stronger and more resilient than before.",
  },

  conditionsImage: sportsConditions, // Suggested: runner receiving knee rehabilitation therapy
  conditions: [
    {
      title: "Ligament Injuries",
      description:
        "Ligament injuries occur when the connective tissues supporting a joint are stretched or torn.",
      examples: ["ACL Injury", "MCL Injury", "Ankle Ligament Sprain"],
    },
    {
      title: "Muscle Strains",
      description:
        "Muscle strains occur when muscles are overstretched or torn during physical activity.",
      examples: ["Hamstrings", "Quadriceps", "Calf Muscles", "Groin Muscles"],
    },
    {
      title: "Tendon Injuries",
      description:
        "Overuse injuries affecting tendons can lead to pain and reduced performance.",
      examples: [
        "Achilles Tendinitis",
        "Patellar Tendinitis",
        "Rotator Cuff Tendinitis",
      ],
    },
    {
      title: "Shoulder Injuries",
      description:
        "Sports involving throwing, lifting, or overhead movements can cause shoulder pain and instability.",
      examples: [
        "Rotator Cuff Injury",
        "Shoulder Impingement",
        "Shoulder Dislocation",
      ],
    },
    {
      title: "Knee Injuries",
      description:
        "Knee injuries are among the most common sports-related conditions.",
      examples: [
        "ACL Tears",
        "Meniscus Injuries",
        "Runner's Knee",
        "Patellofemoral Pain Syndrome",
      ],
    },
    {
      title: "Ankle Injuries",
      description:
        "Sudden twists and impacts can damage ankle ligaments and muscles.",
      examples: [
        "Ankle Sprains",
        "Chronic Ankle Instability",
        "Tendon Injuries",
      ],
    },
  ],

  signs: [
    "Persistent pain after sports activities",
    "Swelling around joints",
    "Reduced mobility",
    "Muscle weakness",
    "Difficulty running or jumping",
    "Joint instability",
    "Recurring injuries",
    "Delayed recovery after training",
  ],
  signsNote:
    "Early intervention helps prevent long-term complications and speeds up recovery.",

  benefits: [
    {
      title: "Faster Recovery",
      description:
        "Targeted rehabilitation helps injured tissues heal efficiently.",
    },
    {
      title: "Pain Relief",
      description:
        "Reduce pain naturally without excessive reliance on medication.",
    },
    {
      title: "Improved Strength",
      description: "Restore muscle strength and endurance safely.",
    },
    {
      title: "Enhanced Mobility",
      description: "Improve flexibility and joint movement.",
    },
    {
      title: "Better Performance",
      description: "Optimize biomechanics and athletic performance.",
    },
    {
      title: "Reduced Risk of Re-Injury",
      description: "Address underlying weaknesses and movement dysfunctions.",
    },
    {
      title: "Increased Confidence",
      description:
        "Return to sports knowing your body is prepared for physical demands.",
    },
  ],

  approachImage: sportsApproach, // Suggested: football player recovering from ankle injury
  approach: [
    {
      title: "Comprehensive Assessment",
      items: [
        "Injury History",
        "Pain Levels",
        "Joint Mobility",
        "Muscle Strength",
        "Movement Patterns",
        "Functional Limitations",
      ],
    },
    {
      title: "Pain Management",
      items: [
        "Manual Therapy",
        "Soft Tissue Mobilization",
        "Dry Needling",
        "Therapeutic Modalities",
        "Pain Relief Exercises",
      ],
    },
    {
      title: "Strength Training",
      items: ["Muscle Strength", "Joint Stability", "Athletic Endurance"],
    },
    {
      title: "Mobility Restoration",
      items: ["Flexibility", "Range of Motion", "Joint Function"],
    },
    {
      title: "Sport-Specific Rehabilitation",
      items: [
        "Cricket",
        "Football",
        "Running",
        "Tennis",
        "Badminton",
        "Gym Training",
      ],
    },
    {
      title: "Injury Prevention Training",
      items: [
        "Proper Warm-Up Techniques",
        "Movement Mechanics",
        "Strength Maintenance",
        "Recovery Strategies",
      ],
    },
  ],

  whyChooseUs: [
    {
      title: "Experienced Physiotherapists",
      description:
        "Our team specializes in sports injury assessment and rehabilitation.",
    },
    {
      title: "Personalized Treatment Plans",
      description: "Every athlete receives a customized recovery program.",
    },
    {
      title: "Evidence-Based Care",
      description:
        "We use modern rehabilitation techniques backed by scientific research.",
    },
    {
      title: "Patient-Centered Approach",
      description:
        "Your goals and performance needs guide every treatment plan.",
    },
    {
      title: "Modern Rehabilitation Methods",
      description:
        "Advanced physiotherapy techniques for faster and safer recovery.",
    },
  ],

  processImage: sportProcess, // Suggested: physiotherapist guiding strength exercises
  process: [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of injury and physical function.",
    },
    {
      step: "02",
      title: "Diagnosis",
      description: "Identify the root cause of pain and dysfunction.",
    },
    {
      step: "03",
      title: "Rehabilitation Plan",
      description: "Develop a customized treatment strategy.",
    },
    {
      step: "04",
      title: "Recovery & Return to Sport",
      description: "Restore confidence, strength, and performance.",
    },
  ],

  faqs: [
    {
      question: "How long does sports injury rehabilitation take?",
      answer:
        "Recovery time depends on the severity of the injury and individual healing capacity. Some injuries improve within weeks, while others may require several months.",
    },
    {
      question: "Can physiotherapy help avoid surgery?",
      answer:
        "In many cases, physiotherapy can effectively manage injuries and improve function, reducing the need for surgical intervention.",
    },
    {
      question: "When should I start rehabilitation after an injury?",
      answer:
        "Early physiotherapy often leads to faster recovery and better outcomes.",
    },
    {
      question: "Can I continue exercising during treatment?",
      answer:
        "Your physiotherapist will guide you on safe activities and modifications during recovery.",
    },
    {
      question: "Do you treat professional athletes?",
      answer:
        "Yes. We provide rehabilitation for both professional athletes and recreational sports participants.",
    },
    {
      question: "Is sports rehabilitation only for athletes?",
      answer:
        "No. Anyone with a sports or exercise-related injury can benefit from sports rehabilitation.",
    },
  ],

  finalCta: {
    image: sportsCta, // Suggested: athlete returning to training after recovery
    headline: "Ready to Return to Peak Performance?",
    copy: "Don't let injuries keep you on the sidelines. Our expert physiotherapists are here to help you recover faster, move better, and perform at your best.",
    subheadline: "Book Your Sports Injury Assessment Today",
    phoneNumber: "+91-9034107746", // replace with the real clinic number
    phoneCta: "Call Now",
    bookCta: "Book Appointment",
    address: "RehabCare Clinic, Gurgaon",
  },
};

export default function SportsInjuryRehabilitation() {
  return <ServiceDetailTemplate data={data} />;
}

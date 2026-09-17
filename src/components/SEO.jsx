
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://rehabcarephyso.com";
const SITE_NAME = "RehabCare Physiotherapy Clinic";

const pageSEO = {
  "/": {
    title: "RehabCare Physiotherapy Clinic | Best Physiotherapy in Gurugram",
    description:
      "RehabCare Physiotherapy Clinic in Gurugram provides personalized physiotherapy, pain management, sports injury rehabilitation, post-surgery rehabilitation and home physiotherapy services.",
    keywords:
      "physiotherapy in Gurugram, physiotherapist in Gurugram, physiotherapy clinic Gurugram, home physiotherapy Gurugram, sports injury physiotherapy",
  },

  "/about": {
    title: "About RehabCare | Physiotherapy Clinic in Gurugram",
    description:
      "Learn about RehabCare Physiotherapy Clinic in Gurugram and our approach to personalized physiotherapy, rehabilitation and pain management.",
    keywords:
      "about RehabCare, physiotherapy clinic Gurugram, physiotherapist Gurugram, rehabilitation clinic",
  },

  "/services": {
    title: "Physiotherapy Services in Gurugram | RehabCare",
    description:
      "Explore physiotherapy and rehabilitation services at RehabCare in Gurugram, including pain management, sports injury rehabilitation, post-surgery rehabilitation and home physiotherapy.",
    keywords:
      "physiotherapy services Gurugram, pain management Gurugram, sports injury rehabilitation, post surgery physiotherapy, home physiotherapy",
  },

  "/contact": {
    title: "Contact RehabCare Physiotherapy Clinic | Gurugram",
    description:
      "Contact RehabCare Physiotherapy Clinic at 18, Yadav Market, Dhanwapur Road, Laxman Vihar, Gurugram, Haryana for physiotherapy and rehabilitation services.",
    keywords:
      "contact physiotherapist Gurugram, RehabCare contact, physiotherapy clinic Laxman Vihar, physiotherapy Dhanwapur Road",
  },

  "/book-appointment": {
    title: "Book Physiotherapy Appointment in Gurugram | RehabCare",
    description:
      "Book an appointment with RehabCare Physiotherapy Clinic in Gurugram for personalized physiotherapy, pain management and rehabilitation care.",
    keywords:
      "book physiotherapy appointment Gurugram, physiotherapist appointment, RehabCare appointment",
  },
};

function SEO() {
  const location = useLocation();

  const currentPath = location.pathname.replace(/\/$/, "") || "/";

  const seo = pageSEO[currentPath] || {
    title: `${SITE_NAME} | Physiotherapy & Rehabilitation`,
    description:
      "RehabCare Physiotherapy Clinic provides professional physiotherapy and rehabilitation services in Gurugram.",
    keywords:
      "RehabCare, physiotherapy, physiotherapy clinic Gurugram, rehabilitation",
  };

  const canonicalURL =
    currentPath === "/"
      ? SITE_URL
      : `${SITE_URL}${currentPath}`;

  useEffect(() => {
    // Page Title
    document.title = seo.title;

    // Helper function for meta tags
    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Helper function for property meta tags
    const setPropertyMeta = (property, content) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("robots", "index, follow");
    setMeta("author", SITE_NAME);

    // Google / Search Engine
    setMeta(
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Open Graph
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:title", seo.title);
    setPropertyMeta("og:description", seo.description);
    setPropertyMeta("og:url", canonicalURL);
    setPropertyMeta("og:site_name", SITE_NAME);
    setPropertyMeta(
      "og:image",
      `${SITE_URL}/og-image.jpg`
    );

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta(
      "twitter:image",
      `${SITE_URL}/og-image.jpg`
    );

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalURL);

    // Structured Data
    const existingSchema = document.getElementById(
      "rehabcare-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "rehabcare-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Physiotherapy",
      name: SITE_NAME,
      url: SITE_URL,
      description: seo.description,
      telephone: "+919034107746",
      email: "prehabcare@gmail.com",

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "18, Yadav Market, Dhanwapur Road, Laxman Vihar",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },

      areaServed: {
        "@type": "City",
        name: "Gurugram",
      },

      medicalSpecialty: "Physiotherapy",

      sameAs: [],
    });

    document.head.appendChild(schema);

    // Cleanup
    return () => {
      if (schema.parentNode) {
        schema.parentNode.removeChild(schema);
      }
    };
  }, [currentPath, seo]);

  return null;
}

export default SEO;

import {
  FaBuilding,
  FaMoneyBillWave,
  FaTools,
  FaChartLine,
  FaUsers,
  FaChartBar,
  FaSync,
  FaMobileAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { ReactNode } from "react";

export const images: string[] = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop",
];

export interface ProductFeature {
  icon: ReactNode;
  text: string;
}

export interface Product {
  name: string;
  description: string;
  features: ProductFeature[];
  pricing: string;
  link: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "Zelox Apartment Management System",
    description:
      "A comprehensive property management solution designed for residential and multi-family properties. Streamline tenant management, rent collection, maintenance tracking, and financial reporting with an intuitive, cloud-based platform.",
    features: [
      { icon: <FaBuilding />, text: "Tenant Management: Track tenant information, leases, and communications." },
      { icon: <FaMoneyBillWave />, text: "Automated Rent Collection: Integrate with payment systems for seamless rent payments." },
      { icon: <FaTools />, text: "Maintenance Tracking: Manage requests and maintenance schedules efficiently." },
      { icon: <FaChartLine />, text: "Financial Reporting: Generate reports on revenue, expenses, and cash flow." },
    ],
    pricing: "Contact us for pricing or to schedule a free demo.",
    link: "https://zeloxproperties.vercel.app/",
    image: images[0],
  },
  {
    name: "Zelox Sales KeepUp",
    description:
      "A powerful React Native App for sales tracking, designed to help businesses manage leads, track performance, and gain insights on the go. Works seamlessly online or offline across all devices.",
    features: [
      { icon: <FaUsers />, text: "Lead Management: Organize and track leads with ease." },
      { icon: <FaChartBar />, text: "Real-Time Analytics: Monitor sales performance with dynamic dashboards." },
      { icon: <FaSync />, text: "Offline Functionality: Access and update data without an internet connection." },
      { icon: <FaMobileAlt />, text: "Cross-Device Compatibility: Use on mobile, tablet, or desktop." },
    ],
    pricing: "Contact us for pricing or to schedule a free demo.",
    link: "https://zelshop.vercel.app/",
    image: images[1],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    role: "Property Manager",
    quote:
      "The Zelox Apartment Management System transformed our operations, making tenant management and rent collection seamless and efficient.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b9b71564?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Entrepreneur",
    quote:
      "Zelox Ecomass System is a game-changer for our online store. The payment integrations and analytics are top-notch!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Sales Director",
    quote:
      "The Sales KeepUp PWA helped our team stay productive on the go. The offline functionality is a lifesaver for remote work.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  { name: "Twitter", href: "https://x.com/zeloxIndustries", icon: <FaTwitter className="h-6 w-6" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zelox-industries-54124b378/", icon: <FaLinkedin className="h-6 w-6" /> },
  { name: "GitHub", href: "https://github.com/zeloxinc", icon: <FaGithub className="h-6 w-6" /> },
  { name: "WhatsApp", href: "https://wa.me/+254112099003", icon: <FaWhatsapp className="h-6 w-6" /> },
  { name: "Facebook", href: "https://www.instagram.com/zelox_industries/", icon: <FaFacebook className="h-6 w-6" /> },
];
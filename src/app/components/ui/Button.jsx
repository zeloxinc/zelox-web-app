import React from "react";
import { motion } from "motion/react";

const Button = ({ link, text, variant = "default", fullWidth = false }) => {
  console.log(link)
  const baseClasses =
    `font-hubot inline-flex items-center justify-center px-4 py-2 rounded-md transition-all ease-in-out duration-300 text-base font-medium ${fullWidth ? "w-full" : ""}`;

  const variants = {
    default:
      "bg-black text-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent border border-black text-black hover:bg-black hover:text-white",
  };

  const classes = `${baseClasses} ${variants[variant] || variants.default}`;
  const MotionTag = motion[link ? "a" : "button"];

  return (
    <MotionTag
      href={link || undefined}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </MotionTag>
  );
};

export default Button;
import React from "react";

const Button = ({ link, text, variant = "default", fullWidth = false }) => {
  const baseClasses =
    `font-hubot inline-flex items-center justify-center px-4 py-2 rounded-md 
     text-base font-medium transition-transform duration-200 ease-in-out 
     ${fullWidth ? "w-full" : ""}`;

  const variants = {
    default:
      "bg-black text-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent border border-black text-black hover:bg-black hover:text-white",
  };

  const classes = `${baseClasses} ${variants[variant] || variants.default}`;

  const Tag = link ? "a" : "button";

  return (
    <Tag
      href={link || undefined}
      className={`${classes} hover:scale-105 active:scale-95`}
    >
      {text}
    </Tag>
  );
};

export default Button;

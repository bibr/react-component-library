import React from "react";

import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="ut-px-4 ut-py-1 ut-text-sm ut-text-neutral-900 
  ut-font-semibold ut-rounded-full ut-border ut-border-green-400 ">{props.label}</button>
};

export default Button;
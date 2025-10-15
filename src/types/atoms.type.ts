import { JSX } from "react";

export type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "span";

export type TextProps = {
  as?: keyof JSX.IntrinsicElements; // like 'p', 'span', 'h1', etc..
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

export type IconProps = {
  name: "home" | "search";
  size?: number;
  className?: string;
};

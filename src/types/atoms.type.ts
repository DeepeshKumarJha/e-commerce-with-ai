import { Dispatch, JSX, SetStateAction } from "react";

export type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "a";

export type TextProps = {
  as?: keyof JSX.IntrinsicElements; // like 'p', 'span', 'h1', etc..
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

export type IconProps = {
  name: "home" | "search" | "cart";
  size?: number;
  className?: string;
};

export type MenuIconProps = {
  open?: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  lineClassName?: string;
  className?: string;
};

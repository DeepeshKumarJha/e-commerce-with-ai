import { cn } from "@/lib/utils";
import { TextProps, Variant } from "@/types/atoms.type";

const variants: Record<Variant, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "",
  h3: "",
  h4: "",
  p: "",
  span: "",
  a: "text-medium font-[500]",
};

const Text = ({
  as: Tag = "p",
  variant = "p",
  children,
  className,
}: TextProps) => {
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
};

export { Text };

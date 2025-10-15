import { IconProps } from "@/types/atoms.type";
import { LucideHome, LucideSearch } from "lucide-react";

export const Icon = ({ name, size = 24, className }: IconProps) => {
  const icons = {
    home: <LucideHome size={size} />,
    search: <LucideSearch size={size} />,
  };

  return <span className={className}>{icons[name]}</span>;
};

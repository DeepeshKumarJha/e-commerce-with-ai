import Link from "next/link";
import { Text } from "../atoms/text.atom";
import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types/molecules.type";

export const NavLink = ({ label, href, className }: NavLinkProps) => {
  return (
    <Link href={href}>
      <Text
        as="p"
        variant="a"
        className={cn(
          className,
          "relative w-fit after:transition-all after:content-[''] after:absolute after:h-[.1rem] after:w-0 hover:after:w-full after:bg-black after:bottom-0 after:left-0"
        )}
      >
        {label}
      </Text>
    </Link>
  );
};

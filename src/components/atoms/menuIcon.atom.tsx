import { cn } from "@/lib/utils";
import { MenuIconProps } from "@/types/atoms.type";

export const MenuIcon = ({
  open = false,
  onClose,
  lineClassName,
  className,
}: MenuIconProps) => {
  const commonLineStyle =
    "h-[.15rem] rounded-full w-full bg-black transition-all origin-left";

  return (
    <div
      className={cn(
        "h-[1.2rem] w-fit flex flex-col justify-between cursor-pointer transition-all",
        className,
        open ? "aspect-square" : "aspect-video"
      )}
      onClick={() => onClose(!open)}
    >
      <div
        className={cn(
          commonLineStyle,
          lineClassName,
          "w-full",
          open ? "rotate-45 w-[120%]" : ""
        )}
      ></div>
      <div
        className={cn(commonLineStyle, lineClassName, open ? "w-0" : "w-2/3")}
      ></div>
      <div
        className={cn(
          commonLineStyle,
          lineClassName,
          "w-full",
          open ? "-rotate-45 w-[120%]" : ""
        )}
      ></div>
    </div>
  );
};

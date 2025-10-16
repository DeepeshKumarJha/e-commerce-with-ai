import { ButtonProps } from "@/types/molecules.type";
import { Icon } from "./icon.atom";
import { Text } from "./text.atom";

export const Button = ({ icon, label }: ButtonProps) => {
  return (
    <button className="rounded-full border-2 border-gray-300 p-3 cursor-pointer">
      {icon && <Icon name="cart" size={16} className="text-gray-500" />}{" "}
      {label && (
        <Text as="p" variant="p">
          {label}
        </Text>
      )}
    </button>
  );
};

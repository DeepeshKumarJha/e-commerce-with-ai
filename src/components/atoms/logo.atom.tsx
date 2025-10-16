import Image from "next/image";
import { Text } from "./text.atom";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      height={500}
      width={500}
      className="h-14 w-auto"
      alt=""
    />
  );
};

export { Logo };

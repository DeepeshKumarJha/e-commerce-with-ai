import Image from "next/image";
import { Text } from "./text.atom";

const Logo = () => {
  return <Image src="/next.svg" height={100} width={100} alt="" />;
};

export { Logo };

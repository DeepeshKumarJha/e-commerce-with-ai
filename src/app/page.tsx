import { Text } from "@/components/atoms/text.atom";
import { Navbar } from "@/components/organisms/navbar.organism";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-5 w-full">
        <div className="w-full bg-amber-100 h-185 rounded-3xl"></div>
      </div>
    </>
  );
}

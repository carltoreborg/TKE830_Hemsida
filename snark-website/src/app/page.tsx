import Image from "next/image";
import snark_image from "../images/snark.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="front-header">
        IKEA SNARK
      </div>
      <Image src="/images/snark.png" 
             alt="IKEA SNARK" 
             width={1000} 
             height={500} />
    </div>
  );
}

import Image from "next/image";
import Video from "./Video";
import Info from "./components/Info";

export default function Home() {
  return (

    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <Video />
      <Info />

      
    </section>
  );
}
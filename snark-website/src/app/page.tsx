import Video from "./Video";
import YoutubeEmbed from "./Video/text";
import Info from "./components/Info";
import OurTeam from "./components/Info/ourteam";
import SlideShow from "./components/Info/SlideShow";
import Footer from "./components/Info/footer";
import "./homepage.css";
import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url(/images/background.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}

      <div className="flex flex-col items-center">
        <div className="positionbox element1 z-10 mb-20">
          <Info />
        </div>

        <div className="positionbox element2 z-10 mb-8 flex flex-col items-center justify-center">
        <h1 className="text-8xl text-white flex flex-col items-center justify-center mb-8 mt-20">Final Capstone PPT Presentation</h1>
        <SlideShow />
        </div>

        <div className="positionbox element3 z-10 mb-8 flex flex-col items-center justify-center">
        <h1 className="text-8xl text-white flex flex-col items-center justify-center mb-8 mt-20">Final Capstone Pitch Video</h1>
        <YoutubeEmbed embedId="_6z3CIG_tSg?si=W7HbwlmUDJVsxF_n" />
        {/*<Video />*/}
        </div>

        <div className="positionbox element4 z-10">
          <h1 className="text-8xl text-white flex flex-col items-center justify-center mb-2 mt-20">Our Team</h1>
          <h4 className="text-2xl text-white flex flex-col items-center justify-center mb-5">Click to show contact info</h4>
          <OurTeam />
        </div>
        
        <div className="positionbox element5 z-10 mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
}
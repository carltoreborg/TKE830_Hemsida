import Info from "./components/Info";
import OurTeam from "./components/Info/ourteam";
import SlideShow from "./components/Info/SlideShow";
import Footer from "./components/Info/footer";
import Header from "./components/Header";
import "./homepage.css";
import ReactTooltip from 'react-tooltip';


export default function Home() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="flex flex-col items-center">

      <div className="positionbox element1 z-10 mb-10">
      <Header />
      </div>

      <div className="flex flex-row items-center z-10 justify-center">
      <div className="background-block-top">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-3xl xl:text-4xl mb-4">
            Introducing the IKEA SNARK
            </h2>
            <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
            The smart mattress- and blanket- range with personalized temperature settings. By using modern technology, we have created a product that will revolutionize the way you sleep. <br/>
            <strong className="rainbow-text">Click the button to the right to test the demo version of our app.</strong>
            </p>
          </div>

      <a href="https://snark-app.chalmers.it/" target="_blank" rel="noopener noreferrer flex flex-col items-center justify-center">
          <img src="./images/hand_with_app.png" alt="hand-with-app" className="h-128 w-128 hover:brightness-50" />
          </a>
        
          </div>

        <div className="positionbox element1 z-10 mb-20">
          
          {/*<YoutubeEmbed embedId="_6z3CIG_tSg?si=W7HbwlmUDJVsxF_n"> */}
        </div>

        <div className="positionbox element2 z-10 mb-8 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-white flex flex-col items-center justify-center mb-8 mt-20">
            Sprint 2 - Second Pitch Presentation
          </h1>
          <SlideShow />
        </div>

        <div className="positionbox element3 z-10 mb-8 flex flex-col items-center justify-center">
          <h1 className="text-6xl text-white flex flex-col items-center justify-center mb-8 mt-20">
            Important Aspects of the Product Design
          </h1>
          <Info />
        </div>

        <div className="positionbox element4 z-10">
          <h1 className="text-6xl text-white flex flex-col items-center justify-center mb-2 mt-20">
            Our Team
          </h1>
          <h4 className="text-2xl text-white flex flex-col items-center justify-center mb-5">
            Click to show contact info
          </h4>
          <OurTeam />
        </div>

        <div className="positionbox element5 z-10 mt-8">
          <Footer />
        </div>
      </div>
    </section>
  );
}

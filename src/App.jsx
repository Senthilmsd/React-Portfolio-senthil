import Navbar from "./Components/Navbar"
import Summary from "./Components/Summary";
import About from "./Components/About";
import Technology from "./Components/Technology";
import Internship from "./Components/Internship";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App =() => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900 ml-0">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-3] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Summary/>
        <About/>
        <Technology/>
        <Internship />
        <Project />
        <Contact/>
      </div>
      
    </div>
  );
};

export default App;
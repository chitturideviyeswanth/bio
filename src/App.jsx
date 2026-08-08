import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Bio from "./components/Bio";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-y-auto antialiased">
      {/* Background Cover */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img opacity-40 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-12 container mx-auto max-w-6xl">
        <Navbar />
        <Hero />
        <Projects />

        {/* Bio & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <Bio />
          <Skills />
        </div>

        {/* Work Experience, Education & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Left side: Work Experience */}
          <div className="col-span-1 h-full">
            <WorkExperience />
          </div>

          {/* Right side: Education and Achievements */}
          <div className="col-span-1 flex flex-col gap-8 h-full">
            <div className="h-full">
              <Education />
            </div>
            <div className="h-full">
              <Achievements />
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Dock from "../Dock/Dock";
import MenuBar from "../MenuBar/MenuBar";
import DesktopIcons from "../DesktopIcons/DesktopIcons";
import GithubWindow from "../Windows/GithubWindow";
import SkillsWindow from "../Windows/SkillsWindow";
import ExperienceWindow from "../Windows/ExperienceWindow";
import TechStackWindow from "../Windows/TechStackWindow";
import LinkedInWindow from "../Windows/LinkedInWindow";
import ContactWindow from "../Windows/ContactWindow";
import ResumeWindow from "../Windows/ResumeWindow";

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState({
    github: false,
    skills: false,
    experience: false,
    techStack: false,
    linkedin: false,
    contact: false,
    resume: false,
  });

  const toggleWindow = (window: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({
      ...prev,
      [window]: !prev[window],
    }));
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-black"
        style={{
          backgroundImage:
            'url("https://preview.redd.it/modified-the-m3-mac-wallpaper-and-thought-it-looked-good-v0-powq8jb5j5bc1.jpeg?auto=webp&s=66231a10e81f3061e1cd6f1807238fdfcd6569a3")',
        }}
      />
      
      <div className="relative h-full flex flex-col">
        <MenuBar />
        <div className="flex-1 relative">
          <DesktopIcons
            onIconClick={(window) =>
              toggleWindow(window as keyof typeof openWindows)
            }
          />
          
          <GithubWindow
            isOpen={openWindows.github}
            onClose={() => toggleWindow("github")}
          />
          <SkillsWindow
            isOpen={openWindows.skills}
            onClose={() => toggleWindow("skills")}
          />
          <ExperienceWindow
            isOpen={openWindows.experience}
            onClose={() => toggleWindow("experience")}
          />
          <TechStackWindow
            isOpen={openWindows.techStack}
            onClose={() => toggleWindow("techStack")}
          />
          <LinkedInWindow
            isOpen={openWindows.linkedin}
            onClose={() => toggleWindow("linkedin")}
          />
          <ContactWindow
            isOpen={openWindows.contact}
            onClose={() => toggleWindow("contact")}
          />
          <ResumeWindow
            isOpen={openWindows.resume}
            onClose={() => toggleWindow("resume")}
          />
        </div>
        
        <Dock
          onItemClick={(window) =>
            toggleWindow(window as keyof typeof openWindows)
          }
        />
      </div>
    </div>
  );
};

export default Desktop;

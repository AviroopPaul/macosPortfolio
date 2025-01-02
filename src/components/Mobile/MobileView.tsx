import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaBuilding,
  FaFileAlt,
  FaGraduationCap,
  FaTerminal,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaChevronLeft,
} from "react-icons/fa";
import { WeatherWidget } from "../Widgets/SystemWidgets";
import MobileMenuBar from "./MobileMenuBar";

// Import mobile-specific apps
import SkillsApp from "./Apps/SkillsApp";
import ExperienceApp from "./Apps/ExperienceApp";
import ContactApp from "./Apps/ContactApp";
import EducationApp from "./Apps/EducationApp";
import ResumeApp from "./Apps/ResumeApp";
import GithubApp from "./Apps/GithubApp";
import LinkedInApp from "./Apps/LinkedInApp";

interface MobileAppState {
  currentApp: string | null;
  apps: {
    [key: string]: {
      icon: JSX.Element;
      label: string;
      gradientFrom: string;
      gradientTo: string;
      component: React.ComponentType<any>;
    };
  };
}

const MobileView: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [state, setState] = useState<MobileAppState>({
    currentApp: null,
    apps: {
      skills: {
        icon: <FaCode size={30} />,
        label: "Skills",
        gradientFrom: "from-blue-400",
        gradientTo: "to-blue-600",
        component: SkillsApp,
      },
      experience: {
        icon: <FaBuilding size={30} />,
        label: "Experience",
        gradientFrom: "from-green-400",
        gradientTo: "to-green-600",
        component: ExperienceApp,
      },
      education: {
        icon: <FaGraduationCap size={30} />,
        label: "Education",
        gradientFrom: "from-purple-400",
        gradientTo: "to-purple-600",
        component: EducationApp,
      },
      resume: {
        icon: <FaFileAlt size={30} />,
        label: "Resume",
        gradientFrom: "from-yellow-400",
        gradientTo: "to-yellow-600",
        component: ResumeApp,
      },
      contact: {
        icon: <FaEnvelope size={30} />,
        label: "Contact",
        gradientFrom: "from-red-400",
        gradientTo: "to-red-600",
        component: ContactApp,
      },
      github: {
        icon: <FaGithub size={30} />,
        label: "GitHub",
        gradientFrom: "from-gray-700",
        gradientTo: "to-gray-900",
        component: GithubApp,
      },
      linkedin: {
        icon: <FaLinkedin size={30} />,
        label: "LinkedIn",
        gradientFrom: "from-blue-500",
        gradientTo: "to-blue-700",
        component: LinkedInApp,
      },
    },
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openApp = (appKey: string) => {
    setState((prev) => ({ ...prev, currentApp: appKey }));
  };

  const closeApp = () => {
    setState((prev) => ({ ...prev, currentApp: null }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Modern iPhone Container */}
      <div className="relative w-screen h-screen overflow-hidden bg-black shadow-2xl">
        {/* Screen */}
        <div className="relative h-full">
          {/* Background Wallpaper */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://r1.ilikewallpaper.net/iphone-8-plus-wallpapers/download-151523/Deep-Purple-iPhone-14-Stock-Pro-Wallpaper.jpg")',
            }}
          />

          {/* Status Bar */}
          <div className="relative pt-2">
            <MobileMenuBar />
          </div>

          {/* App Header with Back Button */}
          {state.currentApp && (
            <div className="relative flex items-center px-4 bg-black/90 backdrop-blur-sm pt-8 pb-2 z-10">
              <button
                onClick={closeApp}
                className="flex items-center text-white"
              >
                <FaChevronLeft className="mr-1" />
                <span>Back</span>
              </button>
              <h1 className="flex-1 text-center font-semibold mr-8 text-white">
                {state.apps[state.currentApp].label}
              </h1>
            </div>
          )}

          {/* Content Area */}
          <div className="relative h-full">
            {/* Widgets Area */}
            {!state.currentApp && (
              <div className="px-4 py-2 space-y-2">
                <div className="scale-75 -mb-4">
                  <WeatherWidget />
                </div>
                <div className="flex justify-center">
                  <div className="bg-black/20 backdrop-blur-xl rounded-2xl px-8 py-4">
                    <div className="text-6xl font-light text-white tracking-tight">
                      {time.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </div>
                    <div className="text-sm text-white/80 text-center mt-1">
                      {time.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Apps Grid */}
            {!state.currentApp && (
              <div className="grid grid-cols-4 gap-4 px-4 mt-8">
                {Object.entries(state.apps)
                  .filter(
                    ([key]) => !["github", "linkedin", "resume"].includes(key)
                  )
                  .map(([key, app]) => (
                    <button
                      key={key}
                      onClick={() => openApp(key)}
                      className="flex flex-col items-center"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${app.gradientFrom} ${app.gradientTo} relative overflow-hidden`}
                        style={{
                          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                        <div className="relative z-10">
                          {React.cloneElement(app.icon, { size: 28 })}
                        </div>
                      </div>
                      <span className="text-xs mt-1 text-white font-medium">
                        {app.label}
                      </span>
                    </button>
                  ))}
              </div>
            )}

            {/* App Content */}
            {state.currentApp && (
              <div className="h-[calc(100%-120px)] overflow-y-auto">
                {React.createElement(state.apps[state.currentApp].component, {
                  isOpen: true,
                  onClose: closeApp,
                })}
              </div>
            )}
          </div>

          {/* Dock - Only show when no app is open */}
          {!state.currentApp && (
            <div className="absolute bottom-4 left-0 right-0 mx-4 h-20 bg-white/20 backdrop-blur-md rounded-2xl grid grid-cols-4 gap-4 px-4 items-center">
              <button
                onClick={() => openApp("github")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.github.gradientFrom} ${state.apps.github.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaGithub size={28} className="text-white" />
                  </div>
                </div>
              </button>
              <button
                onClick={() => openApp("linkedin")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.linkedin.gradientFrom} ${state.apps.linkedin.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaLinkedin size={28} className="text-white" />
                  </div>
                </div>
              </button>
              <button
                onClick={() => openApp("contact")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.contact.gradientFrom} ${state.apps.contact.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaEnvelope size={28} className="text-white" />
                  </div>
                </div>
              </button>
              <button
                onClick={() => openApp("resume")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.resume.gradientFrom} ${state.apps.resume.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaFileAlt size={28} className="text-white" />
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MobileView;

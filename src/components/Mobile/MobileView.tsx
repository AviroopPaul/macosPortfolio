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
  FaCog,
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
import SettingsApp from "./Apps/SettingsApp";

interface MobileAppState {
  currentApp: string | null;
  isAnimating: boolean;
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
    isAnimating: false,
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
      settings: {
        icon: <FaCog size={30} />,
        label: "Settings",
        gradientFrom: "from-gray-400",
        gradientTo: "to-gray-600",
        component: SettingsApp,
      },
    },
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const openApp = (appKey: string) => {
    setState((prev) => ({ ...prev, isAnimating: true }));
    requestAnimationFrame(() => {
      setState((prev) => ({ ...prev, currentApp: appKey }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, isAnimating: false }));
      }, 400);
    });
  };

  const closeApp = () => {
    setState((prev) => ({ ...prev, isAnimating: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, currentApp: null }));
      setTimeout(() => {
        setState((prev) => ({ ...prev, isAnimating: false }));
      }, 50);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Modern iPhone Container */}
      <div className="relative w-screen h-screen overflow-hidden bg-black shadow-2xl">
        {/* Screen */}
        <div className="relative min-h-screen">
          {/* Background Wallpaper */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://4kwallpapers.com/images/wallpapers/ios-13-stock-ipados-red-black-background-amoled-ipad-hd-1080x2160-792.jpg")',
            }}
          />

          {/* Status Bar */}
          <div className="relative">
            <MobileMenuBar isAppOpen={state.currentApp !== null} />
          </div>

          {/* Home Screen Content */}
          <div
            className={`absolute inset-0 transition-transform duration-300 ease-out ${
              state.currentApp
                ? "transform scale-95 opacity-0 pointer-events-none"
                : "transform scale-100 opacity-100"
            }`}
          >
            {/* Widgets Area */}
            {!state.currentApp && (
              <div className="px-4 py-2 space-y-2">
                <div className="scale-75 -mb-4 mt-6">
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
                    ([key]) =>
                      !["github", "linkedin", "education", "settings"].includes(
                        key
                      )
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
                      <span className="text-sm mt-1 text-white font-medium">
                        {app.label}
                      </span>
                    </button>
                  ))}
              </div>
            )}
          </div>

          {/* App Screen */}
          <div
            className={`absolute inset-0 transition-all duration-300 ease-out ${
              !state.currentApp ? "pointer-events-none" : ""
            }`}
            style={{
              opacity: state.currentApp ? 1 : 0,
              transform: state.currentApp ? "scale(1)" : "scale(1.05)",
            }}
          >
            {state.currentApp && (
              <div className="flex flex-col mt-8">
                {/* App Header */}
                <div className="relative flex items-center px-4 bg-black backdrop-blur-sm h-14 z-10">
                  <button
                    onClick={closeApp}
                    className="flex items-center text-white"
                  >
                    <FaChevronLeft className="text-lg" />
                  </button>
                  <h1 className="flex-1 text-center font-semibold text-white text-xl">
                    {state.apps[state.currentApp].label}
                  </h1>
                </div>

                {/* App Content */}
                <div className="flex-1 overflow-y-auto">
                  {React.createElement(state.apps[state.currentApp].component, {
                    isOpen: true,
                    onClose: closeApp,
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Dock - Only show when no app is open */}
          {!state.currentApp && (
            <div className="absolute bottom-4 left-0 right-0 mx-4 h-20 bg-white/20 backdrop-blur-md rounded-2xl grid grid-cols-4 gap-4 px-4 items-center">
              <button
                onClick={() => openApp("education")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.education.gradientFrom} ${state.apps.education.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaGraduationCap size={28} className="text-white" />
                  </div>
                </div>
              </button>
              <button
                onClick={() => openApp("settings")}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${state.apps.settings.gradientFrom} ${state.apps.settings.gradientTo} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                  <div className="relative z-10">
                    <FaCog size={28} className="text-white" />
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
            </div>
          )}

          {/* Home Indicator */}
          {!state.currentApp && (
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/50 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileView;

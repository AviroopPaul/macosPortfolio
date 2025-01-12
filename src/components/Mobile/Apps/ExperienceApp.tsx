import React, { useState } from "react";
import { FaBriefcase, FaCalendar, FaChevronDown } from "react-icons/fa";

const ExperienceApp: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: "Software Development Engineer 1",
      company: "Think41",
      period: "July 2024 - Present",
      summary:
        "Core team member working on Conversational AI and automation workflows. Tech stack: Django, FastAPI, Rust, Spring Boot, React.js, Next.js, PostgreSQL, MongoDB.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGsC2cDNe68Pw/company-logo_200_200/company-logo_200_200/0/1718175225079/think41_logo?e=2147483647&v=beta&t=bqhY8WjuoC4u_z_fLllhB40W4nBXiRKMCfWaeX8UQNc",
    },
    {
      role: "Software Engineering Intern",
      company: "Nokia Networks",
      period: "Aug 2023 - June 2024",
      summary:
        "Developed Django APIs and React.js components for database automation. Worked with Docker, Kubernetes, and various database technologies.",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wrM2-YuHU_VCgYOuWmgeS_ncXHN3l4Ad3g&s",
    },
  ];

  return (
    <div className="h-screen pb-16 bg-black text-white p-4">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 transition-all duration-300 ease-in-out hover:bg-white/15"
          >
            <div
              className="cursor-pointer select-none"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="flex justify-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  className="w-auto h-16 object-contain rounded-md p-1"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold flex items-center justify-center">
                  <FaBriefcase className="mr-2 text-blue-400" />
                  {exp.role}
                </h3>
                <div className="flex items-center justify-center text-sm text-white/80">
                  <FaCalendar className="mr-1 text-blue-400" />
                  {exp.period}
                </div>
                <div className="text-white/90 font-medium text-center">
                  {exp.company}
                </div>
                <div className="flex justify-center mt-2">
                  <FaChevronDown
                    className={`text-blue-400 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 text-sm text-white/80 border-t border-white/20 pt-4 px-2">
                <div className="bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                  {exp.summary}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceApp;

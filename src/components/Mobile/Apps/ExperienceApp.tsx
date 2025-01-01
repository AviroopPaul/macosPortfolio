import React from "react";
import { FaBriefcase, FaCalendar } from "react-icons/fa";

const experiences = [
  {
    role: "Software Development Engineer 1",
    company: "Think41",
    period: "July 2024 - Present",
    description:
      "Led development of key features in React.js and Node.js, implemented microservices architecture for scalable solutions, and optimized database queries improving performance by 40%.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGsC2cDNe68Pw/company-logo_200_200/company-logo_200_200/0/1718175225079/think41_logo?e=2147483647&v=beta&t=bqhY8WjuoC4u_z_fLllhB40W4nBXiRKMCfWaeX8UQNc",
  },
  {
    role: "Software Engineering Intern",
    company: "Nokia Networks",
    period: "Aug 2023 - June 2024",
    description:
      "Developed and maintained network management applications, collaborated with senior engineers on system architecture, and implemented automated testing reducing bug detection time by 60%.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wrM2-YuHU_VCgYOuWmgeS_ncXHN3l4Ad3g&s",
  },
];

const ExperienceApp: React.FC = () => {
  return (
    <div className="h-screen pb-16 bg-black text-white p-4">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white/10 rounded-xl p-4 space-y-4">
            <div className="flex justify-center">
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                className="w-auto h-16 object-contain rounded-md p-1"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold flex items-center justify-center">
                <FaBriefcase className="mr-2" />
                {exp.role}
              </h3>
              <div className="flex items-center justify-center text-sm text-white/80">
                <FaCalendar className="mr-1" />
                {exp.period}
              </div>
              <div className="text-white/90 font-medium text-center">
                {exp.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceApp;

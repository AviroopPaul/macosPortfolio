import React from "react";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaMobile,
} from "react-icons/fa";

const skills = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    color: "text-blue-400",
    icon: FaDesktop,
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "MySQL"],
    color: "text-green-400",
    icon: FaServer,
  },
  {
    name: "DevOps",
    items: ["Docker", "Google Cloud", "CI/CD", "Git"],
    color: "text-purple-400",
    icon: FaDatabase,
  },
];

const SkillsApp: React.FC = () => {
  return (
    <div className="h-screen pb-16 bg-black text-white p-4">
      <div className="space-y-6">
        {skills.map((category) => (
          <div key={category.name} className="bg-white/10 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <category.icon className={`mr-2 ${category.color}`} />
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 p-2 rounded-lg text-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsApp;

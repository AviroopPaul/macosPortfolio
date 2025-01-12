import React, { useState } from "react";
import Window from "../Window/Window";
import { FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../../data/experienceData";

interface ExperienceWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceWindow: React.FC<ExperienceWindowProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleYearClick = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  return (
    <Window title="Experience" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-900">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-700 p-4 bg-gray-800">
          <div className="flex items-center space-x-2 mb-6">
            <FaCalendarAlt className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-gray-200">Work Timeline</h2>
          </div>
          <div className="space-y-2">
            <div
              className={`text-base text-gray-400 cursor-pointer ${
                selectedYear === null ? "text-blue-400" : ""
              }`}
              onClick={() => setSelectedYear(null)}
            >
              Show All
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`text-base cursor-pointer ${
                  selectedYear === exp.period.split(" - ")[0]
                    ? "text-blue-400 font-bold"
                    : "text-gray-400"
                }`}
                onClick={() => handleYearClick(exp.period.split(" - ")[0])}
              >
                {exp.period}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="space-y-8">
            {experiences.map(
              (exp, index) =>
                (selectedYear === null ||
                  selectedYear === exp.period.split(" - ")[0]) && (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-3">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            className="w-12 h-12 object-contain bg-white rounded-md p-1"
                          />
                          <h3 className="text-xl font-semibold text-gray-200">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-blue-400 font-medium mt-1">
                          {exp.role}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-gray-300">
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.bulletPoints.map((point, i) => (
                          <li key={i}>
                            {point.text.split(" ").map((word, j) => (
                              <span
                                key={j}
                                className={
                                  point.highlights.includes(word)
                                    ? "text-blue-400"
                                    : ""
                                }
                              >
                                {word}{" "}
                              </span>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Window>
  );
};

export default ExperienceWindow;

import React from "react";
import { FaGraduationCap, FaCalendar } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    period: "2020 - 2024",
    details:
      "CGPA: 9.34/10\nRelevant Coursework: Data Structures, Algorithms, Web Development",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/1200px-KIIT_logo.svg.png",
  },
  {
    degree: "High School Diploma",
    school: "Delhi Public School, Ruby Park, Kolkata",
    period: "2018 - 2020",
    details: "Grade: 94.2%\nScience and Mathematics\nSchool Vice Captain",
    image: "https://www.dpsjhakri.com/images/dps_logo1.png",
  },
];

const EducationApp: React.FC = () => {
  return (
    <div className="h-screen pb-16 bg-black text-white p-4">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white/10 rounded-xl p-4 space-y-4">
            <div className="flex justify-center">
              <img
                src={edu.image}
                alt={`${edu.school} logo`}
                className="w-16 h-16 object-contain bg-white rounded-md p-1"
              />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <div className="text-white/90 font-medium">{edu.school}</div>
              <div className="flex items-center justify-center text-sm text-white/80">
                <FaCalendar className="mr-1" />
                {edu.period}
              </div>
            </div>
            <div className="text-sm text-white/70 whitespace-pre-line text-center">
              {edu.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationApp;

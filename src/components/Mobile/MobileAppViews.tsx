import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface MobileAppViewProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const MobileAppHeader: React.FC<{ title: string; onClose: () => void }> = ({
  title,
  onClose,
}) => (
  <div className="sticky top-0 bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center">
    <button onClick={onClose} className="text-blue-500">
      <FaArrowLeft size={20} />
    </button>
    <h1 className="text-lg font-semibold ml-4">{title}</h1>
  </div>
);

const MobileAppView: React.FC<MobileAppViewProps> = ({
  onClose,
  title,
  children,
}) => {
  return (
    <div className="h-full flex flex-col bg-white">
      <MobileAppHeader title={title} onClose={onClose} />
      <div className="flex-1 overflow-auto p-4">{children}</div>
    </div>
  );
};

export const SkillsApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="Skills" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Skills</h2>
      {/* Add your skills content here */}
    </div>
  </MobileAppView>
);

export const ExperienceApp: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => (
  <MobileAppView title="Experience" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Work Experience</h2>
      {/* Add your experience content here */}
    </div>
  </MobileAppView>
);

export const EducationApp: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => (
  <MobileAppView title="Education" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Education</h2>
      {/* Add your education content here */}
    </div>
  </MobileAppView>
);

export const ResumeApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="Resume" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">My Resume</h2>
      {/* Add your resume content here */}
    </div>
  </MobileAppView>
);

export const TerminalApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="Terminal" onClose={onClose}>
    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-full">
      <div>guest@portfolio ~ %</div>
      {/* Add your terminal content here */}
    </div>
  </MobileAppView>
);

export const ContactApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="Contact" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Me</h2>
      {/* Add your contact content here */}
    </div>
  </MobileAppView>
);

export const GithubApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="GitHub" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">GitHub Projects</h2>
      {/* Add your GitHub content here */}
    </div>
  </MobileAppView>
);

export const LinkedInApp: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <MobileAppView title="LinkedIn" onClose={onClose}>
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">LinkedIn Profile</h2>
      {/* Add your LinkedIn content here */}
    </div>
  </MobileAppView>
);

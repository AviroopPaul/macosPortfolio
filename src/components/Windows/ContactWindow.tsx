import React, { useState } from "react";
import Window from "../Window/Window";
import { FaPaperPlane, FaEnvelope, FaUser, FaComments } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface ContactWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactWindow: React.FC<ContactWindowProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "apavirooppaul10@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Window title="New Message" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full bg-[#2d2d2d]">
        <div className="border-b border-[#3a3a3a]">
          <div className="flex items-center px-4 py-2 border-b border-[#3a3a3a]">
            <span className="w-16 text-sm text-gray-400">From:</span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="flex-1 bg-transparent text-white text-sm outline-none"
            />
          </div>

          <div className="flex items-center px-4 py-2 border-b border-[#3a3a3a]">
            <span className="w-16 text-sm text-gray-400">To:</span>
            <span className="text-white text-sm">apavirooppaul10@gmail.com</span>
          </div>

          <div className="flex items-center px-4 py-2 border-b border-[#3a3a3a]">
            <span className="w-16 text-sm text-gray-400">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="flex-1 bg-transparent text-white text-sm outline-none"
            />
          </div>

          <div className="flex items-center px-4 py-2">
            <span className="w-16 text-sm text-gray-400">Subject:</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="flex-1 bg-transparent text-white text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex-1 p-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            className="w-full h-full bg-transparent text-white outline-none resize-none"
          />
        </div>

        <div className="p-4 border-t border-[#3a3a3a]">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md 
                      hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <FaPaperPlane className="w-4 h-4" />
            <span>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Sent!"
                : status === "error"
                ? "Error! Try again"
                : "Send"}
            </span>
          </button>
        </div>

        {status !== "idle" && (
          <div
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md 
                          ${
                            status === "success"
                              ? "bg-green-600"
                              : status === "error"
                              ? "bg-red-600"
                              : "bg-blue-600"
                          } text-white`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message sent!"
              : "Failed to send message"}
          </div>
        )}
      </div>
    </Window>
  );
};

export default ContactWindow;

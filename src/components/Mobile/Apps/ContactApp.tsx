import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactApp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
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
    <div className="h-screen bg-[#f2f2f7] dark:bg-black">
      {/* Navigation Bar */}
      <div className="bg-[#f8f8f8] dark:bg-[#1c1c1e] px-4 py-2 border-b border-[#c6c6c8] dark:border-[#38383a] flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          New Message
        </h1>
        <button
          onClick={() => handleSubmit()}
          disabled={status === "sending"}
          className="text-blue-500 dark:text-blue-400 disabled:opacity-50 flex items-center space-x-1 px-2 py-1 rounded-md active:bg-gray-200 dark:active:bg-gray-800"
        >
          <FaPaperPlane className="w-4 h-4" />
          <span className="text-sm font-medium">
            {status === "sending"
              ? "Sending"
              : status === "success"
              ? "Sent"
              : status === "error"
              ? "Error"
              : "Send"}
          </span>
        </button>
      </div>

      {/* Form */}
      <form className="flex flex-col h-[calc(100%-4rem)]">
        <div className="bg-white dark:bg-[#1c1c1e]">
          <div className="border-b border-[#c6c6c8] dark:border-[#38383a] px-4 py-2 flex items-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="From"
              required
              className="w-full bg-transparent text-black dark:text-white placeholder-gray-500"
            />
          </div>

          <div className="border-b border-[#c6c6c8] dark:border-[#38383a] px-4 py-2">
            <div className="text-gray-500">To: apavirooppaul10@gmail.com</div>
          </div>

          <div className="border-b border-[#c6c6c8] dark:border-[#38383a] px-4 py-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent text-black dark:text-white placeholder-gray-500"
            />
          </div>

          <div className="border-b border-[#c6c6c8] dark:border-[#38383a] px-4 py-2">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-transparent text-black dark:text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-[#1c1c1e] p-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full h-full bg-transparent text-black dark:text-white placeholder-gray-500 resize-none"
          />
        </div>

        {/* Status Message */}
        {status !== "idle" && (
          <div
            className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md
                       ${
                         status === "success"
                           ? "bg-green-500"
                           : status === "error"
                           ? "bg-red-500"
                           : "bg-blue-500"
                       } text-white`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message sent!"
              : "Failed to send message"}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactApp;

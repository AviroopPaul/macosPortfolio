import React, { useState } from 'react';
import Window from '../Window/Window';
import { FaPaperPlane, FaEnvelope, FaUser, FaComments } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface ContactWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactWindow: React.FC<ContactWindowProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'aviroop.paul@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Window title="Contact" isOpen={isOpen} onClose={onClose}>
      <div className="flex h-full bg-gray-50">
        <div className="w-64 bg-blue-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-blue-100">
            I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="w-5 h-5" />
              <span>aviroop.paul@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <FaUser className="w-4 h-4" />
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <FaEnvelope className="w-4 h-4" />
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-1">
                <FaComments className="w-4 h-4" />
                <span>Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <FaPaperPlane className="w-4 h-4" />
              <span>
                {status === 'sending' ? 'Sending...' : 
                 status === 'success' ? 'Sent!' : 
                 status === 'error' ? 'Error! Try again' : 
                 'Send Message'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </Window>
  );
};

export default ContactWindow;
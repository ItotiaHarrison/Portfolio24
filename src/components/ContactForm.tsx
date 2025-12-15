import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        "contact_service", 
        "contact_form",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Harrison Itotia",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.log(error);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fintech-card">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Toaster position="top-right" />
        <div>
          <label className="block text-slate-300 font-mono text-sm mb-2 uppercase tracking-wider">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-slate-300 font-mono text-sm mb-2 uppercase tracking-wider">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
            placeholder="Email address"
          />
        </div>
        <div>
          <label className="block text-slate-300 font-mono text-sm mb-2 uppercase tracking-wider">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
            placeholder="Write your message here"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-slate-900 px-6 py-3 rounded-lg hover:bg-green-400 transition-colors disabled:bg-green-600 disabled:cursor-not-allowed flex items-center justify-center font-serif font-semibold"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

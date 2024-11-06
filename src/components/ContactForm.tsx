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
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster position="top-right" />
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
          placeholder="Email address"
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="transition ease-in-out rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
          placeholder="Write your message here"
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center"
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
  );
};

export default ContactForm;

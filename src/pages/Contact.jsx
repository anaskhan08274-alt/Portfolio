import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://portfolio-backend-mhpnhy84c-anas-projects-8cb9ba05.vercel.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      // form reset
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* Contact Info (same as yours, untouched) */}
          <div className="space-y-8">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-400">
                  Lucknow, Begariya Dubagga
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">
                  anaskhan08274@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-purple text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400">+91 9116244250</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Follow Me</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="icon-btn">
                  <FaGithub />
                </a>
                <a href="#" className="icon-btn text-blue">
                  <FaLinkedin />
                </a>
                <a href="#" className="icon-btn text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="icon-btn text-pink">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

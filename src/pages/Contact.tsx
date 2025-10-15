import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Import images
import bannerImage from "@/assets/conact.jpg";
import mihubLogo from "@/assets/Picture1.png";

const Contact: React.FC = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setChatVisible(!chatVisible);
  const closeChat = () => setChatVisible(false);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, { text: userInput, sender: "user" }];
    setChatMessages(newMessages);

    // Reset input
    setUserInput("");

    // Generate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setChatMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  const getBotResponse = (input: string) => {
    const text = input.toLowerCase();
    if (text.includes("address")) {
      return "Our address is 2696 James Watt Cres, Mafikeng Industrial, Mahikeng, 2745.";
    } else if (text.includes("email")) {
      return "You can reach us at info@mafihub.co.za.";
    } else if (text.includes("phone")) {
      return "You can call us at 081 579 7317.";
    } else if (text.includes("hours")) {
      return "Our business hours are Monday to Friday, 8:00 AM to 16:30 PM.";
    } else {
      return "I’m sorry, I didn’t understand that. Can you please rephrase?";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner */}
<section className="banner relative h-60 w-full">
  <img
    src={bannerImage}
    alt="Contact Banner"
    className="object-cover w-full h-full"
  />
  <div className="banner-overlay absolute inset-0 bg-black/40"></div>

  {/* Banner content */}
  <div className="banner-content absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
      Talk To Us
    </h1>
    <p className="text-white/90 mt-2 text-lg md:text-xl">
      Get in touch with our team
    </p>
  </div>
</section>


      {/* Contact Section */}
      <div className="contact-wrapper flex flex-col lg:flex-row max-w-6xl mx-auto px-4 py-20 gap-12">
        {/* Left: Contact Info */}
        <div className="contact-info-card text-center lg:text-left flex-1 bg-white/10 glass-card-strong p-8 rounded-lg shadow-lg">
          <img
            src={mihubLogo}
            alt="MIHub Logo"
            className="mx-auto lg:mx-0 mb-6"
            style={{ maxWidth: "150px" }}
          />
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            <strong>Address:</strong> 2696 James Watt Cres, Mafikeng, Industrial
            Site
          </p>
          <p>
            <strong>Email:</strong> info@mafihub.co.za
          </p>
          <p>
            <strong>Phone:</strong> 081 579 7317
          </p>
          <p>
            <strong>Hours:</strong> Monday - Friday: 8:00 AM - 16:30 PM
          </p>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-card flex-1 bg-white/10 glass-card-strong p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-2">Chat To Us</h1>
          <p className="mb-6">
            We’d love to hear from you! Fill out the form and our team will get
            back to you promptly.
          </p>
          <form
            id="contactForm"
            method="POST"
            action="contact_process.php"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-md bg-white/10 border border-white/20"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-md bg-white/10 border border-white/20"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-white/10 border border-white/20"
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              required
              className="w-full p-3 rounded-md bg-white/10 border border-white/20"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Chatbot */}
      <div>
        <div
          className="chatbot fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full cursor-pointer shadow-lg"
          onClick={toggleChat}
        >
          💬
        </div>

        {chatVisible && (
          <div className="chatbot-window fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="chatbot-header bg-primary text-white p-3 flex justify-between items-center">
              MDIHub Chatbot
              <span className="cursor-pointer" onClick={closeChat}>
                ✖
              </span>
            </div>
            <div className="chatbot-messages p-3 flex-1 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "user" ? "text-right text-blue-600" : "text-left text-gray-800"
                  } mb-2`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input p-3 flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-2 border rounded"
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white px-3 rounded"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

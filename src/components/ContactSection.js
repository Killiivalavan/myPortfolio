import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const sendMessage = async () => {
    alert(`Sending message...\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Replace this with actual logic (e.g., API call)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <section id="contact" className="py-20 bg-[#1E1E1E] font-mono">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <span className="text-[#FF79C6]">async function</span>
          <h2 className="text-3xl font-mono ml-2 text-[#82AAFF]">contactMe</h2>
          <span className="text-white ml-2">() &#123;&#125;</span>
        </div>

        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-3 items-center justify-center bg-[#191A21] p-4 rounded-lg border border-[#454368]">
            <a href="mailto:killiivalavan.inbox@gmail.com" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300 flex items-center gap-2">
              <span className="text-[#FF79C6]">const</span>
              <span className="text-[#82AAFF]">email</span>
              <span className="text-white">=</span>
              <span>"killiivalavan.inbox@gmail.com";</span>
            </a>
            <div className="h-4 w-px bg-[#454368] mx-2"></div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/killiivalavan/" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
                <span className="text-[#FF79C6]">import</span> LinkedIn
              </a>
              <a href="https://github.com/Killiivalavan" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
                <span className="text-[#82AAFF]">git</span> clone
              </a>
              <a href="https://x.com/killiivalavan" target="_blank" rel="noopener noreferrer" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
                <span className="text-[#FF79C6]">@</span>Twitter
              </a>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-[#2D2B55] rounded-lg overflow-hidden shadow-lg border border-[#454368]">
            <div className="bg-[#191A21] px-4 py-2 flex items-center border-b border-[#454368]">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-[#F8F8F2] opacity-70 text-sm">message.js</span>
            </div>
            <div className="p-6 max-w-xl mx-auto w-full">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="group">
                  <span className="text-[#FF79C6] block mb-2">const</span>
                  <input
                    type="text"
                    id="name"
                    placeholder='name = ""'
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-[#191A21] text-[#F8F8F2] border border-[#454368] focus:border-[#B392F0] focus:outline-none transition-colors duration-300 placeholder-[#6272A4]"
                  />
                </div>
                <div className="group">
                  <span className="text-[#FF79C6] block mb-2">const</span>
                  <input
                    type="email"
                    id="email"
                    placeholder='email = ""'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-[#191A21] text-[#F8F8F2] border border-[#454368] focus:border-[#B392F0] focus:outline-none transition-colors duration-300 placeholder-[#6272A4]"
                  />
                </div>
                <div className="group">
                  <span className="text-[#FF79C6] block mb-2">const</span>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder='message = ""'
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-[#191A21] text-[#F8F8F2] border border-[#454368] focus:border-[#B392F0] focus:outline-none transition-colors duration-300 placeholder-[#6272A4]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#191A21] text-[#F8F8F2] px-6 py-3 rounded-md hover:bg-[#2D2B55] transition-all duration-300 border border-[#454368] hover:border-[#B392F0] mt-4"
                >
                  <span className="text-[#FF79C6]">await</span>
                  <span className="text-[#82AAFF] ml-2">sendMessage()</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
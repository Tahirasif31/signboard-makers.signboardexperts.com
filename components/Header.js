"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Signboard Experts */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">✧</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Signboard Experts
              </h1>
              <p className="text-sm text-blue-600 font-medium">
                Dubai's Trusted Signage Company
              </p>
            </div>
          </div>

          {/* Call Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+971552282608"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>📞</span>
              <span>Call Us: +971 55 228 2608</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <a
              href="tel:+971552282608"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition duration-300 text-sm flex items-center space-x-1"
            >
              <span>📞</span>
              <span>Call</span>
            </a>
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">🪧</span>
                Our Signage Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">⚙️</span>
                Our Process
              </button>
              <button
                onClick={() => scrollToSection("types")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">📋</span>
                Sign Board Types
              </button>
              <button
                onClick={() => scrollToSection("sectors")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">🏢</span>
                Industries We Serve
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">🖼️</span>
                Project Gallery
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 border-b border-gray-100 flex items-center"
              >
                <span className="mr-2">❓</span>
                FAQ
              </button>

              <div className="pt-4 space-y-3">
                <a
                  href="tel:+971552282608"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition duration-300"
                >
                  📞 Call Signboard Experts: +971 55 228 2608
                </a>
                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-center py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition duration-300"
                >
                  📋 Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Free Consultation Banner for Mobile */}
      <div className="md:hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-sm font-medium">
            🏆 12+ Years Experience • Free Consultation
          </span>
          <a
            href="tel:+971552282608"
            className="text-white font-bold text-sm hover:text-yellow-200 transition duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

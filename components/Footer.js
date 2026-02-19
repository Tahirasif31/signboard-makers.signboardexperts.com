export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t-2 border-blue-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✧</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Signboard Experts</h3>
                <p className="text-blue-400 text-sm font-medium">
                  Dubai's Trusted Signage Company
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Dubai's premier signboard company combining creative design with
              precision engineering. We specialize in custom indoor and outdoor
              signage, 3D letters, LED sign boards, and comprehensive branding
              solutions for businesses across the UAE. With over 12 years of
              experience navigating Dubai's regulatory landscape (DED, Dubai
              Municipality) and climate challenges, we deliver signage that
              lasts—and impresses.
            </p>
            <div className="mt-4 flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-blue-400 mr-1">🏆</span> 12+ Years
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-indigo-400 mr-1">✅</span> 500+ Projects
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>🪧</span>
                  <span>Our Signage Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>⚙️</span>
                  <span>Our Process</span>
                </a>
              </li>
              <li>
                <a
                  href="#types"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>📋</span>
                  <span>Sign Board Types</span>
                </a>
              </li>
              <li>
                <a
                  href="#sectors"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>🏢</span>
                  <span>Industries We Serve</span>
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>🖼️</span>
                  <span>Project Gallery</span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                >
                  <span>❓</span>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Signage Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">
              Our Signage Solutions
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>3D Acrylic & Metal Letters</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Illuminated LED Sign Boards</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Shop Front & Fascia Signage</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Reception & Logo Walls</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Wayfinding & Directional Signs</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>ACP & Stainless Steel Signage</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Glass Frosting & Wall Graphics</span>
              </li>
              <li className="text-gray-400 flex items-center space-x-2">
                <span className="text-blue-400">•</span>
                <span>Freestanding & Pylon Signs</span>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiry */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href="tel:+971552282608"
                  className="text-lg font-bold hover:text-blue-400 transition duration-300 block"
                >
                  📞 +971 55 228 2608
                </a>
                <p className="text-gray-400 text-sm">
                  Free Consultation & Quote
                </p>
              </div>
              <div>
                <p className="text-gray-400">Serving All Dubai Areas:</p>
                <p className="text-sm text-gray-400">
                  Dubai Marina, JLT, Downtown, Business Bay, DIFC, Deira, Bur
                  Dubai, Al Barsha, Jumeirah, Palm Jumeirah, Sheikh Zayed Road,
                  Al Quoz, Silicon Oasis, JVC, Motor City, Dubai South, and all
                  commercial & residential communities.
                </p>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="tel:+971552282608"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 flex-1 text-center"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📞</span>
                    <span className="text-sm font-medium">Call Now</span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 p-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition duration-300 flex-1 text-center"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📋</span>
                    <span className="text-sm font-medium">Get Quote</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Guarantee Strip */}
        <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
            <h5 className="font-bold text-white mb-2 flex items-center">
              <span className="mr-2">⏱️</span> Project Timeline
            </h5>
            <p className="text-gray-400 text-sm">
              Fast Turnaround: 3–7 Days for Most Signs
            </p>
            <p className="text-gray-400 text-sm">
              Same-Day Consultation & Site Survey Available
            </p>
            <p className="text-gray-400 text-sm">
              Emergency Rush Service for Urgent Projects
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
            <h5 className="font-bold text-white mb-2 flex items-center">
              <span className="mr-2">🛡️</span> Our Guarantee
            </h5>
            <p className="text-gray-400 text-sm">
              Workmanship Warranty on All Signage
            </p>
            <p className="text-gray-400 text-sm">
              Premium UV-Resistant Materials
            </p>
            <p className="text-gray-400 text-sm">
              Full DED & Dubai Municipality Approval Assistance
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
            <h5 className="font-bold text-white mb-2 flex items-center">
              <span className="mr-2">📞</span> Connect With Us
            </h5>
            <div className="flex space-x-3">
              <a
                href="tel:+971552282608"
                className="text-gray-400 hover:text-blue-400 transition duration-300 bg-gray-700 p-2 rounded-lg"
              >
                <span className="text-lg">📞 Call</span>
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-yellow-400 transition duration-300 bg-gray-700 p-2 rounded-lg"
              >
                <span className="text-lg">📋 Quote</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Free consultation & 3D design mockup
            </p>
          </div>
        </div>

        {/* Copyright & SEO Text */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Signboard Experts – Dubai's Premier
            Signage Company. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            We specialize in custom signboard fabrication, 3D acrylic and metal
            letters, LED illuminated signs, shop front signage, reception logo
            walls, wayfinding systems, and comprehensive branding solutions for
            businesses throughout Dubai and the UAE. Our expert team handles
            everything from concept and DED/Dubai Municipality approvals to
            precision manufacturing and professional installation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-gray-500 text-sm">
            <span className="flex items-center">
              <span className="text-blue-400 mr-1">📞</span> +971 55 228 2608
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="text-blue-400 mr-1">📍</span> Serving All Dubai
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="text-blue-400 mr-1">🛡️</span> 12+ Years
              Experience
            </span>
            <span>•</span>
            <span className="flex items-center">
              <span className="text-blue-400 mr-1">🔧</span> Precision
              Craftsmanship
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

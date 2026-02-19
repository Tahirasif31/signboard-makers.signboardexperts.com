import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4 border border-blue-400">
              <p className="font-semibold">
                🏆 12+ Years of UAE Expertise in Signage Solutions
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-yellow-300">Signboard Experts</span> –
              Premier Signage & Sign Board Company in Dubai
            </h1>

            <p className="text-xl mb-8 text-white bg-blue-800/60 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-400/50 shadow-2xl">
              <strong className="text-yellow-300">
                Dubai’s Authority in Custom Signage Solutions
              </strong>{" "}
              | Quality You Can See, Durability You Can Trust
            </p>

            <p className="text-lg mb-8 text-blue-100">
              Welcome to <strong>Signboard Experts</strong>, your premier
              destination for high-impact business signage in Dubai. We are not
              just another signboard company; we are strategic partners in your
              brand’s visual identity. With over{" "}
              <strong>12+ years of specialized experience</strong> in the UAE
              market, we understand that your signage is often the first
              handshake with your potential customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="tel:+971552282608"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                📞 Call Us: +971 55 228 2608
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 text-center shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 border-white"
              >
                📋 Get Free Consultation
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-400/30 shadow-2xl">
              <div className="flex items-center bg-yellow-400/20 rounded-lg px-4 py-3 border border-yellow-400/50 flex-1">
                <span className="text-yellow-300 mr-3 text-lg">⭐</span>
                <div>
                  <span className="font-bold text-white text-base block">
                    4.9/5 Client Rating
                  </span>
                  <span className="text-yellow-200 text-sm">
                    500+ Projects Delivered
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-green-400/20 rounded-lg px-4 py-3 border border-green-400/50 flex-1">
                <span className="text-green-300 mr-3 text-lg">🚀</span>
                <div>
                  <span className="font-bold text-white text-base block">
                    Fast Turnaround
                  </span>
                  <span className="text-green-200 text-sm">
                    From Concept to Installation
                  </span>
                </div>
              </div>
              <div className="flex items-center bg-blue-400/20 rounded-lg px-4 py-3 border border-blue-400/50 flex-1">
                <span className="text-blue-300 mr-3 text-lg">🛡️</span>
                <div>
                  <span className="font-bold text-white text-base block">
                    Full Warranty
                  </span>
                  <span className="text-blue-200 text-sm">
                    Materials & Workmanship
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-400/50 shadow-2xl">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/hero.png" // Replace with actual image
                  alt="Modern storefront signage in Dubai by Signboard Experts"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">
                    Custom Signage for Every Business
                  </p>
                  <p className="text-yellow-300">
                    Dubai’s Trusted Signboard Company
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-2xl border-2 border-white">
                <p className="font-bold text-sm md:text-base">
                  🏆 12+ Years of Excellence
                </p>
              </div>
            </div>

            <div className="absolute -right-4 top-8 bg-yellow-400 text-gray-900 rounded-2xl p-4 shadow-2xl border-2 border-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm font-bold">Projects</div>
                <div className="text-xs">Completed in Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const steps = [
  {
    step: "1",
    title: "Consultation & Site Survey",
    description:
      "It all starts with a conversation. We discuss your vision, budget, and timeline. Our technical team then visits your site to take precise measurements, assess the installation environment, and identify any structural considerations. This on-the-ground insight is crucial for a perfect fit.",
    features: [
      "On-site measurements and assessment",
      "Discussion of design preferences and budget",
      "Identification of structural requirements",
    ],
    image: "/1.png",
  },
  {
    step: "2",
    title: "Design & Visualization",
    description:
      "Our in-house graphic designers get to work, creating high-resolution digital mockups. We present you with multiple design concepts, material suggestions, and lighting options, allowing you to visualize exactly how your signboard for business will look in its intended setting. We iterate based on your feedback until the design is perfect.",
    features: [
      "Multiple design concepts",
      "Material and lighting recommendations",
      "3D digital mockups for approval",
    ],
    image: "/sign-3.jpg",
  },
  {
    step: "3",
    title: "Fabrication & Precision Engineering",
    description:
      "Once the design is approved, our fabrication team takes over. Using state-of-the-art CNC routers, laser cutters, and large-format printers, we manufacture your signage with meticulous attention to detail. We source only the highest quality materials—acrylic, aluminum composite panels (ACP), stainless steel, and UV-resistant vinyls—to ensure longevity.",
    features: [
      "Precision CNC cutting and routing",
      "High-quality materials (acrylic, ACP, stainless steel)",
      "UV-resistant vinyls and finishes",
    ],
    image: "/best-price.jpg",
  },
  {
    step: "4",
    title: "Professional Installation",
    description:
      "A sign is only as good as its installation. Our experienced installation team handles the mounting process with utmost care and safety. We ensure your signage is perfectly leveled, securely fixed, and electrically connected (for LED signs) to the highest standards.",
    features: [
      "Secure and level mounting",
      "Electrical connections for illuminated signs",
      "Safety protocols followed",
    ],
    image: "/tab-12.jpg",
  },
  {
    step: "5",
    title: "Final Handover & Support",
    description:
      "We walk you through the finished installation, ensuring you are completely satisfied. We also provide guidance on maintenance to keep your signage looking brand new for years to come.",
    features: [
      "Client walkthrough and satisfaction check",
      "Maintenance tips and support",
      "Warranty coverage",
    ],
    image: "/tab-11.jpg",
  },
];

export default function Process() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Process: From Concept to Completion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As expert signage makers, we follow a streamlined, client-focused
            process to ensure a stress-free experience and a flawless final
            product.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg mr-6">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-green-500 text-lg mt-1">✓</span>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={step.image}
                    alt={`Signage process step ${step.step}: ${step.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: "⏳",
    title: "12+ Years of UAE Expertise",
    description:
      "We have deep experience navigating the local business landscape, regulations, and climate.",
  },
  {
    icon: "🛠️",
    title: "Expert Craftsmanship",
    description:
      "Our team comprises seasoned professionals—designers, engineers, and installers—who are passionate about their craft.",
  },
  {
    icon: "🏅",
    title: "Premium Quality Materials",
    description:
      "All materials are sourced from trusted suppliers and tested for UV resistance, colorfastness, and structural integrity to withstand the UAE climate.",
  },
  {
    icon: "🔄",
    title: "End-to-End Service",
    description:
      "From securing initial approvals to final installation, we manage the entire project lifecycle.",
  },
  {
    icon: "⏱️",
    title: "Timely Delivery & Installation",
    description:
      "We respect your timeline and work efficiently to deliver on schedule, every time.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    description:
      "Transparent, competitive pricing tailored to your budget, ensuring the best value for your investment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Signboard Experts as Your Trusted Signboard Company?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a city full of choices, here's why businesses consistently choose
            us as their preferred signage maker.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

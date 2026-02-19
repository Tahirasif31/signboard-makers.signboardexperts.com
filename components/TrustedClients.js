const clients = [
  "Emaar Properties",
  "Nakheel",
  "Al-Futtaim Group",
  "Majid Al Futtaim",
  "Damac Properties",
  "Plus numerous SMEs and retail chains across the UAE",
];

export default function TrustedClients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders Across the UAE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to have partnered with a diverse range of businesses,
            from fast-growing startups to established multinational
            corporations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-4 rounded-xl shadow-md border border-gray-200 text-gray-700 font-semibold"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

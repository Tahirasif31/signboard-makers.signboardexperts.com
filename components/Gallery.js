import Image from "next/image";

const projects = [
  {
    title: "The Downtown Boutique",
    description:
      "A stunning 4-meter tall illuminated lightbox using ACP and high-brightness LED modules, ensuring maximum visibility on Sheikh Zayed Road.",
    image: "/images/gallery-downtown.jpg",
  },
  {
    title: "Corporate HQ in DIFC",
    description:
      "An elegant reception logo wall featuring backlit 3D stainless steel letters mounted on a textured marble-look acrylic backdrop.",
    image: "/images/gallery-difc.jpg",
  },
  {
    title: "Al Wasl Retail Store",
    description:
      "A complete exterior and interior signage package including a projecting sign, window graphics, and acrylic wayfinding signs.",
    image: "/images/gallery-alwasl.jpg",
  },
  {
    title: "JLT Restaurant",
    description:
      "A custom-designed menu board and neon sign installation that became an Instagram-worthy feature for the venue.",
    image: "/images/gallery-jlt.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Project Gallery: A Glimpse at Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While every project is unique, here's a taste of the quality and
            range you can expect from Signboard Experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

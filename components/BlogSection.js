import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title:
      "How to Choose the Right Signboard Material for Dubai's Climate: Acrylic vs. Stainless Steel vs. ACP",
    description:
      "A detailed guide comparing the durability, appearance, and cost of different signboard materials specifically for Dubai's heat, humidity, and UV exposure.",
    category: "Materials",
    slug: "/blog/choose-right-signboard-material-dubai-climate", // Replace with actual blog URL
    image: "/b-5.png", // building materials
    imageAlt:
      "Selection of signboard materials including acrylic and metal samples",
  },
  {
    title:
      "The Complete Guide to LED Sign Boards for Businesses in Dubai: Benefits, Costs, and Installation",
    description:
      "Explains the advantages of LED signage for night visibility, the different types (front-lit, backlit/halo-lit, lightbox), and what businesses should consider before installation.",
    category: "LED Signs",
    slug: "/blog/complete-guide-led-sign-boards-dubai-benefits-costs-installation",
    image: "/7.png", // city lights at night
    imageAlt: "Illuminated LED sign board on a building facade at night",
  },
  {
    title:
      "3D Acrylic vs. Stainless Steel Letters: Which is Best for Your Brand Identity?",
    description:
      "Compares the visual impact, durability, and applications of 3D acrylic letters versus stainless steel letters for corporate offices, retail stores, and luxury brands.",
    category: "3D Signage",
    slug: "/blog/3d-acrylic-vs-stainless-steel-letters-brand-identity-dubai",
    image: "/b-3.png", // 3D lettering on building
    imageAlt: "3D acrylic letter signage on modern office reception wall",
  },
  {
    title:
      "Navigating Dubai Municipality and DED Signage Rules: A Complete Business Owner's Guide",
    description:
      "Step-by-step breakdown of the approval process for business signage in Dubai, including required documents, timelines, and how to avoid common compliance mistakes.",
    category: "Regulations",
    slug: "/blog/navigating-dubai-municipality-ded-signage-rules",
    image: "/b-2.png", // travel documents
    imageAlt: "Dubai Municipality and DED approval documents for signage",
  },
  {
    title:
      "How Much Does Custom Signage Cost in Dubai? A Transparent Pricing Breakdown",
    description:
      "Provides estimated price ranges for different types of signage (acrylic boards, 3D letters, LED signs) based on size, material, complexity, and installation requirements.",
    category: "Cost Guide",
    slug: "/blog/custom-signage-cost-dubai-transparent-pricing-breakdown",
    image: "/14.png", // finance/numbers
    imageAlt: "Cost estimation and pricing breakdown for custom signage",
  },
  {
    title:
      "Indoor Signage Ideas: Elevate Your Office Reception and Brand Image with Custom Logo Walls",
    description:
      "Explores creative indoor signage options—acrylic walls, 3D letter installations, glass graphics—and how they enhance employee morale, client perception, and workplace aesthetics.",
    category: "Indoor Branding",
    slug: "/blog/indoor-signage-ideas-elevate-office-reception-brand-image",
    image: "/b-5.png", // office interior
    imageAlt:
      "Modern office reception with custom logo wall and indoor signage",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Insights from Signboard Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our expert guides on signage materials, costs, regulations,
            and design ideas tailored for Dubai businesses.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-blue-600 transition">
                  <Link href={post.slug} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {post.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={post.slug}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition group"
                >
                  Read Full Guide
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog" // Replace with actual blog index URL
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            View All Articles
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

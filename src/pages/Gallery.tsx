import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/hero-bg.jpg";

// Import gallery images from assets
import TelkomFuture from "@/assets/TelkomFuture.png";
import NEMISA from "@/assets/NEMISA.jpg";
import SmartCity from "@/assets/SmartCity.jpeg";
import TelkomLearn from "@/assets/TelkomLearn.jpeg";
import SmartServices from "@/assets/SmartServices.jpeg";

const galleryImages = [
  {
    src: TelkomFuture,
    title: "Telkom Future Makers Hackathon 2021",
    desc: "MDiHub in partnership with Telkom Futuremakers",
    category: "hackathon",
    link: "https://www.google.com/imgres?q=telkom%20future%20makers%20MDiHub"
  },
  {
    src: NEMISA,
    title: "NEMISA Datathon 2021",
    desc: "MDiHub in partnership with NEMISA",
    category: "hackathon",
    link: "https://www.google.com/imgres?q=nemisa%20datathon%202021"
  },
  {
    src: SmartCity,
    title: "Smart City Hackathon",
    desc: "In partnership with SIFA, AUDA-NEPAD, KfW, and the German Cooperation",
    category: "hackathon",
    link: "https://www.google.com/imgres?q=MDiHub%20smart%20city%20hackathon"
  },
  {
    src: TelkomLearn,
    title: "Telkom Learn Hackathon 2024",
    desc: "In partnership with Geekulcha and Telkom",
    category: "hackathon",
    link: "https://www.google.com/imgres?q=telkom%20learn%20hackathon%20north%20west"
  },
  {
    src: SmartServices,
    title: "Smart Services Hackathon",
    desc: "In partnership with MICT SETA, INSETA, and Bakgatlha Ba Kgafela",
    category: "hackathon",
    link: "https://drive.google.com/drive/folders/example-smartservices"
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => filter === "all" || img.category === filter
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with background image */}
      <section
        className="hero py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container mx-auto px-4 text-center bg-black bg-opacity-50 py-12 rounded">
          <h2 className="text-4xl font-bold mb-4">Our Past Events Gallery</h2>
          <p className="text-lg">
            Explore the exciting events, hackathons, and site visits that have shaped MIHub's journey
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Event Gallery</h2>
        <div className="flex gap-4 mb-6 flex-wrap justify-center">
          {["all", "hackathon", "site-visit", "workshop"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded ${
                filter === cat ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {cat === "all" ? "All Events" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded overflow-hidden shadow-lg group relative"
              onClick={() => setModalImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 transition-opacity duration-500">
                <h3 className="font-bold text-white">{img.title}</h3>
                <p className="text-gray-200">{img.desc}</p>
              </div>
              <a
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View More Images
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <span
            className="absolute top-4 right-6 text-white text-3xl cursor-pointer"
            onClick={() => setModalImage(null)}
          >
            &times;
          </span>
          <img src={modalImage} alt="Gallery" className="max-h-[90%] max-w-[90%] rounded" />
        </div>
      )}

      {/* Newsletter Section */}
      <section className="newsletter py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated on MIHub Events</h3>
          <p className="mb-4 text-gray-700">
            Subscribe to our newsletter to receive announcements about upcoming events, workshops, and innovation programs.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email for newsletter subscription"
              className="p-2 border rounded w-full md:w-auto"
            />
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

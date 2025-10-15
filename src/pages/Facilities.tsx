import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import receptionBg from "@/assets/Reception.jpg";

// All images for slideshows
import img1 from "@/assets/WhatsApp Image 2025-08-21 at 11.11.18_f913af4d.jpg";
import img2 from "@/assets/WhatsApp Image 2025-08-21 at 11.11.18_6022b18a.jpg";
import img3 from "@/assets/WhatsApp Image 2025-08-21 at 11.11.17_c38d34e7.jpg";
import img4 from "@/assets/WhatsApp Image 2025-08-21 at 11.11.17_66a6064c.jpg";
import img5 from "@/assets/WhatsApp Image 2025-08-21 at 11.11.17_15c21ce7.jpg";
import img6 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.59_3010815a.jpg";
import img7 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.59_09fe7627.jpg";
import img8 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.59_6ff25f6f.jpg";
import img9 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.58_cd1b340e.jpg";
import img10 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.58_39f83ceb.jpg";
import img11 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.58_5d57d4dc.jpg";
import img12 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.58_4f9fb4f8.jpg";
import img13 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.57_9b0483ba.jpg";
import img14 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.56_d0000db9.jpg";
import img15 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.56_2075a2b7.jpg";
import img16 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.56_6a8367ea.jpg";
import img17 from "@/assets/WhatsApp Image 2025-08-21 at 11.09.55_d928e625.jpg";

import "animate.css";

const Facilities = () => {
  // States for modals
  const [seeMoreOpen, setSeeMoreOpen] = useState(false);
  const [bookNowOpen, setBookNowOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Distribute images for 7 cards
  const facilityImages = [
    [img1, img2, img3],
    [img4, img5, img6],
    [img7, img8, img9],
    [img10, img11],
    [img12, img13],
    [img14, img15],
    [img16, img17],
  ];

  const zones = [
    "Makerspace",
    "VR Space",
    "Auditorium",
    "Meeting Room",
    "Boardroom",
    "Co-Working Space",
    "Landing Office Space",
  ];

  // Additional images for See More popup (could be same as slideshow or extended)
  const additionalImages = facilityImages.map((imgs) => [...imgs]);

  // Booking info for Book Now popup
  const bookingInfo = [
    { contact: "info@mdihub.co.za", price: "R500/hr" },
    { contact: "vr@mdihub.co.za", price: "R400/hr" },
    { contact: "auditorium@mdihub.co.za", price: "R800/hr" },
    { contact: "meeting@mdihub.co.za", price: "R300/hr" },
    { contact: "boardroom@mdihub.co.za", price: "R350/hr" },
    { contact: "cowork@mdihub.co.za", price: "R250/hr" },
    { contact: "landing@mdihub.co.za", price: "R600/hr" },
  ];

  // Slideshow effect
  useEffect(() => {
    const slideshows = document.querySelectorAll(".slideshow-container");
    slideshows.forEach((slideshow) => {
      const slides = (slideshow as HTMLElement).querySelectorAll(".slide");
      let index = 0;
      setInterval(() => {
        slides.forEach((slide, i) => {
          (slide as HTMLElement).style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
      }, 2500);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-white font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[600px] w-full text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            background: `url(${receptionBg}) no-repeat center center / cover`,
          }}
        ></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Facilities</h1>
          <p className="text-xl text-gray-200 mb-6">
            Transforming North West Province with Innovation and Technology
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            MDiHub offers state-of-the-art facilities designed to foster
            innovation and collaboration in the North West Province. Our spaces
            include modern co-working areas, fully equipped training rooms,
            high-speed internet access, and prototyping labs with the latest
            hardware and software tools. Members and visitors can leverage these
            facilities for workshops, hackathons, incubation programs, and
            hands-on projects, creating an environment where ideas turn into
            real-world solutions.
          </p>
        </div>
      </section>

      {/* SPECIALIZED ZONES */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-yellow-400">Specialized Zones</h2>
        </div>

        <div className="grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {zones.map((title, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-500"
            >
              {/* Slideshow */}
              <div className="slideshow-container relative w-full h-56 overflow-hidden">
                {(facilityImages[index] || []).map((img, num) => (
                  <div key={num} className="slide absolute inset-0 hidden">
                    <img
                      src={img}
                      alt={`${title} ${num + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">{title}</h3>
                <p className="text-gray-300 mb-6">
                  Explore modern, collaborative, and high-tech environments designed for innovation and growth.
                </p>

                <div className="flex gap-4">
                  <button
                    className="see-more-btn relative overflow-hidden h-14 w-44 rounded-md bg-neutral-900 font-extrabold text-gray-100 hover:bg-sky-700 duration-300 group"
                    onClick={() => {
                      setCurrentCardIndex(index);
                      setSeeMoreOpen(true);
                    }}
                  >
                    <p className="z-10 absolute bottom-2 left-3">See more</p>
                  </button>

                  <button
                    className="book-now-btn relative overflow-hidden h-14 w-44 rounded-md bg-yellow-500 font-extrabold text-gray-900 hover:bg-yellow-600 duration-300 group"
                    onClick={() => {
                      setCurrentCardIndex(index);
                      setBookNowOpen(true);
                    }}
                  >
                    <p className="z-10 absolute bottom-2 left-3">Book Now</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* See More Modal */}
      {seeMoreOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-3xl w-full relative">
            <h3 className="text-2xl font-bold mb-4">{zones[currentCardIndex]} - More Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {additionalImages[currentCardIndex].map((img, idx) => (
                <img key={idx} src={img} alt={`${zones[currentCardIndex]} ${idx}`} className="w-full h-32 object-cover rounded-md"/>
              ))}
            </div>
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-800"
              onClick={() => setSeeMoreOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

     {/* See More Modal */}
{seeMoreOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 max-w-5xl w-full relative">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{zones[currentCardIndex]} - More Images</h3>
      <div className="flex gap-4 overflow-x-auto py-2">
        {additionalImages[currentCardIndex].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${zones[currentCardIndex]} ${idx}`}
            className="flex-shrink-0 w-80 h-60 object-cover rounded-md"
          />
        ))}
      </div>
      <button
        className="absolute top-3 right-3 text-2xl font-bold text-gray-800"
        onClick={() => setSeeMoreOpen(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}

{/* Book Now Modal */}
{bookNowOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{zones[currentCardIndex]} - Booking Info</h3>
      <p className="mb-2 text-gray-800">Contact: {bookingInfo[currentCardIndex].contact}</p>
      <p className="mb-4 text-gray-800">Price: {bookingInfo[currentCardIndex].price}</p>
      <button
        className="absolute top-3 right-3 text-2xl font-bold text-gray-800"
        onClick={() => setBookNowOpen(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Facilities;

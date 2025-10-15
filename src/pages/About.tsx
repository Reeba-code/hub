import { useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import facilityBg from "@/assets/facility-bg.jpg";
import videoFile from "@/assets/MDIHUB Mafikeng 4k.mov";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Particles from "react-tsparticles";  // <-- new
import { loadFull } from "tsparticles";      // <-- new

const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#FFD700" }, // gold particles
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1, direction: "none", random: true },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

const stats = [
  { label: "Projects Completed", value: 50 },
  { label: "Startups Supported", value: 95 },
  { label: "People Trained", value: 2361 },
  { label: "Community Partners", value: 30 },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition bg-white"
            >
              <div className="text-5xl font-bold text-yellow-500 mb-2">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Video Section */}
      <section className="relative w-full bg-[#0a192f] min-h-screen flex flex-col items-center justify-center pt-24">

      <ParticlesBackground />
      
        {/* Video Container */}
        <div className="w-full max-w-6xl h-[500px] md:h-[600px] relative rounded-lg overflow-hidden mx-auto">
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videoFile} type="video/mp4" />
          </video>

          {/* Buttons overlay */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 z-20">
            <button
              onClick={togglePlayPause}
              className="bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition"
            >
              <i
                className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}
                style={{ fontSize: "24px" }}
              ></i>
            </button>
            <button
              onClick={toggleMute}
              className="bg-black text-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <i
                className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`}
                style={{ fontSize: "24px" }}
              ></i>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            MDiHub Services
          </h1>
          <p className="text-lg mb-12 text-gray-700">
            Comprehensive support to enable enterprise growth, skills
            development, innovation, and smart infrastructure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-600">
              <div className="text-5xl mb-4 text-yellow-900">🏢</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                Enterprise Development
              </h3>
              <p className="text-yellow-950">
                Incubation Programme (Full), Product Development & Demonstrations, Business Shared Services (Administration, Networking, etc.), Advanced services (IP, Commercialisation, Access to specialised knowledge), Market Analysis & Linkages, Develop a New Business Pipeline.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-600">
              <div className="text-5xl mb-4 text-yellow-900">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                Future Skills Development
              </h3>
              <p className="text-yellow-950">
                Grassroot Innovation Development, Specialized Zones, Local & Global Resource Training, Partner Training Programmes, Incubation Training, Sector-based Training Programmes, Internship Programme (MICTSETA), CISCO Networking Academy, AWS re/Start Programme.
              </p>
            </div>

            <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 border border-yellow-600">
              <div className="text-5xl mb-4 text-yellow-900">💡</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-900">
                Technology & Product Showcase
              </h3>
              <p className="text-yellow-950">
                Technology/Product Showcase, Events & Hackathons, Partner Specialised Programmes, Sector-based Mentoring, National Exchange Programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <StatsSection />

      {/* Journey Section */}
      <section className="py-20 container mx-auto px-4">
  <h2 className="text-4xl font-bold mb-16 text-center text-black">
    Our Journey Through Time
  </h2>

  <div className="relative flex flex-col items-center">
    {[
      {
        year: "2020",
        title: "The Opening of MDiHub",
        description:
          "In 2020, the Mahikeng Digital Innovation Hub (MDiHub) officially opened its doors, marking the beginning of a transformative journey to drive digital innovation and entrepreneurship in the North West Province. The Hub was established to bridge the digital divide by providing access to technology, skills training, and innovation support for local communities.",
        link: "https://www.google.com/search?q=mafikeng-digital-innovation-hub-opening-2020&oq=mafikeng-digital-innovation-hub-opening-2020&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIHCAUQABjvBdIBBzQxMGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8",
      },
      {
        year: "2021",
        title: "Foundation & First Innovation Lab",
        description:
          "In 2021, MDiHub solidified its foundation by launching its first fully equipped innovation lab in Mahikeng. This milestone created an enabling environment for startups, students, and community innovators to collaborate, learn, and create solutions addressing local challenges through technology and creativity.",
        link: "https://www.gov.za/speeches/mafikeng-digital-innovation-hub-launched-north-west-2021",
      },
      {
        year: "2022",
        title: "Presidential Visit",
        description:
          "In 2022, MDiHub had the distinguished honor of hosting His Excellency President Cyril Ramaphosa. The visit underscored MDiHub’s national importance as a catalyst for inclusive economic development, youth empowerment, and innovation — aligning with South Africa’s Fourth Industrial Revolution (4IR) objectives.",
        link: "https://www.facebook.com/PresidencyZA/videos/president-cyril-ramaphosa-at-mafikeng-digital-innovation-hub-received-by-premier/415842743683315/",
      },
      {
        year: "2023",
        title: "Cisco Edge Centre Launch",
        description:
          "In 2023, MDiHub partnered with Cisco Networking Academy to launch the Cisco Edge Centre — a cutting-edge technology facility offering world-class training in networking, cybersecurity, and digital innovation. The centre empowers youth with globally recognized skills and strengthens regional digital transformation.",
        link: "https://www.itweb.co.za/article/cisco-opens-edge-centre-at-mahikeng-digital-innovation-hub/nWJadMba4r37",
      },
      {
        year: "2024",
        title: "Mafikeng Digital Innovation Hub Future Skills Programme (SIFA Participation)",
        description:
          "In 2024, MDiHub participated in the Skills Initiative for Africa (SIFA), a programme initiated by the African Union, implemented by AUDA-NEPAD, and financed by the European Union and Germany through KfW. The partnership focused on enhancing digital and entrepreneurial skills across Africa, with MDiHub delivering training, innovation challenges, and mentorship to empower youth and strengthen the continent’s innovation ecosystem.",
        link: "https://www.facebook.com/SIFAAfrica/posts/through-auda-nepads-skills-initiative-for-africa-20-youth-from-mafikeng-digital-/1210584961090075/",
      },      
      {
        year: "2025",
        title: "MDiHub Re-Launch – 16 October 2025",
        description:
          "On 16 October 2025, MDiHub was officially re-launched in a ceremony graced by the Honourable Stella Ndabeni-Abrahams, Minister of Small Business Development. The relaunch marked a new era for MDiHub with expanded programs, innovation clusters, and partnerships focusing on smart infrastructure, agritech, renewable energy, and digital entrepreneurship — reaffirming the Hub’s role as a driver of inclusive growth and technological progress in the North West Province.",
        link: "https://www.gov.za/speeches/minister-stella-ndabeni-abrahams-relaunches-mahikeng-digital-innovation-hub-2025",
      },
    ].map((item, i, arr) => (
      <div key={i} className="flex flex-col items-center relative mb-16">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10 animate-bounce">
          {item.year}
        </div>

        {i !== arr.length - 1 && (
          <div className="flex flex-col items-center mt-2">
            <div className="w-4 h-4 bg-primary rounded-full mb-2 animate-pulse"></div>
            <div className="w-6 h-6 bg-primary rounded-full mb-2 animate-pulse"></div>
            <div className="w-4 h-4 bg-primary rounded-full mb-2 animate-pulse"></div>
          </div>
        )}

        <div className="bg-black p-6 rounded-lg shadow-lg mt-6 max-w-md text-center hover:shadow-xl transition">
          <h3 className="font-semibold text-xl mb-2 text-white">
            {item.title}
          </h3>
          <p className="text-gray-300 mb-4">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;

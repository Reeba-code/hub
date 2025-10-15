import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import heroBg from "@/assets/news.jpg";
import ciscoImg from "@/assets/cisco.webp";
import usaImg from "@/assets/USA.jpeg";
import cyberImg from "@/assets/cyber.jpg";
import bbkImg from "@/assets/BBKLogo_Transparent.png";
import geekImg from "@/assets/geek.png";
import articleImg from "@/assets/article.jpg";
import skillsImg from "@/assets/Picture1.png";
import winImg from "@/assets/win.jpg";
import emobilityImg from "@/assets/emobility.jpeg";
import farmersImg from "@/assets/Online.jpeg";

const newsItems = [
  {
    date: "July 9, 2025",
    title: "Visit from the U.S. Consulate: Strengthening Tech Partnerships",
    image: usaImg,
    description:
      "On July 9, 2025, the U.S. Consulate visited MDiHub to explore collaborative opportunities aimed at boosting tech innovation and entrepreneurship in the region.",
    link: "https://x.com/mafihub?lang=en",
  },
  {
    date: "Recent",
    title: "Cybersecurity Awareness & 1,000 NetAcad Seats",
    image: cyberImg,
    description:
      "Mahikeng Local Municipality, MDiHub, and Cisco CDA launched a youth empowerment initiative—offering 1,000 fully sponsored seats on Cisco's NetAcad platform in areas like cybersecurity, AI, and IoT.",
    link: "https://www.northwestnewspapers.co.za/mafikengmail/news/latest-news/launching-of-cisco-cybersecurity-awareness-session",
  },
  {
    date: "November 2024",
    title: "Insurance SMME Brokerage Bootcamp",
    image: bbkImg,
    description:
      "In November 2024, MDiHub, in partnership with Bakgatla‑Ba‑Kgafela and Inseta, hosted a 24-hour bootcamp to support aspiring insurance brokers with market skills, planning, and networking.",
    link: "https://za.linkedin.com/company/mafikeng-digital-innovation-hub",
  },
  {
    date: "Ongoing",
    title: "Collaboration with Geekulcha",
    image: geekImg,
    description:
      "MDiHub partnered with Geekulcha to deliver programmes like Digital Literacy for Development, cybersecurity hackathons, and to foster innovation culture within the region.",
    link: "https://www.geekulcha.dev/partners/mafikeng-digital-innovation-hub",
  },
  {
    date: "Recent",
    title: "Incubation Boosts SMMEs",
    image: articleImg,
    description:
      "MDiHub offers incubation support—providing entrepreneurs with office space, networking, skill development, and exposure. A beneficiary even developed a GBV alert app with MDiHub's support.",
    link: "https://vutivibusiness.co.za/innovation/business-incubators-help-smmes-succeed/",
  },
  {
    date: "Ongoing",
    title: "Digital Skills Training Program",
    image: skillsImg,
    description:
      "MDiHub has launched a comprehensive digital skills training program aimed at empowering youth with future-ready capabilities in coding, design, and digital marketing.",
    link: "#",
  },
  {
    date: "July 2024",
    title: "MDiHub Team Secures 3rd Place at Lelapa AI Hackathon",
    image: winImg,
    description:
      "The MDiHub team developed a Mobile Clinic System WhatsApp Bot, designed to help users locate mobile clinics and provide healthcare tips.",
    link: "https://www.maglazana.com/2024/07/27/vulavula-api-hackathon/",
  },
  {
    date: "Ongoing",
    title: "MIHub Vision 2030",
    image: emobilityImg,
    description:
      "Positioning North West Province on a global stage as a leader of new technological advancement. MDiHub hosted the first-ever eMobility Programme in partnership with UYILO, Nelson Mandela University, TIA, and the Department of Science and Innovation.",
    link: "https://www.linkedin.com/posts/mafikeng-digital-innovation-hub_mihub-vision-2030-positioning-nwprovince-activity-7331064444388560900-C8Yk?utm_source=share&utm_medium=member_desktop&rcm=ACoAABaVn38BL2RwUL2ZT3BRuvgN6_mbfBkI5CA",
  },
  {
    date: "Ongoing",
    title: "Launching: Farmers Online Market Platform",
    image: farmersImg,
    description:
      "MDiHub is launching a Farmers Online Market Platform to provide farmers with access to expertise, networking, research, development, and technical collaboration opportunities, enhancing productivity and market access.",
    link: "https://www.linkedin.com/posts/mafikeng-digital-innovation-hub_launching-farmers-online-market-platform-activity-7333573763231305728-BbZ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAABaVn38BL2RwUL2ZT3BRuvgN6_mbfBkI5CA",
  },
];

const Media = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section
        className="hero-banner relative bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-label="MDiHub Banner"
      >
        <div className="hero-overlay bg-black/50 text-white text-center py-32 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MDiHub News
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the latest innovations, events, and breakthroughs
            from our hub and the tech community.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="featured-story py-20 px-4 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Story
        </h2>
        <div className="featured-container max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="featured-image md:w-1/2">
            <img
              src={ciscoImg}
              alt="Cisco EDGE Centre Launch"
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="featured-text md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Cisco & MDiHub Launch EDGE Centre
            </h3>
            <p className="mb-4 text-gray-700">
              In a landmark partnership, MDiHub and Cisco have launched an
              innovative EDGE Centre focused on agriculture, sustainability,
              and cybersecurity. This state-of-the-art facility will deliver
              cutting-edge digital skills training through the Cisco Networking
              Academy, empowering local talent with future-ready capabilities.
            </p>
            <p className="mb-4 text-gray-700">
              The center represents a significant investment in the region's
              digital infrastructure and will serve as a hub for innovation,
              research, and skills development.
            </p>
            <a
              href="https://www.itnewsafrica.com/2023/11/cisco-and-mafikeng-digital-innovation-hub-launch-edge-centre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/80 transition"
            >
              Read Full Story →
            </a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="mdi-news py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          MDiHub News
        </h2>
        <ul className="mdi-news-list max-w-6xl mx-auto space-y-16">
          {newsItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <li
                key={index}
                className={`news-item flex flex-col md:flex-row gap-8 items-center rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 bg-white`}
              >
                {/* Image Left or Right */}
                <div
                  className={`news-image md:w-1/2 ${
                    !isEven ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div
                  className={`news-content md:w-1/2 p-6 ${
                    !isEven ? "md:order-1" : ""
                  }`}
                >
                  <div className="news-meta text-sm text-gray-500 mb-2">
                    <i className="far fa-calendar-alt mr-1"></i> {item.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block text-primary font-semibold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More →
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Media;

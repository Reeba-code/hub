import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Rocket,
  Users,
  TrendingUp,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Lightbulb,
  Globe,
  Shield,
  Award,
  Zap,
  Cpu,
} from "lucide-react";
import discoveryImg from "@/assets/discovery.jpg";
import growthImg from "@/assets/1.jpg";
import impactImg from "@/assets/impact.jpg";
import incubationHero from "@/assets/incubation.png";

const benefits = [
  {
    icon: Rocket,
    title: "Startup Support",
    description: "Comprehensive guidance from ideation to market launch",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Access to experienced entrepreneurs and industry experts",
  },
  {
    icon: TrendingUp,
    title: "Growth Programs",
    description: "Structured programs to scale your business effectively",
  },
  {
    icon: Briefcase,
    title: "Funding Access",
    description: "Connections to investors and funding opportunities",
  },
];

const stages = [
  {
    id: 1,
    title: "Discovery",
    subtitle:
      "Participants discover MDiHub, a place where ideas take shape and mentorship lights the path.",
    description:
      "In this foundational stage, aspiring entrepreneurs discover the power of proper incubation. They connect with mentors, explore market opportunities, and begin shaping their raw ideas into viable business concepts.",
    color: "text-blue-600",
    img: discoveryImg,
  },
  {
    id: 2,
    title: "Growth",
    subtitle:
      "With access to skills development, market insights, and shared resources, participants begin building their prototypes.",
    description:
      "During the growth phase, entrepreneurs gain access to critical resources including skills development, market research, technical support, and shared workspace facilities. This is where ideas transform into tangible prototypes.",
    color: "text-yellow-600",
    img: growthImg,
  },
  {
    id: 3,
    title: "Impact",
    subtitle:
      "Through guidance and advanced support, participants launch their solutions, creating impact locally and beyond.",
    description:
      "The impact stage represents the culmination of the incubation journey. With refined products, validated business models, and strong support networks, entrepreneurs launch their solutions into the market.",
    color: "text-green-600",
    img: impactImg,
  },
];

const funFacts = [
  {
    icon: Lightbulb,
    title: "Patents in South Africa",
    text: "The first recorded patent in South Africa was granted in 1859 for a new type of safety lamp. Today, IP protection through patents and trademarks is vital for local startups to scale globally.",
  },
  {
    icon: TrendingUp,
    title: "Incubation Success",
    text: "Startups that go through South African business incubators have a 75% survival rate compared to only 40% for others. Programs like those at MDIHub support early-stage ventures and help boost success rates.",
  },
  {
    icon: Globe,
    title: "SA Innovation Hubs",
    text: "South Africa has over 60 tech hubs and accelerators, including Mafikeng Digital Innovation Hub, which are shaping the next generation of African innovators.",
  },
  {
    icon: Shield,
    title: "IP Value in SA",
    text: "Strong trademarks and copyrights in South Africa can significantly increase a company's valuation. MDIHUB works with partners such as NIMPO and WIPO to help startups navigate IP protection and maximize their brand value.",
  },
  {
    icon: Users,
    title: "Mentorship in SA",
    text: "Entrepreneurs who join mentorship programs are 5 times more likely to grow their businesses successfully and secure funding locally. At MDIHUB, startups like Key Fertility and Veish Group have benefited from incubation and mentorship through partners such as CSIR and Telkom Future Makers.",
  },
  {
    icon: Zap,
    title: "Tech Growth SA",
    text: "South Africa’s tech sector is booming! Startups incubated at MDIHUB, like Midi Media and Alpha Labs, are leveraging innovative solutions to scale quickly and compete both locally and internationally.",
  },
  {
    icon: Cpu,
    title: "Renewable Energy Innovation",
    text: "Startups like Mega G incubated at MDIHUB are developing renewable energy solutions, driving sustainable growth and innovation across South Africa.",
  },
  {
    icon: Award,
    title: "Award-Winning SA Startups",
    text: "Incubatees from MDIHUB, like ManSalema and BluDynamix, have won local and international awards, gaining recognition and proving that South African innovation competes on the global stage.",
  },
];

const Incubation = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={incubationHero}
          alt="Journey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">What is Incubation?</h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Join our incumbents on their transformative journey from aspiring individuals
            with a vision to accomplished leaders making real impact.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() =>
                document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-500 transition"
            >
              Start the Journey <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn About MDiHub
            </button>
          </div>
        </div>
      </section>

      {/* Entrepreneur Roadmap */}
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Entrepreneur Journey Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our participants' journey from idea to impact with MDiHub's
              comprehensive incubation program.
            </p>
          </div>

          <div className="space-y-12">
            {stages.map((stage) => (
              <div
                key={stage.id}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
              >
                <div className="md:w-1/3 relative">
                  <img
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className={`text-2xl font-bold mb-2 ${stage.color}`}>
                    {stage.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{stage.subtitle}</p>
                  {expanded === stage.id && (
                    <p className="text-gray-600 mb-6 transition-all">
                      {stage.description}
                    </p>
                  )}
                  <button
                    onClick={() =>
                      setExpanded(expanded === stage.id ? null : stage.id)
                    }
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                      stage.color.includes("blue")
                        ? "border-blue-500 text-blue-600"
                        : stage.color.includes("yellow")
                        ? "border-yellow-500 text-yellow-600"
                        : "border-green-500 text-green-600"
                    } hover:bg-gray-100 transition`}
                  >
                    {expanded === stage.id ? "Show Less" : "Learn More"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expanded === stage.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Did You Know?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fascinating facts about South African entrepreneurship, innovation, and
              intellectual property. Inspired by MDiHub’s incubation programs that nurture
              startups and innovators across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition group"
              >
                <fact.icon className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gamified Roadmap Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Join Our Incubation?
          </h2>
          <div className="space-y-12">
            {[
              ["The Dream", "Your idea is the spark that can light up the future. Imagine the possibilities and get ready to start your journey."],
              ["Facing Challenges", "Obstacles are part of the journey: lack of resources, knowledge gaps, or market uncertainty. But you won't face them alone."],
              ["Joining MDiHub", "Access mentorship, resources, shared services, and funding opportunities to accelerate your startup."],
              ["Growth & Impact", "Transform your idea into a product, reach customers, and create meaningful impact with support from MDiHub."],
              ["Take Action", "Apply today and join a community of innovators shaping the future. Let's build your dream together!"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                <div className="bg-white shadow-md rounded-xl p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">Step {i + 1}: {title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">How to Apply</h2>
          <ol className="text-left space-y-4 text-lg">
            <li>1️⃣ Fill out the online application form with your startup details.</li>
            <li>2️⃣ Submit your business plan, product concept, and supporting documents.</li>
            <li>3️⃣ Attend an interview with our incubation team for evaluation.</li>
            <li>4️⃣ Selected startups will be invited to join the incubation program.</li>
            <li>5️⃣ Onboarding begins — access mentorship, training, and resources.</li>
          </ol>
          <div className="mt-10">
            <a
              href="#"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Incubation;

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

import gcipImg from "@/assets/gcip.png";
import sedfaImg from "@/assets/SEDFA.png";
import nasaImg from "@/assets/NASAA.png";
import mictImg from "@/assets/MICT-SETA-logo.jpg";
import agriImg from "@/assets/agri.jpg";
import netacadImg from "@/assets/NETACAD.png";
import codeImg from "@/assets/code.jpg";
import telkomImg from "@/assets/TelkomFuture.png";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search } from "lucide-react";

const Programmes = () => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [trackFilter, setTrackFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");

  // 🎓 Full Programmes List
  const programmes = [
    {
      title: "National CleanTech Innovation Challenge",
      status: "active",
      dates: "August 2025 - 21 January 2026",
      location: "Mafikeng & Online (North West Province Node)",
      track: "Cleantech",
      image: gcipImg,
      bullets: [
        "Focus on renewable energy, energy efficiency, and water efficiency",
        "Waste management & beneficiation, green buildings, eco materials & green chemistry",
        "Smart Agritech solutions and other sustainable innovations",
      ],
      tags: ["Renewable Energy","Energy Efficiency","Water Efficiency","Waste Management","Green Buildings","Eco Material","Green Chemistry","Smart Agritech"],
      apply: "GCIP.html",
      details: {
        overview: "A regional challenge to foster innovative CleanTech solutions addressing sustainable development in renewable energy, resource efficiency, and smart agriculture for North West Province.",
        outcomes: ["Develop scalable CleanTech innovations","Promote sustainable and eco-friendly technologies","Enable market access and mentoring through GCIP"],
        contact: "hgceba@mafihub.co.za",
      },
    },
    {
      title: "MICT SETA AI Software Development Programme (AI-900 Pathway)",
      status: "past",
      dates: "Apr – July 2025",
      location: "Mafikeng & Online",
      track: "AI & Data",
      image: mictImg,
      bullets: [
        "Hands-on Azure AI, Software Development, and prompt engineering",
        "Weekly builds: chatbots, vision, and RAG patterns",
        "Certification-aligned mentoring (AI-900)",
      ],
      tags: ["Azure AI","Software Development","Certification"],
      apply: "404.html",
      details: {
        overview: "Deep-dive into practical AI engineering with a focus on deploying real solutions fusing AI and Software development and get certified in Microsoft AI-900.",
        outcomes: ["Deploy AI services on Azure","Design data and evaluation pipelines","Build compliant AI solutions"],
        contact: "info@mafihub.co.za",
      },
    },
    {
      title: "EU SEDFA Cybersecurity Learnership (20 Learners)",
      status: "active",
      dates: "July – Sep 2025",
      location: "Mafikeng",
      track: "Cybersecurity",
      image: sedfaImg,
      bullets: [
        "Network+, Security+, and SOC fundamentals",
        "Blue-team labs: SIEM, EDR, and incident response",
        "Industry mentors and mock interviews",
      ],
      tags: ["SOC","SIEM","Learnership"],
      apply: "404.html",
      details: {
        overview: "Intensive work-readiness programme culminating in portfolio projects and job placement support.",
        outcomes: ["Log analysis","Incident response playbooks","Security automation basics"],
        contact: "rmokwanatle@mafihub.co.za",
      },
    },
    {
      title: "NASA Space Apps Challenge – Mafikeng",
      status: "upcoming",
      dates: "Oct 2025 (48 hours)",
      location: "Mafikeng Digital Innovation Hub",
      track: "Hackathons",
      image: nasaImg,
      bullets: [
        "Global hackathon with local facilitation",
        "Open data challenges from NASA & partners",
        "Free venue + community mentors",
      ],
      tags: ["Space Apps","Open Data","Hackathon"],
      apply: "https://www.spaceappschallenge.org/2025/local-events/mafikeng",
      details: {
        overview: "Build solutions using NASA open datasets; teams pitch to local judges and feed into global selection.",
        outcomes: ["Prototyping","Teamwork","Data storytelling"],
        contact: "rmokwanatle@mafihub.co.za",
      },
    },
    {
      title: "Farmers Marketplace – Platform launch",
      status: "past",
      dates: "20 Jun 2025",
      location: "Hybrid",
      track: "Agritech",
      image: agriImg,
      bullets: [
        "Power Platform + Azure + AWS data",
        "Unified dashboard with alerts",
        "Field sensor integration",
      ],
      tags: ["IoT","Power BI","Farming"],
      apply: "404.html",
      details: {
        overview: "Cross-stack integration showcasing low-cost telemetry and actionable analytics for smallholder farmers.",
        outcomes: ["Data model","Automations","Deployment playbook"],
        contact: "livinglab@mafihub.co.za",
      },
    },
    {
      title: "Cisco EDGE Center – Cybersecurity Awareness",
      status: "past",
      dates: "May 2025",
      location: "MIHub Cisco EDGE Center",
      track: "Community",
      image: netacadImg,
      bullets: [
        "Intro to networking, cloud, and dev tools",
        "Community meetups and study groups",
        "Partner-led masterclasses",
      ],
      tags: ["Cisco","Workshops","Community"],
      apply: "404.html",
      details: {
        overview: "Rolling calendar of short, practical sessions to upskill newcomers and pros alike.",
        outcomes: ["Career pathways","Hands-on labs","Peer learning"],
        contact: "bmolefhe@mafihub.co.za",
      },
    },
    {
      title: "MIHub Smart Services Hackathon – March 2025",
      status: "past",
      dates: "14 – 16 Mar 2025",
      location: "Mafikeng Digital Innovation Hub",
      track: "Hackathons",
      image: codeImg,
      bullets: [
        "50 participants across focus areas",
        "Theme-based problem solving",
        "Showcase and awards",
      ],
      tags: ["Hackathon","Prototypes","Community"],
      apply: "404.html",
      details: {
        overview: "Weekend sprint where teams built prototypes across software dev, IoT, AgriTech, FinTech and civic tech focus areas.",
        outcomes: ["Demos","Judging feedback","Community network"],
        contact: "info@mafihub.co.za",
      },
    },
    {
      title: "Telkom Learn Hackathon NW Edition – 2024",
      status: "past",
      dates: "21-22 Sep 2024",
      location: "North West Province, South Africa",
      track: "Hackathons",
      image: telkomImg,
      bullets: [
        "Regional edition with multiple youth teams",
        "Focus on digital innovation and learning solutions",
        "Awards for best solutions and prototypes",
      ],
      tags: ["Hackathon","Innovation","Youth"],
      apply: "404.html",
      details: {
        overview: "A regional hackathon organized by Telkom to empower learners with digital skills and prototype solutions addressing local challenges.",
        outcomes: ["Prototypes","Mentorship sessions","Networking with industry professionals"],
        contact: "info@mafihub.co.za",
      },
    },
  ];

  // 🕒 Load date + filter
  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    setLastUpdated(today.toLocaleDateString("en-GB", options));
    setFiltered(programmes);
  }, []);

  // 🔍 Filtering
  useEffect(() => {
    const results = programmes.filter((p) => {
      const inText = [p.title,p.dates,p.location,p.track,...(p.tags||[]),...(p.bullets||[])].join(" ").toLowerCase();
      const matchQ = !query || inText.includes(query.toLowerCase());
      const matchStatus = !statusFilter || p.status === statusFilter;
      const matchTrack = !trackFilter || p.track === trackFilter;
      return matchQ && matchStatus && matchTrack;
    });
    setFiltered(results);
  }, [query, statusFilter, trackFilter]);

  const thumbStyle = (img) => img ? {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  } : { backgroundColor: "#f3f4f6" };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">Advancing Technology Through Collaboration</h2>
          <p className="text-lg mb-6">Join MIHub in shaping the future of innovation with cutting-edge events and research initiatives</p>
          <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Explore Our Events</a>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="py-12 container mx-auto px-4 -mt-20">
        <div className="text-center mb-6">
          <span className="inline-block bg-yellow-400 text-black text-sm px-3 py-1 rounded-full font-semibold">
            Updated: {lastUpdated}
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search programmes, tags, or topics…" value={query} onChange={(e)=>setQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:ring focus:ring-yellow-300"/>
          </div>

          <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} className="border rounded-lg px-3 py-2">
            <option value="">All statuses</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>

          <select value={trackFilter} onChange={(e)=>setTrackFilter(e.target.value)} className="border rounded-lg px-3 py-2">
            <option value="">All tracks</option>
            <option>AI & Data</option>
            <option>Cybersecurity</option>
            <option>Smart City</option>
            <option>Agritech</option>
            <option>Community</option>
            <option>Hackathons</option>
            <option>Cleantech</option>
          </select>
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p,index)=>(
            <div key={index} className="border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between">
              <div>
                <div className="h-40 w-full rounded-xl mb-4 bg-center" style={thumbStyle(p.image)} />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${p.status==='active'?'bg-green-100 text-green-800':p.status==='upcoming'?'bg-blue-100 text-blue-800':'bg-gray-100 text-gray-700'}`}>
                    {p.status.charAt(0).toUpperCase()+p.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{p.dates} • {p.location}</p>
                <p className="text-sm text-yellow-600 font-medium mb-3">{p.track}</p>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1 mb-3">
                  {p.bullets.map((b,i)=><li key={i}>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">{(p.tags||[]).map((t,i)=><span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{t}</span>)}</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline" size="sm" onClick={()=>setSelected(p)}>Details</Button>
                <a href={p.apply} target="_blank" rel="noopener noreferrer"><Button size="sm" className="bg-yellow-400 text-black">Apply</Button></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={()=>setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader><DialogTitle>{selected.title}</DialogTitle></DialogHeader>
              <div className="space-y-4 text-sm">
                <div><strong>Overview</strong><p>{selected.details.overview}</p></div>
                <div><strong>Outcomes</strong><ul className="list-disc pl-5">{(selected.details.outcomes||[]).map((o,i)=><li key={i}>{o}</li>)}</ul></div>
                <div><strong>Schedule</strong><p>{selected.dates} • {selected.location}</p></div>
                <div><strong>Contact</strong><p>{selected.details.contact}</p></div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Programmes;

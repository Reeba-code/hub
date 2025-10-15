import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import facilityBg from "@/assets/facility-bg.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Brain,
  Shield,
  CheckCircle,
  Users,
  Cpu,
  ShoppingCart,
  BarChart,
  Quote,
  ArrowRight,
  Network,
  Sprout,
  Server,
} from "lucide-react";

// Skill Tracks / Categories
const skillTracks = [
  {
    icon: Code,
    title: "Software Development",
    skills: [
      "Web Development (HTML, CSS, JavaScript)",
      "Mobile App Development",
      "Python Programming",
      "Cloud Computing",
    ],
  },
  {
    icon: BarChart,
    title: "Data Science & Analytics",
    skills: [
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning",
      "Big Data Technologies",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    skills: [
      "Ethical Hacking",
      "Network Security",
      "Security Auditing",
      "Digital Forensics",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Digital Marketing",
    skills: [
      "Social Media Marketing",
      "SEO & SEM",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    skills: [
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics",
    ],
  },
  {
    icon: Users,
    title: "Business Technology",
    skills: [
      "Project Management",
      "Business Analysis",
      "Agile Methodologies",
      "IT Service Management",
    ],
  },
];

// Programs
const programTracks = [
  { icon: Cloud, title: "Amazon Web Services", programs: ["Re/Start AWS", "Solutions Architect"] },
  { icon: Server, title: "Microsoft", programs: ["Internet of Things", "Artificial Intelligence", "Power Platform"] },
  { icon: Code, title: "MICTSETA", programs: ["AI & Software Development", "Computer Design and Relative Systems"] },
  { icon: Network, title: "CISCO", programs: ["CCNA", "DevNet", "CyberOps", "Digital Literacy"] },
  { icon: BarChart, title: "Data & Analytics", programs: ["Power BI", "Data Analytics", "Data Engineering - Azure", "Cloud Architect - Azure"] },
  { icon: Sprout, title: "Agritech", programs: ["Smart Drip Irrigation System (SDIS)", "Aquaponics and Hydroponics", "Genetic Engineering Technique", "Aeroponics Tower System (ATS)"] },
];

// Learning Path
const learningPathSteps = [
  { number: 1, title: "Skill Assessment", description: "We begin by evaluating your current skills, experience, and career goals to recommend the most suitable learning path." },
  { number: 2, title: "Structured Learning", description: "Engage with expert instructors through hands-on projects, real-world scenarios, and interactive sessions." },
  { number: 3, title: "Practical Application", description: "Apply your new skills to real projects and build a portfolio that demonstrates your capabilities to employers." },
  { number: 4, title: "Career Support", description: "Receive guidance on job searching, interview preparation, and networking to launch your new career." },
];

// Testimonials
const testimonials = [
  {
    text: "The AI Software Development program completely changed my career trajectory. I went from dropping out from BSc in Computer Science to being certified in Microsoft AI-900 and improving my skills in software development in just 3 months!",
    authorName: "Thato Tuwe",
    authorRole: "Junior Developer",
    authorImage: "/images/Thato.jpeg",
  },
  {
    text: "The SIFA Skills Development programme gave me the practical skills I needed to transition from marketing & communications to tech. I obtained certifications in PL-900 (Microsoft Power Platform Fundamentals) and PL-300 (Microsoft Power BI Analyst). The projects were challenging but incredibly rewarding.",
    authorName: "Teboho Seqhofa",
    authorRole: "Power BI Data Analyst",
    authorImage: "/images/Teboho.jpg",
  },
  {
    text: "Being part of the AI Software Development programme helped me get certified in Microsoft AI-900 in just 3 months. After that, I joined the EU Cybersecurity programme and now I’m excited to be working at MDiHub as a Junior Software Developer and leading the Kids Coding Academy programme.",
    authorName: "Morena Santho",
    authorRole: "Junior Software Developer & Kids Coding Academy Programme Lead at MDiHub",
    authorImage: "/images/Thato.jpeg",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
<section
  className="relative bg-cover bg-center text-white py-40 overflow-hidden"
  style={{ backgroundImage: `url(${facilityBg})` }}
>
  {/* Background Blur Layer */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
      Future Skills Development
    </h1>
    <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-100 drop-shadow-md">
      Equip yourself with in-demand digital skills and prepare for the jobs of tomorrow
      through MDiHub's comprehensive training programs.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-2">
        Explore Programs <ArrowRight className="w-4 h-4" />
      </button>

      <button className="border-2 border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-white transition">
        Speak to an Advisor
      </button>
    </div>
  </div>
</section>


      {/* Skill Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Learning Tracks</h2>
          <p className="text-center mb-12 text-muted-foreground">
            We offer specialized training programs across key digital domains to help you build future-ready skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillTracks.map((track, idx) => (
              <Card key={idx} className="border border-gray-200 hover:shadow-lg transition">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center mb-4 shadow-md">
                    <track.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" /> {skill}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full w-full mt-4 shadow-md hover:bg-yellow-400 transition">
                    Explore Courses
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Skills Development Programs</h2>
          <p className="text-center mb-12 text-gray-600">
            We offer a wide range of technical training programs in partnership with industry leaders to ensure you gain the most relevant and in-demand skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programTracks.map((prog, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardHeader className="flex items-center gap-3">
                  <prog.icon className="w-6 h-6 text-yellow-500" />
                  <CardTitle>{prog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prog.programs.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-yellow-500" /> {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Your Learning Journey</h2>
          <p className="text-center mb-12 text-gray-600">
            We provide a structured path to help you build skills progressively and achieve your career goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPathSteps.map((step) => (
              <div key={step.number} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
                <div className="text-2xl font-bold mb-2 text-yellow-500">{step.number}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Success Stories</h2>
          <p className="text-center mb-12 text-gray-600">
            Hear from our graduates who have transformed their careers through our skills development programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Card key={idx}>
                <CardContent>
                  <Quote className="w-6 h-6 text-yellow-500 mb-2" />
                  <p className="text-sm text-gray-600 mb-4">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.authorImage}
                      alt={t.authorName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{t.authorName}</h4>
                      <p className="text-xs text-gray-500">{t.authorRole}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Future-Proof Your Career?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of students who have transformed their careers through MDiHub's skills development programs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center gap-2">
              View All Programs <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.canva.com/design/DAGh3K2GXUM/uZY-PmNJ6fb8Al7hqW52HQ/view?utm_content=DAGh3K2GXUM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf6748fd5f4"
              target="_blank"
            >
              <button className="border-2 border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-white transition">
                View Company Profile
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;

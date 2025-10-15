import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Team Images
import JosephImg from "@/assets/Joseph.jpg";
import BoingotloImg from "@/assets/Binza.jpg";
import KhanyiImg from "@/assets/Khanyi.jpg";
import HonestImg from "@/assets/honest.jpg";
import ThatoImg from "@/assets/Thato.jpg";
import ThabangImg from "@/assets/Thabang.jpg";
import IsaacImg from "@/assets/Isaac.jpg";
import RebaoneImg from "@/assets/Reba.jpg";
import EshImg from "@/assets/Esh.jpg";
import SemenyaImg from "@/assets/Semenya.jpg";
import MoarabiImg from "@/assets/moarabi.jpg";
import MorenaImg from "@/assets/drone.jpg";
import KgothatsoImg from "@/assets/Kgothatso.jpg";
import SibongileImg from "@/assets/Sbo.jpg";
import BoitumeloImg from "@/assets/tumi.jpg";
import KeaobakaImg from "@/assets/Kea.jpg";
import EdithImg from "@/assets/MaE.jpg";
import KopanoImg from "@/assets/Kopano.jpg";
import Img2 from "@/assets/img2.png";
import vid11 from "@/assets/vid11.mp4";

const Team = () => {
  // Team data for directors and their teams
  const directors = [
    {
      department: "Cisco Edge Center",
      manager: { img: BoingotloImg, name: "Boingotlo Molefhe", role: "Cisco Edge Center Manager", link: "https://www.linkedin.com/in/boingotlo-molefhe-b9830920a/" },
      team: [
        { img: KhanyiImg, name: "Khanyi Mngadi", role: "Admin GCIP & Business Development Officer", link: "http://www.linkedin.com/in/khanyisile-mngadi" },
        { img: HonestImg, name: "Honest Gceba", role: "GCIP", link: "https://www.linkedin.com/in/honestgceba" },
      ],
    },
    {
      department: "Living Lab Center",
      manager: { img: ThatoImg, name: "Thato Ndaba", role: "Living Lab Center Manager", link: "https://www.linkedin.com/in/thato-ndaba" },
      team: [
        { img: ThabangImg, name: "Thabang Ndaba", role: "Graphic Designer", link: "https://www.linkedin.com/in/thabang-ndaba" },
        { img: IsaacImg, name: "Isaac Sehole", role: "VR Content Creation", link: "https://www.linkedin.com/in/isaac-sehole" },
      ],
    },
    {
      department: "MIHub Center",
      manager: { img: RebaoneImg, name: "Rebaone Mokwanatle", role: "Software Development Manager", link: "https://www.linkedin.com/in/rebaone-mokwanatle-4a7a89a6" },
      team: [
        { img: EshImg, name: "Letlhogonolo Seane", role: "Senior Developer", link: "https://www.linkedin.com/in/letlhogonolo-seane" },
        { img: SemenyaImg, name: "Thato Semenya", role: "Senior Developer", link: "https://www.linkedin.com/in/thato-semenya" },
        { img: MoarabiImg, name: "Moarabi Tong", role: "Junior Developer", link: "https://www.linkedin.com/in/moarabi-tong" },
        { img: MorenaImg, name: "Morena Santho", role: "Coding & Robotics", link: "https://www.linkedin.com/in/morena-santho" },
        { img: KgothatsoImg, name: "Kgothatso Ramuhashi", role: "Entry Level Developer", link: "https://www.linkedin.com/in/kgothatso-ramuhashi" },
      ],
    },
    {
      department: "Administration",
      manager: { img: SibongileImg, name: "Sibongile Ndaba", role: "Senior Administrator", link: "https://www.linkedin.com/in/sibongile-ndaba" },
      team: [
        { img: BoitumeloImg, name: "Boitumelo Mgiba", role: "Skills Development Admin", link: "https://www.linkedin.com/in/boitumelo-mgiba-3994b92ab/" },
        { img: KeaobakaImg, name: "Keaobaka Mafora", role: "Project Management Officer", link: "https://www.linkedin.com/in/keaobaka-mafora-00a5862a8/" },
        { img: EdithImg, name: "Edith Macatha", role: "Facilities Attendant", link: "https://www.linkedin.com/in/mapinono" },
        { img: KopanoImg, name: "Kopano Khasu", role: "Marketing", link: "https://www.linkedin.com/in/kopano" },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Full-height Video Banner */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          src={vid11}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Full-height Video Banner */}
<section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
  {/* Video */}
  <video
    src={vid11}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
  />
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Title */}
  <h1 className="text-5xl md:text-6xl font-bold text-white z-10">
    MEET THE TEAM
  </h1>

  {/* Paragraph */}
  <p className="overlay-paragraph z-10 mt-4 max-w-3xl text-white text-center text-base md:text-lg">
    Meet our team of dynamic and highly skilled individuals, each bringing unique expertise, creativity, and passion to the table. Together, we blend diverse backgrounds and talents to drive innovation, deliver impactful solutions, and create an environment where collaboration thrives.
  </p>
</section>

      </section>

      {/* Main Content */}
      <main className="flex-grow py-20 relative">
        {/* CEO Section */}
        <div className="flex flex-col items-center mb-24 relative">
          <img
            src={JosephImg}
            alt="Joseph Ndaba"
            className="w-52 h-52 object-cover rounded-lg border-4 border-gold"
          />
          <h2 className="text-3xl font-bold mt-4">Joseph Ndaba</h2>
          <p className="text-gold font-semibold mb-2">Chief Executive Officer</p>
          <p className="max-w-2xl text-center mb-2 px-4">
            Joseph Ndaba is the visionary <strong>Founder & CEO of Mahikeng Innovation Hub (MIHub)</strong> and serves as a <strong>Commissioner</strong> for South Africa's <strong>Presidential Commission on the Fourth Industrial Revolution (4IR)</strong>. He empowers communities through 4IR-enabled entrepreneurship and innovation.
          </p>
          <a
            href="https://www.linkedin.com/in/josephndaba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold border-b-2 border-transparent hover:border-gold"
          >
            View LinkedIn Profile →
          </a>

          {/* Connector to Directors */}
          <div className="w-px h-16 bg-gray-400 mt-4"></div>
        </div>

        {/* Directors and Teams */}
        <div className="flex flex-wrap justify-center gap-16 relative">
          {directors.map(({ department, manager, team }) => (
            <div key={manager.name} className="flex flex-col items-center relative">
              {/* Connector from CEO */}
              <div className="w-px h-12 bg-gray-400 mb-4"></div>

              {/* Manager Card */}
              <div className="text-center mb-4">
                <img
                  src={manager.img}
                  alt={manager.name}
                  className="w-48 h-48 object-cover rounded-md border-4 border-gold"
                />
                <h3 className="font-semibold text-lg mt-2">{manager.name}</h3>
                <p className="text-gold font-semibold">{manager.role}</p>
                <a href={manager.link} target="_blank" className="text-sm underline mt-1 block">
                  LinkedIn
                </a>
              </div>

              {/* Connector to Team */}
              <div className="w-px h-12 bg-gray-400 mb-4"></div>

              {/* Team Members */}
              <div className="flex gap-6 flex-wrap justify-center">
                {team.map(member => (
                  <div key={member.name} className="team-card flex flex-col items-center text-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-36 h-36 object-cover rounded-md border-2 border-gray-200"
                    />
                    <h5 className="mt-2 font-semibold text-sm">{member.name}</h5>
                    <p className="text-xs">{member.role}</p>
                    <a href={member.link} target="_blank" className="text-xs underline">
                      LinkedIn
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Image */}
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px]">
          <img src={Img2} alt="Decorative" className="w-full h-full object-cover animate-pulse" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;

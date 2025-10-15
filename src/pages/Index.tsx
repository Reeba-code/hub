import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CircleNav from "@/components/home/CircleNav";
import WhatWeDo from "@/components/home/WhatWeDo";
import EventsCalendar from "@/components/home/EventsCalendar";
import PartnerLogos from "@/components/home/PartnerLogos";
import robotImage from "@/assets/robot.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-screen overflow-hidden pt-16">
  {/* Background Video */}
  <video
    src="/vid2.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />


<img
  src={robotImage}
  alt="Innovation Robot"
  className="absolute top-[55%] left-0 -translate-y-1/2 w-48 sm:w-64 md:w-80 lg:w-96 z-20"
/>


  {/* Main Content */}
  <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[calc(100vh-4rem)]">
    
    <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 animate-fade-in lg:col-span-2">
    <div className="relative lg:ml-32">
  <h1 className="whitespace-normal text-white mb-4 text-[clamp(1rem,2vw,1.5rem)] leading-tight">
    Awakening Innovative Excellence through technology and entrepreneurship
  </h1>
</div>




      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
        <Button variant="default" size="lg" asChild>
          <Link to="/programmes">Open Calls!</Link>
        </Button>
        <Button variant="default" size="lg" asChild>
          <Link to="/about">Get To Know Us!</Link>
        </Button>
      </div>

      {/* Info Box moved to right */}
      <div className="p-8 md:p-10 lg:p-12 rounded-xl w-full max-w-md mx-auto lg:mx-0 bg-transparent border border-white/30 translate-y-4">
        <p className="text-white text-base md:text-lg leading-relaxed">
          The Mafikeng Innovation Hub (MiHub), the innovation agency of the North West Province, is dedicated to advancing local economic development through technology, entrepreneurship, and smart infrastructure. MiHub serves as a catalyst for innovation, equipping youth, startups, and SMEs with the tools and environment needed to thrive in the digital economy.
        </p>
      </div>
    </div>

    {/* Circle Navigation */}
    <div className="hidden lg:flex justify-end">
      <CircleNav />
    </div>

  </div>
</section>


      {/* Other Sections */}
      <WhatWeDo />
      <PartnerLogos />
      <EventsCalendar />
      <Footer />
    </div>
  );
};

export default Index;

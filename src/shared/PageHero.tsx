import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundVideo?: string;
  robotImage?: string; // path to robot image
  children?: ReactNode;
}

const PageHero = ({
  title,
  subtitle,
  backgroundVideo,
  robotImage,
  children,
}: PageHeroProps) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Robot fully flush to the left */}
      {robotImage && (
        <img
          src={robotImage}
          alt="Robot"
          className="absolute left-0 bottom-0 h-auto max-h-full object-contain select-none"
        />
      )}

      {/* Centered Text */}
      <div className="relative z-10 text-center w-full">
        <h1 className="text-white font-bold mb-4 text-[clamp(2rem,6vw,5rem)] leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white max-w-2xl mx-auto text-[clamp(1rem,2.5vw,1.5rem)]">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;

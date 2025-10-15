import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const circles = [
  { id: 1, label: "Incubation", path: "/incubation" },
  { id: 2, label: "Specialized Zones", path: "/facilities" },
  { id: 3, label: "Cisco EDGE Centre", path: "/facilities" },
  { id: 4, label: "About", path: "/about" },
];

const CircleNav = () => {
  const containerRef = useRef(null);
  const [circleCenters, setCircleCenters] = useState([]);

  const positions = [
    { top: "5%", left: "50%", transform: "translate(-50%, 0)" },   // Top
    { top: "45%", left: "0%", transform: "translate(0, -50%)" },   // Left
    { top: "45%", right: "0%", transform: "translate(0, -50%)" },  // Right
    { bottom: "5%", left: "50%", transform: "translate(-50%, 0)" },// Bottom
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Compute exact pixel positions for circles
    const centers = [
      { x: w * 0.5, y: h * 0.05 }, // Top
      { x: w * 0.0, y: h * 0.45 }, // Left
      { x: w * 1.0, y: h * 0.45 }, // Right
      { x: w * 0.5, y: h * 0.95 }, // Bottom
    ];
    setCircleCenters(centers);
  }, []);

  return (
    <div ref={containerRef} className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {circleCenters.length > 0 && (
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Connect Top -> Bottom */}
          <line
            x1={circleCenters[0].x}
            y1={circleCenters[0].y}
            x2={circleCenters[3].x}
            y2={circleCenters[3].y}
            className="flowing-line"
          />
          {/* Connect Left -> Right */}
          <line
            x1={circleCenters[1].x}
            y1={circleCenters[1].y}
            x2={circleCenters[2].x}
            y2={circleCenters[2].y}
            className="flowing-line"
          />
          {/* Diagonals */}
          <line x1={circleCenters[0].x} y1={circleCenters[0].y} x2={circleCenters[1].x} y2={circleCenters[1].y} className="flowing-line dashed" />
          <line x1={circleCenters[0].x} y1={circleCenters[0].y} x2={circleCenters[2].x} y2={circleCenters[2].y} className="flowing-line dashed" />
          <line x1={circleCenters[3].x} y1={circleCenters[3].y} x2={circleCenters[1].x} y2={circleCenters[1].y} className="flowing-line dashed" />
          <line x1={circleCenters[3].x} y1={circleCenters[3].y} x2={circleCenters[2].x} y2={circleCenters[2].y} className="flowing-line dashed" />
        </svg>
      )}

      {/* Circles */}
      {circles.map((circle, index) => {
        const isAbout = circle.label === "About";
        return (
          <Link
            key={circle.id}
            to={circle.path}
            className="absolute group"
            style={positions[index]}
          >
            <div
              className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-center p-4
                ${isAbout
                  ? "bg-yellow-400 text-black border-yellow-300/50"
                  : "bg-white/10 backdrop-blur-md text-white border-white/30"
                }
                hover:shadow-glow hover:scale-105 transition-transform duration-300`}
            >
              <span className="text-xs md:text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                {circle.label}
              </span>
            </div>
          </Link>
        );
      })}

      {/* Animated line styles */}
      <style>
        {`
          .flowing-line {
            stroke: gold;
            stroke-width: 2;
            stroke-dasharray: 8 8;
            stroke-dashoffset: 16;
            animation: dash 2s linear infinite;
          }
          .flowing-line.dashed {
            stroke-dasharray: 6 6;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CircleNav;

import React from "react";

// Import all logos
import TIA from "@/assets/TIA.gif";
import GCIP from "@/assets/GCIP.png";
import SEDFA from "@/assets/SEDFA.png";
import CSIR from "@/assets/CSIR.png";
import ROBBO from "@/assets/ROBBO.png";
import DEVIARE from "@/assets/DEVIARE.jpg";
import EU from "@/assets/EU.png";
import MICROSOFT from "@/assets/MICROSOFT.png";
import SI from "@/assets/SI.png";
import GERMAN from "@/assets/GERMAN.jpg";
import KFW from "@/assets/KFW.png";
import DEDECT from "@/assets/DEDECT.jpg";
import MLM from "@/assets/MLM.png";
import MICT from "@/assets/mict.jpeg";
import AGRISETA from "@/assets/AGRISETA.jpg";
import NWDC from "@/assets/NWDC.png";
import TLIU from "@/assets/TLIU.gif";
import TALETSO from "@/assets/TALETSO.jpg";
import VUSELELA from "@/assets/Vuselela.png";
import STARTUP from "@/assets/STARTUP.png";
import DSI from "@/assets/DSI.png";
import WIPO from "@/assets/WIPO.gif";
import NIMPO from "@/assets/NIMPO.jpg";
import NETACAD from "@/assets/NETACAD.png";
import CISCO from "@/assets/cisco.png";
import TECHUB from "@/assets/TECHUB.jpg";
import LAUNCH from "@/assets/LAUNCH.jpg";
import AWS from "@/assets/AWS.png";
import NWU from "@/assets/NWU.png";
import TELKOM from "@/assets/TelkomFuture.png";

const partners = [
  TIA, GCIP, SEDFA, CSIR, ROBBO, DEVIARE, EU, MICROSOFT, SI, GERMAN, KFW,
  DEDECT, MLM, MICT, AGRISETA, NWDC, TLIU, TALETSO, VUSELELA, STARTUP, DSI,
  WIPO, NIMPO, NETACAD, CISCO, TECHUB, LAUNCH, AWS, NWU, TELKOM
];

const PartnerLogos: React.FC = () => {
  return (
    <section className="py-14 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold">Our Partners</h3>
          <p className="text-muted-foreground mt-2">
            Collaborating with leaders in innovation
          </p>
        </div>

        {/* Continuous scrolling logos */}
        <div className="overflow-hidden relative">
          <div className="animate-slide-logos whitespace-nowrap flex gap-8 hover:pause">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center h-24 px-6 flex-shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Partner ${index}`}
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "@/assets/Picture2.png";
import Sedfa from "@/assets/sedfa.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white w-full">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <img
              src={Logo}
              alt="MDiHub Logo"
              className="h-14 mb-4 object-contain"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              The Mafikeng Innovation Hub - Awakening Innovative Excellence
              through technology and entrepreneurship.
            </p>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-all text-sm"
              >
                About Us
              </Link>
              <Link
                to="/incubation"
                className="block text-gray-300 hover:text-white transition-all text-sm"
              >
                Business Incubation
              </Link>
              <Link
                to="/programmes"
                className="block text-gray-300 hover:text-white transition-all text-sm"
              >
                Programmes
              </Link>
              <Link
                to="/facilities"
                className="block text-gray-300 hover:text-white transition-all text-sm"
              >
                Facilities
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  2696 James Watt Crescent,
                  <br />
                  Industrial Site, Mafikeng, 2745
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+27 81 579 7317</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@mafihub.co.za</span>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Location</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="MDiHub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.968710827876!2d25.6286!3d-25.8491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb6e1c2a28bb2d%3A0x7fbc5b6e6a0a99e5!2s2696%20James%20Watt%20Cres%2C%20Industrial%20Site%2C%20Mahikeng%2C%202745!5e0!3m2!1sen!2sza!4v1696781111111!5m2!1sen!2sza"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          {/* Left: Supported by SEDFA */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Supported by</span>
            <img src={Sedfa} alt="SEDFA Logo" className="h-12 md:h-14 object-contain" />
          </div>

          {/* Right: Copyright */}
          <p className="text-sm text-gray-300">
            © 2025 Mafikeng Innovation Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

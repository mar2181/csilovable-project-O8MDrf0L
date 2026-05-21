import React from 'react';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-red-600 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-bold text-black text-sm">CSI</div>
              <span className="font-black tracking-wider text-white">COMBAT SPORTS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forge champions on the mat. Premier martial arts training in Mission, TX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#programs" className="hover:text-red-600 transition">MMA</a></li>
              <li><a href="#programs" className="hover:text-red-600 transition">Brazilian Jiu-Jitsu</a></li>
              <li><a href="#programs" className="hover:text-red-600 transition">Muay Thai</a></li>
              <li><a href="#programs" className="hover:text-red-600 transition">Kickboxing</a></li>
              <li><a href="#programs" className="hover:text-red-600 transition">Youth Classes</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-red-600 transition">About Us</a></li>
              <li><a href="#summer-camp" className="hover:text-red-600 transition">Summer Camp</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-red-600 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+19563785608" className="hover:text-red-600 transition">
                  +1 (956) 378-5608
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:combatsportsinstitute@yahoo.com" className="hover:text-red-600 transition break-all">
                  combatsportsinstitute@yahoo.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>2401 S. Shary Rd, Ste 5A, Mission, TX 78572</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        {/* Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; 2026 Combat Sports Institute. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a
              href="https://www.instagram.com/combatsports_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition"
              title="Instagram"
            >
              <Globe size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@johnnyjitsu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition"
              title="TikTok"
            >
              <span className="text-sm font-bold">TT</span>
            </a>
            <a
              href="https://www.facebook.com/combatsportsinstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition"
              title="Facebook"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
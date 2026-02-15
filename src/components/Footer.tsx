import { Phone, MessageCircle, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+233 502 140 791</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Text • Calls • WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:scale-110 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition">Our Story</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition">Meet the Team</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2023 by Osei-Bonsu Skyper. All rights reserved.</p>
          <p>Proudly created with Wix.com</p>
        </div>
      </div>
    </footer>
  );
}
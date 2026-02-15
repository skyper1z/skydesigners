import { Instagram, Twitter, Linkedin } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">SD</span>
            </div>
            <span className="text-xl font-bold">SKYDESIGNERS</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">
              Our Story
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-blue-600 transition">
              Team
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition">
              Services
            </button>
          </nav>

          {/* Social & Login */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Log In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Facebook, Twitter, Linkedin } from 'lucide-react';

export function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Meet the Team
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Profile Image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MDY0NzE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="CEO Portrait"
                    className="w-64 h-64 object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="text-blue-600 mb-2">CEO & FOUNDER</p>
                <h3 className="text-2xl mb-4">
                  OSEI-BONSU SKYPER<br />KWASI OFOSU
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A multidisciplinary creative with a passion for visual storytelling and brand innovation. 
                  With years of experience in graphic design, photography, and digital marketing, Skyper 
                  brings a unique perspective to every project, blending artistic vision with strategic thinking.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Github, Send, Linkedin, Wallet, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-green-400 font-bold text-xl hover:text-green-500 transition-colors">NFV Network</span>
            <p className="text-gray-400 mt-2 hover:text-green-400 transition-colors">Building a sustainable future together</p>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: <Github className="w-5 h-5" />, href: '#' },
              { icon: <Send className="w-5 h-5" />, href: 'https://t.me/volunteerconnectai' },
              { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/jesusoicns' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-gray-400 flex items-center justify-center space-x-2 hover:text-green-400 transition-colors">
              <Sparkles className="w-5 h-5" />
              <span>VolunteerConnectAU</span>
              <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">Coming Soon</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <button className="flex items-center justify-center space-x-2 text-gray-400 hover:text-green-400 transition-colors mx-auto">
              <Wallet className="w-5 h-5" />
              <span>Connect Wallet</span>
              <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">Coming Soon</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 hover:text-green-400 transition-colors">© 2025 NFV Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
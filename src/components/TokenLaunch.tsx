import React from 'react';
import { Sparkles, Pi as PieIcon, Rocket, Send } from 'lucide-react';

const TokenDistribution = [
  { name: 'Community & Rewards', percentage: 40, color: 'bg-green-400' },
  { name: 'Development & Team', percentage: 25, color: 'bg-blue-400' },
  { name: 'Marketing & Growth', percentage: 20, color: 'bg-purple-400' },
  { name: 'Reserve Fund', percentage: 10, color: 'bg-yellow-400' },
  { name: 'Advisors', percentage: 5, color: 'bg-red-400' },
];

const TokenLaunch = () => {
  return (
    <section id="token" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group">
            Token <span className="text-green-400 group-hover:animate-pulse">Launch</span>
          </h2>
          <div className="inline-flex items-center bg-gradient-to-r from-green-400/20 to-blue-400/20 px-6 py-3 rounded-full text-green-400 mb-8 hover:scale-105 transition-transform group">
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            <span className="group-hover:animate-pulse">Prelaunch Data</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black/50 p-8 rounded-lg hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center hover:text-green-400 transition-colors">
              <PieIcon className="w-6 h-6 mr-2 text-green-400" />
              Token Distribution
            </h3>
            <div className="space-y-4">
              {TokenDistribution.map((item) => (
                <div key={item.name} className="flex items-center group">
                  <div className={`w-4 h-4 rounded-full ${item.color} mr-3 group-hover:animate-pulse`}></div>
                  <div className="flex-1 text-gray-300 group-hover:text-green-400 transition-colors">{item.name}</div>
                  <div className="text-white font-semibold group-hover:text-green-400 transition-colors">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/50 p-8 rounded-lg hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center hover:text-green-400 transition-colors">
              <Rocket className="w-6 h-6 mr-2 text-green-400" />
              Community Channels
            </h3>
            <div className="space-y-6">
              <a
                href="https://t.me/volunteerconnectai"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors text-center group"
              >
                <Send className="w-5 h-5 inline-block mr-2 group-hover:animate-spin" />
                Join Volunteer Connect AI on Telegram
              </a>
              <a
                href="https://t.me/OrbittMM_bot?start=3LH080"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors text-center group"
              >
                <Send className="w-5 h-5 inline-block mr-2 group-hover:animate-spin" />
                Connect with OrbittMM Bot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenLaunch;
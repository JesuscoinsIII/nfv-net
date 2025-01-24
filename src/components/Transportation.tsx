import React from 'react';
import { Car, Calendar, MapPin, Users } from 'lucide-react';

const Transportation = () => {
  return (
    <section id="transportation" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ETHDenver <span className="text-green-400">Transportation</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Convenient and reliable transportation services for ETHDenver attendees.
            Connect with fellow community members and travel together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-400" />
                Schedule Details
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Multiple daily trips during the event</li>
                <li>• Flexible pickup times</li>
                <li>• Direct routes to venue</li>
              </ul>
            </div>

            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                Pickup Locations
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Downtown Denver</li>
                <li>• Denver International Airport</li>
                <li>• Major hotels</li>
              </ul>
            </div>

            <div className="bg-black/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Community Planning
              </h3>
              <p className="text-gray-300 mb-4">
                Join our Telegram channel for real-time updates and coordinate with other attendees.
              </p>
              <a
                href="https://t.me/volunteerconnectai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Join Telegram Group
              </a>
            </div>
          </div>

          <div className="bg-black/50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Car className="w-6 h-6 mr-2 text-green-400" />
              Make a Reservation
            </h3>
            <p className="text-gray-300 mb-8">
              Secure your transportation now through our easy booking system.
              All major payment methods accepted.
            </p>
            <a
              href="https://book.stripe.com/14keZ01LL3bveBOaER"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-400 text-black font-semibold py-4 rounded-lg hover:bg-green-500 transition-colors"
            >
              Book Your Ride
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
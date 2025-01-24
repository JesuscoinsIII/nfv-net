import React from 'react';
import { Calendar, MapPin, Users, Car, Briefcase, Sparkles } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Greenpill Vrbs Cleanup',
    location: 'Confluence Park, 2250 15th St, Denver, CO 80202',
    date: '2025-02-19',
    time: '8:00 AM',
    capacity: 20,
    registered: 15,
    vehicle: 'Van',
    sponsorNeeded: true,
  },
  {
    id: 2,
    name: 'Greenpill Modal Initiative',
    location: 'Commons Park, 2101 15th St, Denver, CO 80202',
    date: '2025-02-20',
    time: '8:00 AM',
    capacity: 50,
    registered: 30,
    vehicle: 'Bus',
    sponsorNeeded: true,
  },
  {
    id: 3,
    name: 'River Cleanup & Advanced Water Testing',
    location: 'S. Platte River Trail, Denver, CO 80204',
    date: '2025-02-21',
    time: '8:00 AM',
    capacity: 30,
    registered: 25,
    vehicle: 'Van',
    sponsorNeeded: true,
  },
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 group">
            Upcoming <span className="text-green-400 group-hover:animate-pulse">Events</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto hover:text-green-400 transition-colors">
            Join our upcoming volunteer events and make a difference in your community.
            Transportation is provided for all events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 hover:text-green-400 transition-colors">
                  {event.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <MapPin className="w-5 h-5 mr-2 text-green-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <Users className="w-5 h-5 mr-2 text-green-400" />
                    {event.registered}/{event.capacity} Registered
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                    <Car className="w-5 h-5 mr-2 text-green-400" />
                    {event.vehicle} Transportation
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Register Now
                  </button>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Sponsor This Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6 hover:text-green-400 transition-colors">
            Interested in Sponsoring?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto hover:text-green-400 transition-colors">
            Help us expand our impact by sponsoring additional vehicles for our volunteer events.
            Your support makes a difference in our community.
          </p>
          <button className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center mx-auto">
            <Briefcase className="w-5 h-5 mr-2" />
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
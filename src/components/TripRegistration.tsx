import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Car, MessageSquare, MessageCircle } from 'lucide-react';

const TripRegistration = () => {
  const [formData, setFormData] = useState({
    tripName: '',
    date: '',
    time: '',
    meetpoint: '',
    duration: '',
    groupSize: '',
    vehicleType: '',
    additionalDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="trip-registration" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Plan Your <span className="text-green-400">Trip</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Register your transportation needs for upcoming volunteer events.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-900 p-8 rounded-lg space-y-6">
            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-green-400" />
                Trip Name
              </label>
              <input
                type="text"
                name="tripName"
                placeholder="What do you want to name your trip?"
                value={formData.tripName}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Calendar className="w-5 h-5 mr-2 text-green-400" />
                Date of Trip
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Time of Trip
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              >
                <option value="">Select time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 10 PM)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                Meetpoint or Destination
              </label>
              <input
                type="text"
                name="meetpoint"
                placeholder="Enter your address"
                value={formData.meetpoint}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Duration
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              >
                <option value="">Select duration</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((hours) => (
                  <option key={hours} value={hours}>
                    {hours} hour{hours > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Number of People
              </label>
              <select
                name="groupSize"
                value={formData.groupSize}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              >
                <option value="">Select group size</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={(i + 1) * 5}>
                    {(i + 1) * 5} people
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Car className="w-5 h-5 mr-2 text-green-400" />
                Vehicle Type
              </label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              >
                <option value="">Select vehicle type</option>
                <option value="sedan">Sedan (1-4 people)</option>
                <option value="suv">SUV (1-6 people)</option>
                <option value="van">Van (1-12 people)</option>
                <option value="bus">Bus (1-50 people)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-green-400" />
                Additional Details
              </label>
              <textarea
                name="additionalDetails"
                placeholder="Anything else we should know? (e.g., room for equipment, special requirements)"
                value={formData.additionalDetails}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-4 rounded-lg hover:bg-green-500 transition-colors"
            >
              Submit Trip Registration
            </button>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <a
                href="https://discord.gg/qqkW3pNE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </a>
              <a
                href="https://modal.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Visit Modal
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TripRegistration;
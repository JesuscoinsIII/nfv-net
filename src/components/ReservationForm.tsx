import React, { useState } from 'react';
import { User, Phone, Wallet, List, MapPin } from 'lucide-react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    walletAddress: '',
    interests: '',
    age: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reserve" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Make Your <span className="text-green-400">Reservation</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Join our community by filling out the reservation form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-900 p-8 rounded-lg space-y-6">
            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <User className="w-5 h-5 mr-2 text-green-400" />
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Phone className="w-5 h-5 mr-2 text-green-400" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <Wallet className="w-5 h-5 mr-2 text-green-400" />
                Wallet Address
              </label>
              <input
                type="text"
                name="walletAddress"
                value={formData.walletAddress}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <List className="w-5 h-5 mr-2 text-green-400" />
                Event Interests
              </label>
              <select
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              >
                <option value="">Select your interests</option>
                <option value="tech">Technology</option>
                <option value="environment">Environment</option>
                <option value="community">Community Building</option>
                <option value="all">All of the above</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-gray-300 mb-2">
                <MapPin className="w-5 h-5 mr-2 text-green-400" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-4 rounded-lg hover:bg-green-500 transition-colors"
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
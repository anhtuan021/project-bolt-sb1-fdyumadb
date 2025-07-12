import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Check, Camera, Users, Award, MessageCircle, Calendar, Shield } from 'lucide-react';

const PhotographerProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const photographer = {
    id: 1,
    name: 'Alexander Mitchell',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviews: 118,
    projectsCompleted: 234,
    experience: 8,
    responseRate: 99,
    responseTime: '2h',
    availableForBookings: true,
    verified: true,
    languages: ['English', 'Spanish'],
    equipment: 'Canon R5, Professional Lighting Setup',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    about: 'With over 8 years of experience in professional photography, I specialize in capturing life\'s most precious moments. My passion lies in creating timeless images that tell your unique story through a modern lens. I work with both natural and studio lighting, bringing out the best in every subject while maintaining a natural and authentic feel in every shot.',
    specialties: ['Wedding Photography', 'Portrait Photography', 'Fashion Photography', 'Commercial Photography'],
  };

  const portfolioItems = [
    { id: 1, category: 'wedding', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 2, category: 'portrait', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 3, category: 'fashion', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 4, category: 'commercial', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 5, category: 'portrait', image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 6, category: 'wedding', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 7, category: 'fashion', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 8, category: 'commercial', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 9, category: 'portrait', image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  ];

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$10',
      duration: '4 hours',
      features: [
        '2 photographers',
        'Digital copies',
        'Basic editing',
        'Online gallery',
      ],
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '$15',
      duration: '6 hours',
      features: [
        '2 photographers',
        'Digital copies',
        'Premium editing',
        'Online gallery',
        'Prints',
      ],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$20',
      duration: '8 hours',
      features: [
        '2 photographers',
        'Digital copies',
        'Premium editing',
        'Online gallery',
        'Prints',
        'Video highlights',
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Amazing photographer! Captured our special day perfectly. Very professional and easy to work with.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      date: '3 weeks ago',
      comment: 'Incredible photographer! Captured our special day perfectly. Very professional and easy to work with.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      rating: 5,
      date: '1 month ago',
      comment: 'Outstanding photographer! Captured our special day perfectly. Very professional and easy to work with.',
    },
  ];

  const filteredPortfolio = selectedTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedTab);

  const tabs = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'commercial', label: 'Commercial' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                  />
                  {photographer.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <Shield className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {photographer.name}
                    </h1>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-5 w-5 mr-1" />
                      <span>{photographer.location}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium text-gray-900">
                          {photographer.rating}
                        </span>
                        <span className="text-gray-500 ml-1">
                          ({photographer.reviews} reviews)
                        </span>
                      </div>
                      {photographer.availableForBookings && (
                        <div className="flex items-center text-green-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium">Available for bookings</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Book Now
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {photographer.projectsCompleted}
                    </div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {photographer.experience}
                    </div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {photographer.responseRate}%
                    </div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {photographer.responseTime}
                    </div>
                    <div className="text-sm text-gray-600">Avg. Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-gray-600 mb-6">{photographer.about}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                  <p className="text-gray-600">{photographer.languages.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment</h3>
                  <p className="text-gray-600">{photographer.equipment}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {photographer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
              
              {/* Portfolio Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPortfolio.map((item) => (
                  <div
                    key={item.id}
                    className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt="Portfolio item"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="font-medium text-gray-900 mr-2">{review.name}</span>
                          <div className="flex items-center mr-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Packages */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Pricing Packages</h3>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedPackage === pkg.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${pkg.popular ? 'ring-2 ring-blue-200' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.popular && (
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                        Most Popular
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                      <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{pkg.duration}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {selectedPackage === pkg.id && (
                      <Link
                        to="/booking"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block mt-4"
                      >
                        Select Plan
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
              <p className="text-gray-600 mb-4">
                Get in touch to discuss your photography needs
              </p>
              <div className="space-y-3">
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
                >
                  Book Now
                </Link>
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  Send Message
                </button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Average response time: 2 hours</p>
                <p>Free cancellation up to 24 hours before the event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerProfilePage;
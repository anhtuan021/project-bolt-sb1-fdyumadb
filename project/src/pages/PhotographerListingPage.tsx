import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, Map, Star, Heart, MapPin } from 'lucide-react';

const PhotographerListingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    photoStyle: '',
    location: '',
    priceRange: '',
    availability: '',
  });

  const photographers = [
    {
      id: 1,
      name: 'Lily Emily',
      location: 'New York City',
      rating: 4.9,
      reviews: 128,
      specialties: ['Wedding', 'Portrait'],
      price: '$3/hr',
      availability: 'Available Now',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Award-winning photographer specializing in weddings and portraits. Based in New York City.',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'San Francisco',
      rating: 4.8,
      reviews: 96,
      specialties: ['Commercial', 'Event'],
      price: '$3/hr',
      availability: 'Available Tomorrow',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Creative commercial photographer with 10+ years of experience. Available nationwide.',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Los Angeles',
      rating: 4.7,
      reviews: 84,
      specialties: ['Portrait', 'Fashion'],
      price: '$4/hr',
      availability: 'Available Next Week',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Specializing in portrait and fashion photography. Based in Los Angeles.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Kim',
      location: 'Las Vegas',
      rating: 4.9,
      reviews: 156,
      specialties: ['Wedding', 'Event'],
      price: '$2/hr',
      availability: 'Available Now',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Experienced wedding and event photographer. Based in Las Vegas.',
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      location: 'Singapore',
      rating: 4.8,
      reviews: 112,
      specialties: ['Portrait', 'Family'],
      price: '$3/hr',
      availability: 'Available Tomorrow',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Family and portrait photographer with a passion for natural light.',
      verified: true,
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Berlin',
      rating: 4.7,
      reviews: 92,
      specialties: ['Commercial', 'Product'],
      price: '$2/hr',
      availability: 'Available Next Week',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Commercial and product photographer based in Berlin.',
      verified: true,
    },
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available Now':
        return 'text-green-600';
      case 'Available Tomorrow':
        return 'text-blue-600';
      case 'Available Next Week':
        return 'text-orange-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Photographer
          </h1>
          <p className="text-gray-600">
            Browse through our curated list of professional photographers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search photographers by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded ${
                    viewMode === 'map'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Map className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select
              value={selectedFilters.photoStyle}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, photoStyle: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Photo Style</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="commercial">Commercial</option>
              <option value="event">Event</option>
            </select>
            <select
              value={selectedFilters.location}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, location: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Location</option>
              <option value="new-york">New York</option>
              <option value="san-francisco">San Francisco</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="miami">Miami</option>
            </select>
            <select
              value={selectedFilters.priceRange}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, priceRange: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Price Range</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200+">$200+</option>
            </select>
            <select
              value={selectedFilters.availability}
              onChange={(e) =>
                setSelectedFilters({ ...selectedFilters, availability: e.target.value })
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Availability</option>
              <option value="now">Available Now</option>
              <option value="tomorrow">Available Tomorrow</option>
              <option value="week">Available This Week</option>
            </select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">
              Showing <strong>{photographers.length}</strong> photographers
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Nearest First</option>
            </select>
          </div>
        </div>

        {/* Photographer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographers.map((photographer) => (
            <div
              key={photographer.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
                {photographer.verified && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    ✓ Verified
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {photographer.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {photographer.rating}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      ({photographer.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{photographer.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {photographer.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {photographer.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">
                    {photographer.price}
                  </span>
                  <span className={`text-sm font-medium ${getAvailabilityColor(photographer.availability)}`}>
                    {photographer.availability}
                  </span>
                </div>

                <Link
                  to={`/photographer/${photographer.id}`}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-medium"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Load More Photographers
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotographerListingPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, Map, Star, Heart, MapPin } from 'lucide-react';
import { getAllPhotographers } from '../data/photographers';

const PhotographerListingPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    priceRange: '',
    rating: '',
    availability: '',
  });

  const photographers = getAllPhotographers();

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available Now':
        return 'text-green-600 bg-green-50';
      case 'Available Tomorrow':
        return 'text-blue-600 bg-blue-50';
      case 'Available Next Week':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredPhotographers = photographers.filter((photographer) => {
    const matchesSearch = photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photographer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photographer.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesSpecialty = !filters.specialty || 
                            photographer.specialties.includes(filters.specialty);
    
    const matchesLocation = !filters.location || 
                           photographer.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesAvailability = !filters.availability || 
                               photographer.availability === filters.availability;

    return matchesSearch && matchesSpecialty && matchesLocation && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Find Photographers</h1>
              <p className="text-gray-600 mt-1">Discover talented photographers in your area</p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid size={16} />
                Grid
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                  viewMode === 'map' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Map size={16} />
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Name, location, or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Specialty Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  value={filters.specialty}
                  onChange={(e) => setFilters({...filters, specialty: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Specialties</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Portrait">Portrait</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Event">Event</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Family">Family</option>
                  <option value="Product">Product</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City or region..."
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Availability Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters({...filters, availability: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Time</option>
                  <option value="Available Now">Available Now</option>
                  <option value="Available Tomorrow">Available Tomorrow</option>
                  <option value="Available Next Week">Available Next Week</option>
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    specialty: '',
                    location: '',
                    priceRange: '',
                    rating: '',
                    availability: '',
                  });
                }}
                className="w-full text-blue-600 hover:text-blue-700 font-medium py-2"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredPhotographers.length} photographer{filteredPhotographers.length !== 1 ? 's' : ''} found
              </p>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Relevance</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Availability</option>
              </select>
            </div>

            {/* Photographer Grid */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPhotographers.map((photographer) => (
                  <div key={photographer.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={photographer.image}
                        alt={photographer.name}
                        className="w-full h-48 object-cover"
                      />
                      <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Heart size={16} className="text-gray-600" />
                      </button>
                      {photographer.verified && (
                        <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Verified
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{photographer.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{photographer.rating}</span>
                          <span className="text-sm text-gray-500">({photographer.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-gray-600 mb-3">
                        <MapPin size={14} />
                        <span className="text-sm">{photographer.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {photographer.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty.replace(' Photography', '')}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {photographer.description}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-semibold text-gray-900">
                          {photographer.hourlyRate}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getAvailabilityColor(photographer.availability)}`}>
                          {photographer.availability}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Link
                          to={`/photographer/${photographer.id}`}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                        >
                          View Profile
                        </Link>
                        <Link
                          to={`/booking?photographer=${photographer.id}`}
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Map View */}
            {viewMode === 'map' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map size={48} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Map view coming soon</p>
                    <p className="text-sm text-gray-500 mt-1">Interactive map with photographer locations</p>
                  </div>
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredPhotographers.length === 0 && (
              <div className="text-center py-12">
                <Search size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No photographers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
                      specialty: '',
                      location: '',
                      priceRange: '',
                      rating: '',
                      availability: '',
                    });
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerListingPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Camera, Palette, Heart, Users, Shirt, Star, ArrowRight, Lightbulb, Edit3, Sparkles, BarChart3, CheckCircle, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchStyle, setSearchStyle] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const { t } = useLanguage();

  const photographerTypes = [
    { name: 'Lily Emily', location: 'New York, USA', rating: 4.9, reviews: 127, specialty: 'Portrait', price: '$3/hr', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Michael Chen', location: 'San Francisco, USA', rating: 4.8, reviews: 184, specialty: 'Landscape', price: '$5/hr', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'Emma Wilson', location: 'London, UK', rating: 4.7, reviews: 156, specialty: 'Event', price: '$5/hr', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
    { name: 'David Park', location: 'Seoul, Korea', rating: 4.9, reviews: 203, specialty: 'Commercial', price: '$7/hr', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  ];

  const aiFeatures = [
    {
      icon: Lightbulb,
      title: 'AI Concept Generator',
      description: 'Create unique photography concepts with AI assistance',
    },
    {
      icon: Edit3,
      title: 'Smart Photo Editor',
      description: 'Advanced AI-powered photo editing tools',
    },
    {
      icon: Sparkles,
      title: 'Style Matching',
      description: 'Find photographers that match your aesthetic',
    },
    {
      icon: BarChart3,
      title: 'Review Analyzer',
      description: 'AI-powered review analysis and insights',
    },
    {
      icon: CheckCircle,
      title: 'Photo Selection Assistant',
      description: 'Smart photo selection and curation',
    },
    {
      icon: Headphones,
      title: 'AI Photography Assistant',
      description: '24/7 support for photography needs',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Camera lens background elements */}
        <div className="absolute top-20 right-20 opacity-10">
          <div className="w-64 h-64 rounded-full border-4 border-white/20"></div>
          <div className="absolute top-8 left-8 w-48 h-48 rounded-full border-2 border-white/10"></div>
          <div className="absolute top-16 left-16 w-32 h-32 rounded-full border border-white/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.title').split('AI')[0]}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>

            {/* Search Form */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={t('home.search.location')}
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={searchStyle}
                    onChange={(e) => setSearchStyle(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">{t('home.search.style')}</option>
                    <option value="portrait">Portrait</option>
                    <option value="wedding">Wedding</option>
                    <option value="event">Event</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <select
                    value={searchBudget}
                    onChange={(e) => setSearchBudget(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">{t('home.search.budget')}</option>
                    <option value="0-20">$0 - $20</option>
                    <option value="20-50">$20 - $50</option>
                    <option value="50+">$50+</option>
                  </select>
                </div>
                <Link
                  to="/photographers"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Search className="h-5 w-5" />
                  <span>{t('home.search.button')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Photographers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.topPhotographers')}</h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <ArrowRight className="h-5 w-5 text-gray-600 rotate-180" />
              </button>
              <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographerTypes.map((photographer, index) => (
              <Link
                key={index}
                to={`/photographer/${index + 1}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photographer.image}
                    alt={photographer.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {photographer.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{photographer.location}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {photographer.rating}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      ({photographer.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {photographer.specialty}
                    </span>
                    <span className="text-gray-900 font-medium">{photographer.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.aiFeatures')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.aiSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/photographers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {t('home.cta.findPhotographer')}
            </Link>
            <Link
              to="#"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('home.cta.joinPhotographer')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Camera, Calendar, User, Users, Shirt, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { getPhotographerById, getAllPhotographers } from '../data/photographers';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPhotographyType, setSelectedPhotographyType] = useState('');
  const [budgetRange, setBudgetRange] = useState([100, 1000]);
  const [selectedPhotographerId, setSelectedPhotographerId] = useState<string>('');
  const [searchParams] = useSearchParams();
  const preSelectedPhotographer = searchParams.get('photographer');

  const photographyTypes = [
    {
      id: 'portrait',
      name: 'Portrait Photography',
      icon: User,
      description: 'Professional headshots and personal portraits',
    },
    {
      id: 'event',
      name: 'Event Photography',
      icon: Users,
      description: 'Capture your special events and celebrations',
    },
    {
      id: 'wedding',
      name: 'Wedding Photography',
      icon: Heart,
      description: 'Document your most important day',
    },
    {
      id: 'fashion',
      name: 'Fashion Photography',
      icon: Shirt,
      description: 'Professional fashion and lifestyle shoots',
    },
  ];

  const allPhotographers = getAllPhotographers();

  // Get selected photographer info
  const selectedPhotographer = preSelectedPhotographer 
    ? getPhotographerById(preSelectedPhotographer)
    : null;

  // Get photographers for selection step
  const photographersForSelection = selectedPhotographerId 
    ? [getPhotographerById(selectedPhotographerId)].filter(Boolean)
    : allPhotographers.slice(0, 3); // Show first 3 photographers as suggestions

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const totalSteps = preSelectedPhotographer ? 3 : 4;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Book a Photographer</h1>
            <span className="text-gray-600">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Photography Type Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What type of photography do you need?
            </h2>
            
            {/* Show selected photographer if pre-selected */}
            {preSelectedPhotographer && selectedPhotographer && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Selected Photographer
                </h3>
                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center mb-3">
                    <img
                      src={selectedPhotographer.image}
                      alt={selectedPhotographer.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{selectedPhotographer.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>★ {selectedPhotographer.rating}</span>
                        <span className="ml-1">({selectedPhotographer.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {selectedPhotographer.portfolioItems.slice(0, 3).map((item, index) => (
                      <img
                        key={index}
                        src={item.image}
                        alt="Portfolio"
                        className="w-full h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {selectedPhotographer.specialties.map(s => s.replace(' Photography', '')).join(', ')}
                    </span>
                    <span className="font-medium text-blue-600">
                      {selectedPhotographer.hourlyRate}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photographyTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedPhotographyType(type.id)}
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                      selectedPhotographyType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {type.name}
                      </h3>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Budget Range */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What's your budget range?
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range: ${budgetRange[0]} - ${budgetRange[1]}
                </label>
                <div className="px-4">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={budgetRange[1]}
                    onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">$50-$200</div>
                  <div className="text-sm text-gray-600">Budget Friendly</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">$200-$500</div>
                  <div className="text-sm text-gray-600">Professional</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">$500+</div>
                  <div className="text-sm text-gray-600">Premium</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Photographer Selection (only if not pre-selected) */}
        {currentStep === 3 && !preSelectedPhotographer && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Choose Your Photographer
            </h2>
            
            <div className="space-y-6">
              {photographersForSelection.map((photographer) => (
                <div
                  key={photographer.id}
                  className="border-2 border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={photographer.image}
                      alt={photographer.name}
                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {photographer.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <span>★ {photographer.rating}</span>
                            <span className="ml-1">({photographer.reviews} reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            {photographer.hourlyRate}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 my-4">
                        {photographer.portfolioItems.slice(0, 3).map((item, index) => (
                          <img
                            key={index}
                            src={item.image}
                            alt="Portfolio"
                            className="w-full h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {photographer.specialties.slice(0, 3).map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                            >
                              {specialty.replace(' Photography', '')}
                            </span>
                          ))}
                        </div>
                        <button 
                          onClick={() => setSelectedPhotographerId(photographer.id)}
                          className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                            selectedPhotographerId === photographer.id
                              ? 'bg-green-600 text-white'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {selectedPhotographerId === photographer.id ? 'Selected' : 'Select Photographer'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Review & Book Step */}
        {((currentStep === 3 && preSelectedPhotographer) || (currentStep === 4 && !preSelectedPhotographer)) && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Review Your Booking
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Photography Type</h3>
                <p className="text-gray-600 capitalize">{selectedPhotographyType} Photography</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Selected Photographer</h3>
                {(selectedPhotographer || (selectedPhotographerId && getPhotographerById(selectedPhotographerId))) && (
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.image}
                      alt={(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.name}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Total Estimated Cost</h3>
                <p className="text-2xl font-bold text-blue-600">
                  ${((selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate.match(/\$(\d+)/) || ['', '75'])[1] * 3}
                </p>
                <p className="text-gray-600 text-sm">
                  3 hours × {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate}
                </p>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
          
          <button
            onClick={nextStep}
            disabled={
              (preSelectedPhotographer && currentStep === 3) || 
              (!preSelectedPhotographer && currentStep === 4) ||
              (!preSelectedPhotographer && currentStep === 3 && !selectedPhotographerId)
            }
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              (preSelectedPhotographer && currentStep === 3) || 
              (!preSelectedPhotographer && currentStep === 4) ||
              (!preSelectedPhotographer && currentStep === 3 && !selectedPhotographerId)
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Continue
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, User, Users, Shirt, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPhotographyType, setSelectedPhotographyType] = useState('');
  const [budgetRange, setBudgetRange] = useState([100, 1000]);
  const [selectedPhotographers, setSelectedPhotographers] = useState<number[]>([]);

  const steps = [
    { number: 1, title: 'Style & Details', active: currentStep === 1 },
    { number: 2, title: 'Date & Location', active: currentStep === 2 },
    { number: 3, title: 'Choose Photographer', active: currentStep === 3 },
    { number: 4, title: 'Review & Book', active: currentStep === 4 },
  ];

  const photographyTypes = [
    {
      id: 'portrait',
      icon: Camera,
      title: 'Portrait Photography',
      description: 'Professional headshots and portraits',
    },
    {
      id: 'event',
      icon: Calendar,
      title: 'Event Photography',
      description: 'Capturing special moments',
    },
    {
      id: 'product',
      icon: User,
      title: 'Product Photography',
      description: 'Showcase your products',
    },
    {
      id: 'wedding',
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Lifetime memories',
    },
    {
      id: 'family',
      icon: Users,
      title: 'Family Photography',
      description: 'Capture family moments',
    },
    {
      id: 'fashion',
      icon: Shirt,
      title: 'Fashion Photography',
      description: 'Style and creativity',
    },
  ];

  const aiMatchedPhotographers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 4.9,
      reviews: 128,
      specialties: ['Portrait', 'Event', 'Wedding'],
      price: '$5/hr',
      images: [
        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 4.8,
      reviews: 96,
      specialties: ['Portrait', 'Event', 'Wedding'],
      price: '$3/hr',
      images: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
      ],
    },
  ];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const togglePhotographer = (id: number) => {
    setSelectedPhotographers(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.active
                      ? 'bg-blue-600 text-white'
                      : currentStep > step.number
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    step.active ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4 h-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Style & Details */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              What kind of photos are you looking for?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {photographyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedPhotographyType(type.id)}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    selectedPhotographyType === type.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <type.icon className={`h-8 w-8 mb-4 ${
                    selectedPhotographyType === type.id ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </button>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Budget Range</h3>
              <div className="px-6">
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value={budgetRange[1]}
                  onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${budgetRange[0]}</span>
                  <span>${budgetRange[1]}</span>
                </div>
              </div>
            </div>

            {/* AI Matched Photographers Preview */}
            {selectedPhotographyType && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  AI-Matched Photographers
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiMatchedPhotographers.map((photographer) => (
                    <div key={photographer.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">{photographer.name}</h4>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>★ {photographer.rating}</span>
                            <span className="ml-1">({photographer.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {photographer.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Portfolio"
                            className="w-full h-16 object-cover rounded"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {photographer.specialties.join(', ')}
                        </span>
                        <span className="font-medium text-gray-900">
                          {photographer.price}
                        </span>
                      </div>
                      <button
                        onClick={() => togglePhotographer(photographer.id)}
                        className={`w-full mt-3 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          selectedPhotographers.includes(photographer.id)
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {selectedPhotographers.includes(photographer.id)
                          ? 'Selected'
                          : 'Select Photographer'
                        }
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Date & Location */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              When and where do you need photography?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Location
              </label>
              <input
                type="text"
                placeholder="Enter the address or venue name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (hours)
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
                <option>5+ hours</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more about your event or specific requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
        )}

        {/* Step 3: Choose Photographer */}
        {currentStep === 3 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Choose Your Photographer
            </h2>
            
            <div className="space-y-6">
              {aiMatchedPhotographers.map((photographer) => (
                <div
                  key={photographer.id}
                  className={`border-2 rounded-lg p-6 transition-all ${
                    selectedPhotographers.includes(photographer.id)
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
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
                            {photographer.price}
                          </div>
                          <div className="text-sm text-gray-600">per hour</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 my-4">
                        {photographer.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Portfolio"
                            className="w-full h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {photographer.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => togglePhotographer(photographer.id)}
                          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                            selectedPhotographers.includes(photographer.id)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {selectedPhotographers.includes(photographer.id)
                            ? 'Selected'
                            : 'Select Photographer'
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Review & Book */}
        {currentStep === 4 && (
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
                {selectedPhotographers.map(id => {
                  const photographer = aiMatchedPhotographers.find(p => p.id === id);
                  return photographer ? (
                    <div key={id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{photographer.name}</h4>
                        <p className="text-gray-600">{photographer.price}</p>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Total Estimated Cost</h3>
                <p className="text-2xl font-bold text-blue-600">$10</p>
                <p className="text-gray-600 text-sm">3 hours × $3/hr</p>
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
            disabled={currentStep === 4}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 4
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
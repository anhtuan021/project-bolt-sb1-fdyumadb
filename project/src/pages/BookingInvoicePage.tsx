import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Check, CreditCard, MapPin, Calendar, Clock, Camera } from 'lucide-react';

const BookingInvoicePage = () => {
  const bookingDetails = {
    reference: '#SM-2024-0128-456',
    photographer: {
      name: 'Sarah Anderson',
      rating: 4.9,
      reviews: 128,
      location: 'San Francisco, CA',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    session: {
      date: 'January 28, 2024',
      time: '2:00 PM - 4:00 PM',
      duration: '2 hours',
      type: 'Portrait Photography',
      location: 'Golden Gate Park, San Francisco',
      status: 'Paid'
    },
    pricing: {
      basePrice: 20.00,
      aiEnhancedEditing: 9.00,
      platformFee: 4.90,
      total: 33.90
    },
    payment: {
      method: 'Visa •••• 4242',
      date: 'January 15, 2024',
      transactionId: 'TXN-89012345'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SnapMatch AI</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">My Bookings</Link>
              <Link to="/account" className="text-gray-600 hover:text-gray-900">Account</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Booking is Confirmed!
            </h1>
            <p className="text-gray-600">
              Booking Reference: <span className="font-medium">{bookingDetails.reference}</span>
            </p>
          </div>

          {/* Photographer Info */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={bookingDetails.photographer.avatar}
                  alt={bookingDetails.photographer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {bookingDetails.photographer.name}
                  </h2>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span>⭐ {bookingDetails.photographer.rating}</span>
                    <span className="mx-1">•</span>
                    <span>({bookingDetails.photographer.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{bookingDetails.photographer.location}</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Professional Photographer
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium text-gray-900">{bookingDetails.session.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium text-gray-900">{bookingDetails.session.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{bookingDetails.session.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium text-gray-900">{bookingDetails.session.type}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium text-gray-900">{bookingDetails.session.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {bookingDetails.session.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Price Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-medium text-gray-900">${bookingDetails.pricing.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI-Enhanced Editing</span>
                  <span className="font-medium text-gray-900">${bookingDetails.pricing.aiEnhancedEditing.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium text-gray-900">${bookingDetails.pricing.platformFee.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${bookingDetails.pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{bookingDetails.payment.method}</p>
                    <p className="text-sm text-gray-600">Payment date: {bookingDetails.payment.date}</p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600">Transaction ID</p>
                  <p className="font-mono text-sm text-gray-900">{bookingDetails.payment.transactionId}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Invoice (PDF)
              </button>
              <Link
                to="/bookings"
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to My Bookings
              </Link>
            </div>

            {/* Help Section */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <span className="text-blue-600 text-sm">?</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Need Help?</h5>
                  <p className="text-gray-600 text-sm mb-3">
                    Our support team is here to help you with any questions about your booking.
                  </p>
                  <a
                    href="mailto:support@snapmatch.ai"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    support@snapmatch.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <span>© 2024 SnapMatch AI. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/terms" className="hover:text-gray-900">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <Link to="/help" className="hover:text-gray-900">Help Center</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInvoicePage;
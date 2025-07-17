@@ .. @@
 import React, { useState, useEffect } from 'react';
 import { Link, useSearchParams } from 'react-router-dom';
 import { Camera, Calendar, User, Users, Shirt, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
+import { getPhotographerById, getAllPhotographers } from '../data/photographers';

 const BookingPage = () => {
   const [currentStep, setCurrentStep] = useState(1);
   const [selectedPhotographyType, setSelectedPhotographyType] = useState('');
   const [budgetRange, setBudgetRange] = useState([100, 1000]);
+  const [selectedPhotographerId, setSelectedPhotographerId] = useState<string>('');
   const [searchParams] = useSearchParams();
   const preSelectedPhotographer = searchParams.get('photographer');

@@ .. @@
     },
   ];

-  const aiMatchedPhotographers = [
-    {
-      id: 1,
-      name: 'Sarah Johnson',
-      rating: 4.9,
-      reviews: 128,
-      specialties: ['Portrait', 'Event', 'Wedding'],
-      hourlyRate: '$75/hr',
-      images: [
-        'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-        'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-      ],
-    },
-    {
-      id: 2,
-      name: 'Michael Chen',
-      rating: 4.8,
-      reviews: 96,
-      specialties: ['Portrait', 'Event', 'Wedding'],
-      hourlyRate: '$85/hr',
-      images: [
-        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
-      ],
-    },
-  ];
+  const allPhotographers = getAllPhotographers();

   // Get selected photographer info
   const selectedPhotographer = preSelectedPhotographer 
-    ? aiMatchedPhotographers.find(p => p.id.toString() === preSelectedPhotographer) || aiMatchedPhotographers[0]
+    ? getPhotographerById(preSelectedPhotographer)
     : null;

+  // Get photographers for selection step
+  const photographersForSelection = selectedPhotographerId 
+    ? [getPhotographerById(selectedPhotographerId)].filter(Boolean)
+    : allPhotographers.slice(0, 3); // Show first 3 photographers as suggestions

   const nextStep = () => {
@@ .. @@
             {/* Show selected photographer if pre-selected */}
             {preSelectedPhotographer && selectedPhotographer && (
               <div className="mb-8">
                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
                   Selected Photographer
                 </h3>
                 <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                   <div className="flex items-center mb-3">
-                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
+                    <img
+                      src={selectedPhotographer.image}
+                      alt={selectedPhotographer.name}
+                      className="w-12 h-12 rounded-full object-cover mr-3"
+                    />
                     <div>
                       <h4 className="font-medium text-gray-900">{selectedPhotographer.name}</h4>
                       <div className="flex items-center text-sm text-gray-600">
                         <span>★ {selectedPhotographer.rating}</span>
                         <span className="ml-1">({selectedPhotographer.reviews} reviews)</span>
                       </div>
                     </div>
                   </div>
                   <div className="grid grid-cols-3 gap-2 mb-3">
-                    {selectedPhotographer.images.map((image, index) => (
+                    {selectedPhotographer.portfolioItems.slice(0, 3).map((item, index) => (
                       <img
                         key={index}
-                        src={image}
+                        src={item.image}
                         alt="Portfolio"
                         className="w-full h-16 object-cover rounded"
                       />
                     ))}
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-sm text-gray-600">
-                      {selectedPhotographer.specialties.join(', ')}
+                      {selectedPhotographer.specialties.map(s => s.replace(' Photography', '')).join(', ')}
                     </span>
                     <span className="font-medium text-blue-600">
                       {selectedPhotographer.hourlyRate}
                     </span>
                   </div>
                 </div>
               </div>
             )}
@@ .. @@
             
             <div className="space-y-6">
-              {aiMatchedPhotographers.map((photographer) => (
+              {photographersForSelection.map((photographer) => (
                 <div
                   key={photographer.id}
                   className="border-2 border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
                 >
                   <div className="flex items-start gap-6">
-                    <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
+                    <img
+                      src={photographer.image}
+                      alt={photographer.name}
+                      className="w-24 h-24 rounded-full object-cover flex-shrink-0"
+                    />
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
-                        {photographer.images.map((image, index) => (
+                        {photographer.portfolioItems.slice(0, 3).map((item, index) => (
                           <img
                             key={index}
-                            src={image}
+                            src={item.image}
                             alt="Portfolio"
                             className="w-full h-20 object-cover rounded"
                           />
                         ))}
                       </div>
                       
                       <div className="flex items-center justify-between">
                         <div className="flex gap-2">
-                          {photographer.specialties.map((specialty, index) => (
+                          {photographer.specialties.slice(0, 3).map((specialty, index) => (
                             <span
                               key={index}
                               className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                             >
-                              {specialty}
+                              {specialty.replace(' Photography', '')}
                             </span>
                           ))}
                         </div>
-                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
+                        <button 
+                          onClick={() => setSelectedPhotographerId(photographer.id)}
+                          className={`px-6 py-2 rounded-lg transition-colors font-medium ${
+                            selectedPhotographerId === photographer.id
+                              ? 'bg-green-600 text-white'
+                              : 'bg-blue-600 text-white hover:bg-blue-700'
+                          }`}
+                        >
+                          {selectedPhotographerId === photographer.id ? 'Selected' : 'Select Photographer'}
+                        </button>
+                      </div>
+                    </div>
+                  </div>
+                </div>
+              ))}
+            </div>
+          </div>
+        )}
+
+        {/* Review & Book Step */}
+        {(currentStep === 3 && preSelectedPhotographer) || (currentStep === 4 && !preSelectedPhotographer) && (
+          <div className="bg-white rounded-xl shadow-sm p-8">
+            <h2 className="text-2xl font-bold text-gray-900 mb-8">
+              Review Your Booking
+            </h2>
+            
+            <div className="space-y-6">
+              <div>
+                <h3 className="font-semibold text-gray-900 mb-2">Photography Type</h3>
+                <p className="text-gray-600 capitalize">{selectedPhotographyType} Photography</p>
+              </div>
+              
+              <div>
+                <h3 className="font-semibold text-gray-900 mb-2">Selected Photographer</h3>
+                {(selectedPhotographer || (selectedPhotographerId && getPhotographerById(selectedPhotographerId))) && (
+                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
+                    <img
+                      src={(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.image}
+                      alt={(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.name}
+                      className="w-16 h-16 rounded-full object-cover"
+                    />
+                    <div>
+                      <h4 className="font-medium text-gray-900">
+                        {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.name}
+                      </h4>
+                      <p className="text-blue-600 font-medium">
+                        {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate}
+                      </p>
+                    </div>
+                  </div>
+                )}
+              </div>
+              
+              <div>
+                <h3 className="font-semibold text-gray-900 mb-2">Total Estimated Cost</h3>
+                <p className="text-2xl font-bold text-blue-600">
+                  ${((selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate.match(/\$(\d+)/) || ['', '75'])[1] * 3}
+                </p>
+                <p className="text-gray-600 text-sm">
+                  3 hours × {(selectedPhotographer || getPhotographerById(selectedPhotographerId))?.hourlyRate}
+                </p>
+              </div>
+              
+              <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
+                Confirm Booking
+              </button>
+            </div>
+          </div>
+        )}
+
+        {/* Navigation */}
+        <div className="flex justify-between mt-8">
+          <button
+            onClick={prevStep}
+            disabled={currentStep === 1}
+            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
+              currentStep === 1
+                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
+                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
+            }`}
+          >
+            <ArrowLeft className="h-5 w-5 mr-2" />
+            Back
+          </button>
+          
+          <button
+            onClick={nextStep}
+            disabled={
+              (preSelectedPhotographer && currentStep === 3) || 
+              (!preSelectedPhotographer && currentStep === 4) ||
+              (!preSelectedPhotographer && currentStep === 3 && !selectedPhotographerId)
+            }
+            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
+              (preSelectedPhotographer && currentStep === 3) || 
+              (!preSelectedPhotographer && currentStep === 4) ||
+              (!preSelectedPhotographer && currentStep === 3 && !selectedPhotographerId)
+                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
+                : 'bg-blue-600 text-white hover:bg-blue-700'
+            }`}
+          >
+            Continue
+            <ArrowRight className="h-5 w-5 ml-2" />
+          </button>
+        </div>
+      </div>
+    </div>
+  );
+};
+
+export default BookingPage;
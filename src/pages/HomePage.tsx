@@ .. @@
 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { Search, MapPin, Camera, Palette, Heart, Users, Shirt, Star, ArrowRight, Lightbulb, Edit3, Sparkles, BarChart3, CheckCircle, Headphones } from 'lucide-react';
 import { useLanguage } from '../contexts/LanguageContext';
+import { getAllPhotographers } from '../data/photographers';

 const HomePage = () => {
   const [searchLocation, setSearchLocation] = useState('');
   const [searchStyle, setSearchStyle] = useState('');
   const [searchBudget, setSearchBudget] = useState('');
   const { t } = useLanguage();

-  const photographerTypes = [
-    { name: 'Lily Emily', location: 'New York, USA', rating: 4.9, reviews: 127, specialty: 'Portrait', price: '$3/hr', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
-    { name: 'Michael Chen', location: 'San Francisco, USA', rating: 4.8, reviews: 184, specialty: 'Landscape', price: '$5/hr', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
-    { name: 'Emma Wilson', location: 'London, UK', rating: 4.7, reviews: 156, specialty: 'Event', price: '$5/hr', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
-    { name: 'David Park', location: 'Seoul, Korea', rating: 4.9, reviews: 203, specialty: 'Commercial', price: '$7/hr', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
-  ];
+  const topPhotographers = getAllPhotographers().slice(0, 4);

   const aiFeatures = [
@@ .. @@
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
-            {photographerTypes.map((photographer, index) => (
+            {topPhotographers.map((photographer, index) => (
               <Link
-                key={index}
+                key={photographer.id}
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
-                      {photographer.specialty}
+                      {photographer.specialties[0]?.replace(' Photography', '') || 'Photography'}
                     </span>
-                    <span className="text-gray-900 font-medium">{photographer.price}</span>
+                    <span className="text-gray-900 font-medium">{photographer.hourlyRate}</span>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
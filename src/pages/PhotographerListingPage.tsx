@@ .. @@
 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { Search, Filter, Grid, Map, Star, Heart, MapPin } from 'lucide-react';
+import { getAllPhotographers } from '../data/photographers';

 const PhotographerListingPage = () => {
   const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
@@ .. @@
     availability: '',
   });

-  const photographers = [
-    {
-      id: 1,
-      name: 'Lily Emily',
-      location: 'New York City',
-      rating: 4.9,
-      reviews: 128,
-      specialties: ['Wedding', 'Portrait'],
-      hourlyRate: '$75/hr',
-      availability: 'Available Now',
-      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Award-winning photographer specializing in weddings and portraits. Based in New York City.',
-      verified: true,
-    },
-    {
-      id: 2,
-      name: 'Michael Chen',
-      location: 'San Francisco',
-      rating: 4.8,
-      reviews: 96,
-      specialties: ['Commercial', 'Event'],
-      hourlyRate: '$85/hr',
-      availability: 'Available Tomorrow',
-      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Creative commercial photographer with 10+ years of experience. Available nationwide.',
-      verified: true,
-    },
-    {
-      id: 3,
-      name: 'Emma Rodriguez',
-      location: 'Los Angeles',
-      rating: 4.7,
-      reviews: 84,
-      specialties: ['Portrait', 'Fashion'],
-      hourlyRate: '$90/hr',
-      availability: 'Available Next Week',
-      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Specializing in portrait and fashion photography. Based in Los Angeles.',
-      verified: true,
-    },
-    {
-      id: 4,
-      name: 'David Kim',
-      location: 'Las Vegas',
-      rating: 4.9,
-      reviews: 156,
-      specialties: ['Wedding', 'Event'],
-      hourlyRate: '$70/hr',
-      availability: 'Available Now',
-      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Experienced wedding and event photographer. Based in Las Vegas.',
-      verified: true,
-    },
-    {
-      id: 5,
-      name: 'Lisa Thompson',
-      location: 'Singapore',
-      rating: 4.8,
-      reviews: 112,
-      specialties: ['Portrait', 'Family'],
-      hourlyRate: '$80/hr',
-      availability: 'Available Tomorrow',
-      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Family and portrait photographer with a passion for natural light.',
-      verified: true,
-    },
-    {
-      id: 6,
-      name: 'James Wilson',
-      location: 'Berlin',
-      rating: 4.7,
-      reviews: 92,
-      specialties: ['Commercial', 'Product'],
-      hourlyRate: '$65/hr',
-      availability: 'Available Next Week',
-      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-      description: 'Commercial and product photographer based in Berlin.',
-      verified: true,
-    },
-  ];
+  const photographers = getAllPhotographers();

   const getAvailabilityColor = (availability: string) => {
@@ .. @@
                 <div className="flex flex-wrap gap-1 mb-3">
                   {photographer.specialties.map((specialty, index) => (
                     <span
                       key={index}
-                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
+                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                     >
-                      {specialty}
+                      {specialty.replace(' Photography', '')}
                     </span>
                   ))}
                 </div>
@@ .. @@
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
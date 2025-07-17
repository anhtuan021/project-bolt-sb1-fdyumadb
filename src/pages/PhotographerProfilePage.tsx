@@ .. @@
 import React, { useState } from 'react';
 import { Link, useParams } from 'react-router-dom';
 import { Star, MapPin, Clock, Check, Camera, Users, Award, MessageCircle, Calendar, Shield } from 'lucide-react';
+import { getPhotographerById } from '../data/photographers';

 const PhotographerProfilePage = () => {
   const [selectedTab, setSelectedTab] = useState('all');
   const { id } = useParams();

-  const photographer = {
-    id: id || '1',
-    name: 'Alexander Mitchell',
-    location: 'San Francisco, CA',
-    rating: 4.9,
-    reviews: 118,
-    projectsCompleted: 234,
-    experience: 8,
-    responseRate: 99,
-    responseTime: '2h',
-    availableForBookings: true,
-    verified: true,
-    languages: ['English', 'Spanish'],
-    equipment: 'Canon R5, Professional Lighting Setup',
-    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
-    about: 'With over 8 years of experience in professional photography, I specialize in capturing life\'s most precious moments. My passion lies in creating timeless images that tell your unique story through a modern lens. I work with both natural and studio lighting, bringing out the best in every subject while maintaining a natural and authentic feel in every shot.',
-    specialties: ['Wedding Photography', 'Portrait Photography', 'Fashion Photography', 'Commercial Photography'],
-    hourlyRate: '$75/hour'
-  };
-
-  const portfolioItems = [
-    { id: 1, category: 'wedding', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 2, category: 'portrait', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 3, category: 'fashion', image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 4, category: 'commercial', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 5, category: 'portrait', image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 6, category: 'wedding', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 7, category: 'fashion', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 8, category: 'commercial', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-    { id: 9, category: 'portrait', image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
-  ];
-
-  const reviews = [
-    {
-      id: 1,
-      name: 'John Doe',
-      rating: 5,
-      date: '2 weeks ago',
-      comment: 'Amazing photographer! Captured our special day perfectly. Very professional and easy to work with.',
-    },
-    {
-      id: 2,
-      name: 'Jane Smith',
-      rating: 5,
-      date: '3 weeks ago',
-      comment: 'Incredible photographer! Captured our special day perfectly. Very professional and easy to work with.',
-    },
-    {
-      id: 3,
-      name: 'Mike Johnson',
-      rating: 5,
-      date: '1 month ago',
-      comment: 'Outstanding photographer! Captured our special day perfectly. Very professional and easy to work with.',
-    },
-  ];
+  const photographer = getPhotographerById(id || '1');
+
+  if (!photographer) {
+    return (
+      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
+        <div className="text-center">
+          <h1 className="text-2xl font-bold text-gray-900 mb-4">Photographer Not Found</h1>
+          <p className="text-gray-600 mb-6">The photographer you're looking for doesn't exist.</p>
+          <Link
+            to="/photographers"
+            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
+          >
+            Back to Photographers
+          </Link>
+        </div>
+      </div>
+    );
+  }

-  const filteredPortfolio = selectedTab === 'all' 
-    ? portfolioItems 
-    : portfolioItems.filter(item => item.category === selectedTab);
+  const filteredPortfolio = selectedTab === 'all' 
+    ? photographer.portfolioItems 
+    : photographer.portfolioItems.filter(item => item.category === selectedTab);

+  // Get unique categories from portfolio items
+  const categories = ['all', ...new Set(photographer.portfolioItems.map(item => item.category))];
   
-  const tabs = [
-    { id: 'all', label: 'All Work' },
-    { id: 'wedding', label: 'Wedding' },
-    { id: 'portrait', label: 'Portrait' },
-    { id: 'fashion', label: 'Fashion' },
-    { id: 'commercial', label: 'Commercial' },
-  ];
+  const tabs = categories.map(category => ({
+    id: category,
+    label: category === 'all' ? 'All Work' : category.charAt(0).toUpperCase() + category.slice(1)
+  }));

   return (
@@ .. @@
             {/* Reviews */}
             <div className="bg-white rounded-xl shadow-sm p-8">
               <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Reviews</h2>
               <div className="space-y-6">
-                {reviews.map((review) => (
+                {photographer.clientReviews.map((review) => (
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
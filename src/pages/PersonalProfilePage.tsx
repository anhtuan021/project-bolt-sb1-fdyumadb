@@ .. @@
 import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { Edit, Star, Calendar, Camera, Globe, Sun, Moon } from 'lucide-react';
 import { useLanguage } from '../contexts/LanguageContext';
+import { useAuth } from '../contexts/AuthContext';
 
 const PersonalProfilePage = () => {
   const [selectedTab, setSelectedTab] = useState('upcoming');
   const [isDarkMode, setIsDarkMode] = useState(false);
   const { language, setLanguage, t } = useLanguage();
+  const { user } = useAuth();
+
+  // Load user bookings from localStorage
+  const userBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
 
-  const user = {
-    name: 'Nguyễn Văn A',
-    email: 'nguyenvana@email.com',
-    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
-    joinDate: 'Tham gia từ tháng 3, 2024'
-  };
-
-  const bookingHistory = [
-    {
-      id: 1,
-      type: 'Chụp ảnh cưới',
-      photographer: 'Photographer Minh',
-      date: '25/12/2023',
-      status: 'completed',
-      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
-    },
-    {
-      id: 2,
-      type: 'Chụp ảnh gia đình',
-      photographer: 'Photographer Hương',
-      date: '28/12/2023',
-      status: 'completed',
-      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
-    },
-    {
-      id: 3,
-      type: 'Chụp ảnh sự kiện',
-      photographer: 'Photographer Tuấn',
-      date: '05/01/2024',
-      status: 'upcoming',
-      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
-    }
-  ];
+  // Convert user bookings to display format
+  const bookingHistory = userBookings.map((booking: any) => ({
+    id: booking.id,
+    type: `${booking.photographyType.charAt(0).toUpperCase() + booking.photographyType.slice(1)} Photography`,
+    photographer: booking.photographer.name,
+    date: new Date(booking.bookingDetails.date).toLocaleDateString(),
+    status: new Date(booking.bookingDetails.date) > new Date() ? 'upcoming' : 'completed',
+    image: booking.photographer.image,
+    reference: booking.reference,
+    location: booking.bookingDetails.location,
+    totalCost: booking.totalCost
+  }));
 
   const savedPhotographers = [
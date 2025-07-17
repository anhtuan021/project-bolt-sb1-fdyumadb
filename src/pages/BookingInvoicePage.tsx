@@ .. @@
 import React from 'react';
-import { Link } from 'react-router-dom';
+import { Link, useLocation } from 'react-router-dom';
 import { Download, ArrowLeft, Check, CreditCard, MapPin, Calendar, Clock, Camera } from 'lucide-react';
 
 const BookingInvoicePage = () => {
+  const location = useLocation();
+  const bookingData = location.state?.bookingData;
+
+  // Fallback data if no booking data is passed
+  const defaultBookingData = {
+    id: 'SM-2024-0128-456',
+    reference: 'SM-2024-0128-456',
+    photographer: {
+      name: 'Sarah Anderson',
+      rating: 4.9,
+      reviews: 128,
+      location: 'San Francisco, CA',
+      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
+    },
+    photographyType: 'portrait',
+    bookingDetails: {
+      date: '2024-01-28',
+      time: '14:00',
+      duration: '2',
+      location: 'Golden Gate Park, San Francisco'
+    },
+    totalCost: 150,
+    status: 'confirmed'
+  };
+
+  const booking = bookingData || defaultBookingData;
+
   const bookingDetails = {
-    reference: '#SM-2024-0128-456',
+    reference: `#${booking.reference}`,
     photographer: {
-      name: 'Sarah Anderson',
-      rating: 4.9,
-      reviews: 128,
-      location: 'San Francisco, CA',
-      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
+      name: booking.photographer.name,
+      rating: booking.photographer.rating,
+      reviews: booking.photographer.reviews,
+      location: booking.photographer.location,
+      avatar: booking.photographer.image
     },
     session: {
-      date: 'January 28, 2024',
-      time: '2:00 PM - 4:00 PM',
-      duration: '2 hours',
-      type: 'Portrait Photography',
-      location: 'Golden Gate Park, San Francisco',
-      status: 'Paid'
+      date: new Date(booking.bookingDetails.date).toLocaleDateString('en-US', { 
+        year: 'numeric', 
+        month: 'long', 
+        day: 'numeric' 
+      }),
+      time: `${booking.bookingDetails.time} - ${getEndTime(booking.bookingDetails.time, parseInt(booking.bookingDetails.duration))}`,
+      duration: `${booking.bookingDetails.duration} hours`,
+      type: `${booking.photographyType.charAt(0).toUpperCase() + booking.photographyType.slice(1)} Photography`,
+      location: booking.bookingDetails.location,
+      status: 'Confirmed'
     },
     pricing: {
-      basePrice: 20.00,
-      aiEnhancedEditing: 9.00,
-      platformFee: 4.90,
-      total: 33.90
+      basePrice: booking.totalCost,
+      aiEnhancedEditing: Math.round(booking.totalCost * 0.15),
+      platformFee: Math.round(booking.totalCost * 0.08),
+      total: booking.totalCost + Math.round(booking.totalCost * 0.15) + Math.round(booking.totalCost * 0.08)
     },
     payment: {
       method: 'Visa •••• 4242',
-      date: 'January 15, 2024',
+      date: new Date().toLocaleDateString('en-US', { 
+        year: 'numeric', 
+        month: 'long', 
+        day: 'numeric' 
+      }),
       transactionId: 'TXN-89012345'
     }
   };
 
+  function getEndTime(startTime: string, duration: number): string {
+    const [hours, minutes] = startTime.split(':').map(Number);
+    const endHours = hours + duration;
+    return `${endHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
+  }
+
   return (
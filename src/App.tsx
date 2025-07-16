@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import { AuthProvider } from './contexts/AuthContext';
 import Header from './components/Header';
@@ .. @@
 function App() {
   return (
-    <Router>
-      <div className="min-h-screen bg-white">
-        <Routes>
-          {/* Auth routes without header/footer */}
-          <Route path="/login" element={<LoginPage />} />
-          <Route path="/signup" element={<SignUpPage />} />
-          
-          {/* Main app routes with header/footer */}
-          <Route path="/*" element={
-            <>
-              <Header />
-              <main>
-                <Routes>
-                  <Route path="/" element={<HomePage />} />
-                  <Route path="/photographers" element={<PhotographerListingPage />} />
-                  <Route path="/photographer/:id" element={<PhotographerProfilePage />} />
-                  <Route path="/booking" element={<BookingPage />} />
-                  <Route path="/ai-tools" element={<AIToolsPage />} />
-                  <Route path="/support" element={<SupportPage />} />
-                  <Route path="/profile" element={<PersonalProfilePage />} />
-                  <Route path="/edit-profile" element={<EditProfilePage />} />
-                </Routes>
-              </main>
-              <Footer />
-            </>
-          } />
-        </Routes>
-      </div>
-    </Router>
+    <AuthProvider>
+      <Router>
+        <div className="min-h-screen bg-white">
+          <Routes>
+            {/* Auth routes without header/footer */}
+            <Route path="/login" element={<LoginPage />} />
+            <Route path="/signup" element={<SignUpPage />} />
+            
+            {/* Main app routes with header/footer */}
+            <Route path="/*" element={
+              <>
+                <Header />
+                <main>
+                  <Routes>
+                    <Route path="/" element={<HomePage />} />
+                    <Route path="/photographers" element={<PhotographerListingPage />} />
+                    <Route path="/photographer/:id" element={<PhotographerProfilePage />} />
+                    <Route path="/booking" element={<BookingPage />} />
+                    <Route path="/ai-tools" element={<AIToolsPage />} />
+                    <Route path="/support" element={<SupportPage />} />
+                    <Route path="/profile" element={<PersonalProfilePage />} />
+                    <Route path="/edit-profile" element={<EditProfilePage />} />
+                  </Routes>
+                </main>
+                <Footer />
+              </>
+            } />
+          </Routes>
+        </div>
+      </Router>
+    </AuthProvider>
   );
 }
@@ .. @@
 import React, { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
-import { Camera, Menu, X, Globe, User } from 'lucide-react';
+import { Camera, Menu, X, Globe, User, LogOut, ChevronDown } from 'lucide-react';
+import { useAuth } from '../contexts/AuthContext';

 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
+  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
   const location = useLocation();
+  const { user, isAuthenticated, logout } = useAuth();

   const navigation = [
@@ .. @@
   const isActive = (path: string) => location.pathname === path;

+  const handleLogout = () => {
+    logout();
+    setIsUserMenuOpen(false);
+  };

   return (
@@ .. @@
           {/* Right side actions */}
-          <div className="hidden md:flex items-center space-x-4">
-            <div className="flex items-center space-x-2 text-sm text-gray-600">
-              <Globe className="h-4 w-4" />
-              <span>EN</span>
-              <span className="text-gray-400">|</span>
-              <span>VN</span>
-            </div>
-            <Link 
-              to="/login"
-              className="text-gray-700 hover:text-blue-600 transition-colors"
-            >
-              Login
-            </Link>
-            <Link 
-              to="/signup"
-              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
-            >
-              Sign Up
-            </Link>
-          </div>
+          <div className="hidden md:flex items-center space-x-4">
+            <div className="flex items-center space-x-2 text-sm text-gray-600">
+              <Globe className="h-4 w-4" />
+              <span>EN</span>
+              <span className="text-gray-400">|</span>
+              <span>VN</span>
+            </div>
+            
+            {isAuthenticated ? (
+              <div className="flex items-center space-x-4">
+                <span className="text-sm text-gray-600">
+                  Welcome, <span className="font-medium text-gray-900">{user?.name}</span>
+                </span>
+                
+                {/* User Menu */}
+                <div className="relative">
+                  <button
+                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
+                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
+                  >
+                    <img
+                      src={user?.avatar}
+                      alt={user?.name}
+                      className="w-8 h-8 rounded-full object-cover"
+                    />
+                    <ChevronDown className="h-4 w-4" />
+                  </button>
+                  
+                  {isUserMenuOpen && (
+                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
+                      <Link
+                        to="/profile"
+                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
+                        onClick={() => setIsUserMenuOpen(false)}
+                      >
+                        <User className="h-4 w-4 mr-2" />
+                        Profile
+                      </Link>
+                      <button
+                        onClick={handleLogout}
+                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
+                      >
+                        <LogOut className="h-4 w-4 mr-2" />
+                        Logout
+                      </button>
+                    </div>
+                  )}
+                </div>
+              </div>
+            ) : (
+              <>
+                <Link 
+                  to="/login"
+                  className="text-gray-700 hover:text-blue-600 transition-colors"
+                >
+                  Login
+                </Link>
+                <Link 
+                  to="/signup"
+                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
+                >
+                  Sign Up
+                </Link>
+              </>
+            )}
+          </div>

           {/* Mobile menu button */}
@@ .. @@
       {/* Mobile menu */}
       {isMenuOpen && (
         <div className="md:hidden bg-white border-t border-gray-200">
           <div className="px-4 py-3 space-y-3">
             {navigation.map((item) => (
               <Link
                 key={item.name}
                 to={item.href}
                 className="block text-gray-700 hover:text-blue-600 transition-colors"
                 onClick={() => setIsMenuOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
-            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
-              <Link 
-                to="/login"
-                className="text-gray-700 hover:text-blue-600 transition-colors"
-                onClick={() => setIsMenuOpen(false)}
-              >
-                Login
-              </Link>
-              <Link 
-                to="/signup"
-                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
-                onClick={() => setIsMenuOpen(false)}
-              >
-                Sign Up
-              </Link>
-            </div>
+            
+            <div className="pt-4 border-t border-gray-200">
+              {isAuthenticated ? (
+                <div className="space-y-3">
+                  <div className="flex items-center space-x-3">
+                    <img
+                      src={user?.avatar}
+                      alt={user?.name}
+                      className="w-8 h-8 rounded-full object-cover"
+                    />
+                    <span className="text-sm text-gray-900">Welcome, {user?.name}</span>
+                  </div>
+                  <Link
+                    to="/profile"
+                    className="block text-gray-700 hover:text-blue-600 transition-colors"
+                    onClick={() => setIsMenuOpen(false)}
+                  >
+                    Profile
+                  </Link>
+                  <button
+                    onClick={() => {
+                      handleLogout();
+                      setIsMenuOpen(false);
+                    }}
+                    className="block text-gray-700 hover:text-blue-600 transition-colors"
+                  >
+                    Logout
+                  </button>
+                </div>
+              ) : (
+                <div className="flex items-center space-x-4">
+                  <Link 
+                    to="/login"
+                    className="text-gray-700 hover:text-blue-600 transition-colors"
+                    onClick={() => setIsMenuOpen(false)}
+                  >
+                    Login
+                  </Link>
+                  <Link 
+                    to="/signup"
+                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
+                    onClick={() => setIsMenuOpen(false)}
+                  >
+                    Sign Up
+                  </Link>
+                </div>
+              )}
+            </div>
           </div>
         </div>
       )}
@@ .. @@
   const login = async (email: string, password: string): Promise<boolean> => {
     try {
       // Simulate API call
       await new Promise(resolve => setTimeout(resolve, 1000));
       
       // Mock user data - trong thực tế sẽ lấy từ API
       const userData: User = {
         id: '1',
-        name: email === 'admin@example.com' ? 'Admin User' : 'Lily Emily',
+        name: email === 'admin@example.com' ? 'Admin User' : email.split('@')[0],
         email: email,
         avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
       };
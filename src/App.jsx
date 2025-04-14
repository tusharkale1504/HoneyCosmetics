// // src/App.js
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import Home from './pages/home/Home';
// import ProductList from './pages/product_list/ProductList';
// import ProductDetail from './pages/product_details/ProductDetail';
// import Checkout from './pages/checkout/Checkout';
// import AdminDashboard from './pages/admin_dashboard/AdminDashboard';
// import AuthPage from './pages/auth/AuthOptions';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<AuthPage />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<ProductList />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </>
//   );
// };

// export default App;






import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthOptions from './pages/auth/AuthOptions';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<AuthOptions />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

  );
}

export default App;

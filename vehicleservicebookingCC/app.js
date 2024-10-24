import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';  
import SignUp from './component/SignUp'; 
import Dashboard from './component/Dashboard'; 
import ServiceSelection from './component/ServiceSelection';
import Payment from './component/Payment'; 
import Home from './component/Home'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<ServiceSelection />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;

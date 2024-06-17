import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from "./components/AdminDashboard";
import AddEditItem from "./components/AddEditItem";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/admin/add" element={<AddEditItem/>} />
        <Route path="/admin/edit/:id" element={<AddEditItem/>} />
      </Routes>
    </Router>
  );
};

export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeForm } from './components/ResumeForm';
import PreviewPage from './components/PreviewPage';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ResumeForm />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  </Router>
  
  );
}

export default App;

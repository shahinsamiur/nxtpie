import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignupForm from './components/signUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BlogDetails} from "./components/blogPage"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* Wrap the entire routing logic inside <Router> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<App />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

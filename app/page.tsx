"use client"

import React, { useState } from 'react';

const ChromeHomePage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    if (query.trim()) {
      // Redirect to Google's search page with the search query
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between text-center bg-gray-100 text-gray-800">
      <header className="bg-purple-600 text-white py-6">
        <h1 className="text-4xl">Welcome to Your Chrome Homepage</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1">
        <form onSubmit={handleSearch} className="mb-10 w-2/3">
          <input
            type="text"
            placeholder="Search Google or type a URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 text-xl rounded-full border border-gray-300 focus:border-purple-600 focus:outline-none transition-all"
          />
        </form>
        
        <div className="flex items-center justify-center gap-6">
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-4 px-8 rounded-lg hover:bg-purple-700 transition">
            Gmail
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-4 px-8 rounded-lg hover:bg-purple-700 transition">
            YouTube
          </a>
          <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-4 px-8 rounded-lg hover:bg-purple-700 transition">
            Drive
          </a>
          <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white py-4 px-8 rounded-lg hover:bg-purple-700 transition">
            Calendar
          </a>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <p>Designed with ❤️ by Your Name</p>
      </footer>
    </div>
  );
};

export default ChromeHomePage;


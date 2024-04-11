// GalleryPage.js
import React, { useState, useEffect } from 'react';
import ImageContainer from '../components/ImageContainer';

function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('supernova');
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`);
    const data = await response.json();
    setGalleryImages(data.collection.items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGalleryImages();
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <h2 className="text-3xl font-semibold mb-4 text-white">Space Image Gallery</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query..."
          className="border border-gray-300 px-3 py-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <ImageContainer data={image} key={index} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;

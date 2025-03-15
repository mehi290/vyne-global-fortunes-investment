import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Dubai Office",
    description: "Our state-of-the-art headquarters in Dubai"
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Investment Portfolio",
    description: "Strategic investments across multiple sectors"
  },
  {
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Team Meeting",
    description: "Our experts discussing investment strategies"
  },
  {
    url: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Global Reach",
    description: "International presence across key markets"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>(galleryImages);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newImage: GalleryImage = {
        url,
        title: file.name.split('.')[0],
        description: "Custom uploaded image"
      };
      setImages([...images, newImage]);
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Global Presence</h2>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              title="Upload Image"
            />
            <button className="bg-secondary hover:bg-secondary-light text-primary font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all">
              <Upload size={20} />
              Upload Image
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-navy-light"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                <p className="text-gray-200 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
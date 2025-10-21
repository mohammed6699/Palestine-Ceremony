import React from 'react';

// Placeholder images. Replace these URLs with your actual image paths.
const images = [
  {
    src: "https://media.istockphoto.com/id/182194306/photo/outdoor-photo-of-al-aska-dome-of-the-rock-jerusalem.webp?a=1&b=1&s=612x612&w=0&k=20&c=yASVQD5pG_mfBLBfNUAha7muZD30gq-VI6O-21SHPGM=",
    alt: "Dome of the Rock in Jerusalem",
    caption: "The Dome of the Rock"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Nablus_Old_Town_streets.jpg/500px-Nablus_Old_Town_streets.jpg",
    alt: "A street in the old city of Nablus",
    caption: "Old City of Nablus"
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664114275213-dba3e178c250?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE9saXZlJTIwZ3JvdmVzJTIwaW4lMjB0aGUlMjBXZXN0JTIwQmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Olive groves in the West Bank",
    caption: "Ancient Olive Groves"
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDVQx_iKBtN_SpG99wGZCPcYYrAN5eN2i0g&s",
    alt: "Shepherds in the Judean desert",
    caption: "They turn to this"
  }
];

function GlimpseOfPalestine() {
  return (
    <div className="relative py-16 sm:py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-black to-red-700 opacity-50"></div>

      {/* Optional flag overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/palestine-flag-overlay.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            A Glimpse of Palestine
          </h2>
          <p className="text-lg text-gray-400 mt-2">
            The enduring beauty of its land, culture, and people.
          </p>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold text-center p-2">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlimpseOfPalestine;

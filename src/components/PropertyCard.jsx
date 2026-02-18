import { Link } from "react-router-dom";

const PropertyCard = ({ item }) => {
  // 1. This function runs ONLY if the image fails to load
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loops
    e.target.src = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=75";
  };

  return (
    <Link to={`/listing/${item.id}`} className="block group">
      <div className="flex flex-col space-y-3 cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200">
          <img
            src={item.image}
            alt={item.location}
            onError={handleImageError}
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          {/* Heart Icon using Heather color */}
          <button className="absolute top-3 right-3 text-white/70 hover:text-heather transition-colors z-10" onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking heart
            e.stopPropagation();
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 shadow-sm">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001Z" />
            </svg>
          </button>
        </div>

        {/* Details */}
        <div className="flex flex-col text-sm animate-[fadeIn_0.5s_ease-out]">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900 group-hover:text-rose-500 transition-colors">{item.location}</h3>
            <div className="flex items-center space-x-1">
              <span>★</span>
              <span>{item.rating}</span>
            </div>
          </div>
          <p className="text-gray-500">{item.distance}</p>
          <p className="text-gray-500">{item.date}</p>
          <p className="mt-1">
            <span className="font-bold">{item.price}</span> night
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
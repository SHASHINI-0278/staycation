import { useState, useMemo } from "react";
import Navbar from "./components/NavBar";
import CategoryBar from "./components/CategoryBar";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import listings from "./data/ListingData";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guestCount, setGuestCount] = useState(0);

  const handleSearch = (query, start, end, guests) => {
    setSearchQuery(query.trim());
    setStartDate(start);
    setEndDate(end);
    setGuestCount(guests);
  };

  // Filter listings based on the active category, search query, selected date, and guest count
  const filteredListings = useMemo(() => {

    return listings.filter((item) => {
    // 1. Category Filter
    // If searchQuery exists, matchesCategory is always true.
    // This "unlocks" the search bar from the category pills.
      const matchesCategory = searchQuery !== "" ? true : item.category === selectedCategory;
    // 2. Search Text Filter
      const matchesSearch = 
        item.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.location.toLowerCase().includes(searchQuery.toLowerCase());
    // 3. Guest Filter: Only show homes that can fit the number of guests
    // Note: assumes your data has a 'maxGuests' property!
      const matchesGuests = guestCount > 0 ? item.maxGuests >= guestCount : true;

    // Date filtering not implemented yet (UI only)
      const matchesDate = startDate ? true : true;

    // Return true only if EVERYTHING matches
      return matchesCategory && matchesSearch && matchesGuests && matchesDate;
    });
  }, [listings, selectedCategory, searchQuery, guestCount]);

  return (
    //'pb-24' (padding bottom) and 'md:pb-0' (remove it on desktop)
    <div className="min-h-screen bg-sandstone flex flex-col pb-24 md:pb-0">
      <Navbar 
        onSearch={handleSearch}
        searchQuery={searchQuery} 
      />
      {/* Passing the state to CategoryBar so it can change the category */}
      <CategoryBar active={selectedCategory} setCategory={setSelectedCategory} />
      
      <main className="max-w-[1800px] mx-auto px-4 md:px-10 pt-8 flex-grow">
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredListings.map((item) => (
              <PropertyCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
            <div className="text-7xl mb-6">🏝️</div>
            <h3 className="text-2xl font-bold text-gray-900">No stays found</h3>
            <p className="text-gray-500 mt-2 max-w-sm">
              We couldn't find any listings matching "{searchQuery}". Try adjusting your filters or clearing them to see more.
            </p>

            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Trending");
                setGuestCount(0);
                setStartDate(null);
                setEndDate(null);
              }} 
              className="mt-8 px-8 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
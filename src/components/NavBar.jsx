import GuestOption from "./GuestOption";
import { Calendar } from "./Calendar";
import { useState, useEffect, useRef } from "react";
import staycationLogo from "./assets/staycationLogo.png";

const Navbar = ({ onSearch, searchQuery }) => {
  const [isCompact, setIsCompact] = useState(false);
  const inputRef = useRef(null);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });

  const totalGuests = guests.adults + guests.children + guests.infants + guests.pets;
  const [searchInput, setSearchInput] = useState("");
  
  useEffect(() => {
    setSearchInput(searchQuery);
    if (searchQuery === "") {
    setGuests({
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0
    });
    setStartDate(null);
    setEndDate(null); // This clears the "Any week" text too
    }
  }, [searchQuery]);

  useEffect(() => {
    let lastState = false;

    const handleScroll = () => {
      const shouldBeCompact = window.scrollY > 80;

      if (shouldBeCompact !== lastState) {
        lastState = shouldBeCompact;
        setIsCompact(shouldBeCompact);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  return (
    <nav
      className={`sticky top-0 z-50 bg-porcelainmist border-b border-gray-200 px-4 md:px-10 font-foundry shadow-sm 
        transition-all duration-300 
        ${isCompact ? "py-2" : "py-4"}
      `}
    >

      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        
        {/* 1. Artistic Logo */}
        <div className="flex-1 flex justify-start">
          <img
            src={staycationLogo}
            alt="Staycation logo"
            className="h-8 md:h-10 object-contain cursor-pointer"
          />        
        </div>

        {isCompact && (
          <div className="flex md:flex-1 justify-center animate-[fadeIn_0.2s_ease-out]">
            <div 
            onClick={() => {
              setIsCompact(false);
              setTimeout(() => {
              inputRef.current?.focus();
              }, 50);
            }}
            className="flex items-center gap-3 px-8 py-2 bg-white border rounded-full shadow-md text-sm font-medium cursor-pointer hover:shadow-lg transition">
              <span className="text-gray-800">
                {searchInput || "Anywhere"}
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="text-gray-800">
                {startDate && endDate ? `${startDate} - ${endDate}` : "Anyweek"}
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="text-gray-800">
                {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
              </span>

              <div className="ml-2 bg-heather text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* 2. Center Section: Navigation + Search Bar */}
        {!isCompact && (
        <div
          className={`hidden md:flex flex-col items-center space-y-2 transition-opacity duration-200
          `}
        >

          {/* Navigation Tabs - Reduced spacing */}
          <div className="flex space-x-8 mb-1">
            <button className="text-[16px] font-medium text-gray-900 relative after:content-[''] after:absolute after:w-5 after:h-[2px] after:bg-black after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2">
              Stays
            </button>
            <button className="text-[16px] text-gray-500 hover:text-gray-800 transition-colors">Experiences</button>
            <button className="text-[16px] text-gray-500 hover:text-gray-800 transition-colors">Online Experiences</button>
          </div>

          {/* Search Bar */}
          <div className={`flex items-center border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all bg-palepink w-full sm:w-[650px] lg:w-[850px] max-w-full h-[66px] relative ${isCalendarOpen || isGuestPickerOpen ? 'bg-[#f7f7f7] border-transparent' : ''}`}>
            
            {/* Search Input */}
            <div 
              className="flex flex-col flex-[1.5] px-8 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
              onClick={() => inputRef.current.focus()}
            >
              <span className="text-[12px] font-bold text-gray-900 tracking-wide">Where</span>
              <input 
                ref={inputRef}
                type="text"
                placeholder="Search destinations"
                className="bg-transparent outline-none text-sm text-gray-500 placeholder-gray-400"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                  setIsCalendarOpen(true);
                  setIsGuestPickerOpen(false);
                  inputRef.current.blur();
                  }
                }}
              />
            </div>

            <div className="h-8 border-l border-gray-200"></div>

            {/* Date Picker Section */}
            <div 
              className={`flex flex-col flex-1 px-8 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors ${isCalendarOpen ? 'bg-white shadow-lg' : ''}`}
              onClick={() => {
                setIsCalendarOpen(!isCalendarOpen);
                setIsGuestPickerOpen(false);
              }}
            >
              <span className="text-[12px] font-bold text-gray-900 tracking-wide">When</span>
              <span className="text-sm text-gray-500 truncate">
                {startDate ? (endDate ? `${startDate} – ${endDate} Feb` : `Feb ${startDate}`) : "Add dates"}
              </span>

              {isCalendarOpen && (
                <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50">
                  <Calendar onSelect={(day) => {
                    if (!startDate || (startDate && endDate)) {
                      setStartDate(day);
                      setEndDate(null);
                    } else {
                      if (day < startDate) {
                        setEndDate(startDate);
                        setStartDate(day);
                      } else {
                        setEndDate(day);
                      }
                      setIsCalendarOpen(false);
                    }
                  }} />
                </div>
              )}
            </div>

            <div className="h-8 border-l border-gray-200"></div>

            {/* Guest Picker Section */}
            <div className="relative flex flex-1 items-center justify-between pl-8 pr-2 py-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors group">
              <div 
                className="flex flex-col flex-grow"
                onClick={() => {
                  setIsGuestPickerOpen(!isGuestPickerOpen);
                  setIsCalendarOpen(false);
                }}
              >
                <span className="text-[12px] font-bold text-gray-900 tracking-wide">Who</span>
                <span className="text-sm text-gray-500">
                  {totalGuests > 0 ? `${totalGuests} guests` : "Add guests"}
                </span>
              </div>

              {/* The Search Button stays inside the 'Who' section on the right */}
              <button 
                type="button"
                onMouseDown={() => {
                  onSearch(searchInput, startDate, endDate, totalGuests);
                  setIsCalendarOpen(false);
                  setIsGuestPickerOpen(false);
                }}
                className="bg-heather cursor-pointer hover:bg-opacity-90 text-white p-4 rounded-full transition-all flex items-center justify-center z-50 ml-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              {isGuestPickerOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsGuestPickerOpen(false)}></div>
                  <div className="absolute top-full mt-4 right-0 w-96 bg-white shadow-2xl rounded-3xl p-8 border border-gray-100 z-50">
                    <GuestOption label="Adults" desc="Ages 13+" type="adults" guests={guests} setGuests={setGuests} />
                    <GuestOption label="Children" desc="Ages 2–12" type="children" guests={guests} setGuests={setGuests} />
                    <GuestOption label="Infants" desc="Under 2" type="infants" guests={guests} setGuests={setGuests} />
                    <GuestOption label="Pets" desc="Service animal?" type="pets" guests={guests} setGuests={setGuests} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        )}
        

        {/* 3. User Actions */}
        <div className="flex-1 flex justify-end space-x-3 cursor-pointer">
          <button className="hidden lg:block text-[14px] font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
            Staycation your home
          </button>
          
          {/* Globe/Language Icon */}
          <div className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>

          {/* User Menu Trigger */}
          <div className="flex items-center border border-gray-300 rounded-full p-2  pl-3 hover:shadow-md cursor-pointer space-x-3 bg-white flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <div className="bg-gray-500 text-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
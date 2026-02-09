export const Calendar = ({ onSelect }) => {
  // an array [1, 2, 3...28] for February
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-2xl rounded-3xl p-6 border border-gray-100 z-50">
      <h4 className="font-bold text-lg mb-4 px-2">February 2026</h4>
      
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-bold text-gray-400">
        <div>SU</div><div>MO</div><div>TU</div><div>WE</div><div>TH</div><div>FR</div><div>SA</div>
      </div>

      {/* The actual days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map(day => (
          <button 
            key={day}
            type="button"
            onClick={() => onSelect(day)} // This tells the Navbar which day was clicked
            className="aspect-square flex items-center justify-center text-sm hover:bg-black hover:text-white rounded-full transition-all"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
const GuestOption = ({ label, desc, type, guests, setGuests }) => (
  <div className="flex items-center justify-between py-4 border-b last:border-0 border-gray-100">
    <div>
      <p className="font-semibold text-sm text-gray-900">{label}</p>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
    <div className="flex items-center space-x-3">
      <button 
        type="button"
        onClick={() => setGuests({...guests, [type]: Math.max(0, guests[type] - 1)})}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black disabled:opacity-30"
        disabled={guests[type] === 0}
      >–</button>
      <span className="text-sm font-medium w-4 text-center">{guests[type]}</span>
      <button 
        type="button"
        onClick={() => setGuests({...guests, [type]: guests[type] + 1})}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black"
      >+</button>
    </div>
  </div>
);

export default GuestOption;
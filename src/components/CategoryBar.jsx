const categories = [
  { label: 'Amazing pools', icon: '🏊‍♂️' },
  { label: 'Beachfront', icon: '🏖️' },
  { label: 'Cabins', icon: '🏡' },
  { label: 'Trending', icon: '🔥' },
  { label: 'Countryside', icon: '🚜' },
  { label: 'Skiing', icon: '⛷️' },
  { label: 'Design', icon: '🎨' },
];

const CategoryBar = ({ active, setCategory }) => {
  return (
    <div className="flex justify-start md:justify-center items-center space-x-6 overflow-x-auto scrollbar-hide py-2 bg-peachcream sticky top-[120px] z-40 px-6 border border-gray-200 shadow-sm rounded-full max-w-[100%] mx-auto mt-4">
      {categories.map((item, index) => (
        <div 
          key={index}
          onClick={() => setCategory(item.label)}
          className={`flex flex-col items-center min-w-fit flex-shrink-0 space-y-2 cursor-pointer px-4 py-2 transition-all rounded-full ${
            active === item.label
              ? 'bg-heather text-white shadow-md' // Active pill uses heather background
              : 'hover:bg-white/50 text-gray-600' // Inactive pill
          }`}
        >
          <span className="text-2xl">{item.icon}</span>
          <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
const categories = [
  { label: "Amazing pools", icon: "🏊‍♂️" },
  { label: "Beachfront", icon: "🏖️" },
  { label: "Cabins", icon: "🏡" },
  { label: "Trending", icon: "🔥" },
  { label: "Countryside", icon: "🚜" },
  { label: "Skiing", icon: "⛷️" },
  { label: "Design", icon: "🎨" },
];

const CategoryBar = ({ active, setCategory }) => {
  return (
    // Sticky wrapper
    <div className="sticky top-[120px] z-40 bg-peachcream mt-4 border border-gray-200 shadow-sm">

      {/* Horizontal scroll row */}
      <div className="flex gap-6 overflow-x-auto flex-nowrap scrollbar-hide py-2 px-4">

        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item.label)}
            className={`flex flex-col items-center flex-shrink-0 space-y-2 cursor-pointer px-4 py-2 transition-all rounded-full ${
              active === item.label
                ? "bg-heather text-white shadow-md"
                : "hover:bg-white/50 text-gray-600"
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CategoryBar;

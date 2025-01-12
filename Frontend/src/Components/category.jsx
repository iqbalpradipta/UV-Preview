import React from "react";

function Category() {
  const categories = [
    { name: "F&B", icon: "🍔" },
    { name: "Activity", icon: "🎨" },
    { name: "Apps", icon: "📱" },
    { name: "Beauty", icon: "💄" },
    { name: "Experience", icon: "🎢" },
    { name: "Game", icon: "🎮" },
    { name: "Health", icon: "🏥" },
    { name: "Invest", icon: "🌻" },
    { name: "Retail", icon: "🏬" },
    { name: "Topup & Bils", icon: "🧾" },
  ];
  return (
    <div className="p-10">
      <div className="text-lg font-semibold mb-4 text-center">Category</div>
      <div className="grid grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => handleClick(category.name)}
          >
            <div className="text-3xl">{category.icon}</div>
            <div className="text-sm font-medium text-gray-700 mt-2">
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;

import React from "react";

const Category = () => {
  //i asked chat gpt for assistance here for the efficient idea//
  const catgories = [
    { name: "Design", jobs: 47, color: "bg-blue-500 text-white" },
    { name: "marketing", jobs: 51, color: "bg-white text-black" },
    { name: "Engineering", jobs: 89, color: "bg-white text-black" },
    { name: "Mangement", jobs: 16, color: "bg-white text-black" },
    { name: "Finance", jobs: 23, color: "bg-white text-black" },
    { name: "Customer support", jobs: 34, color: "bg-white text-black" },
  ];
  return (
    <div className="bg-[#161c2d] text-white p-36 ">
      <h2 className="text-2xl font-bold mb-2">Jobs by Category</h2>
      <p className="text-gray-400 mb-8">
        With lots of unique blocks, you can easily build a page without coding.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
        {catgories.map((cat, i) => (
          <div
            key={i}
            className={` shadow-md px-4 py-4 h-[117px] flex flex-col justify-center
                 bg-white cursor-pointer border border-white-700 hover:scale-105 transition-transform ${cat.color}`}
          >
            <h3 className="text-lg font-semibold text-[#161c2d] ">
              {cat.name}
            </h3>
            <p className="text-sm mt-2 text-[#161c2d]">{cat.jobs} jobs</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

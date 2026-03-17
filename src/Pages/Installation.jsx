import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setInstalled(savedList);
  }, []);
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updateList = existingList.filter((p) => p.id !== id);
    setInstalled(updateList);
    localStorage.setItem("wishlist", JSON.stringify(updateList));
  };

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installed].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installed].sort((a, b) => b.size - a.size);
    } else {
      return installed;
    }
  })();
  return (
    <div>
      <div className="text-center mt-10 mb-4">
        <h1 className="font-bold text-5xl mb-4">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-14">
        <p className="font-semibold text-2xl">
          <span>{sortedItem.length}</span> Apps Found
        </p>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none" disabled>
              Sort By Size
            </option>
            <option value="size-asc">
              Low <ArrowRight className="w-3" /> High
            </option>
            <option value="size-desc">
              High <ArrowRight className="w-3" /> Low
            </option>
          </select>
        </label>
      </div>

      {sortedItem.map((p) => (
        <div
          key={p.id}
          className="w-full max-w-6xl mx-auto px-4 md:px-8 mt-5 mb-2.5"
        >
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gray-300 rounded-md">
                <img src={p.image} alt="image" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800">
                  {p.companyName}
                </h2>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <span className="text-green-600 font-semibold">
                    {p.downloads}M
                  </span>
                  <span className="text-orange-500">★ {p.ratingAvg}</span>
                  <span>{p.size}MB</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemove(p.id)}
              className="bg-[#00D390] text-white py-3 rounded-sm px-4 font-semibold cursor-pointer"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;

import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";

const AppsPreview = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const app = apps.find((a) => a.id === Number(id));
  if (!app) {
    return <div>App not found</div>;
  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* App Header */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row gap-6 items-start">
          {/* App Icon */}
          <img src={image} alt="App Icon" className="w-28 h-28 rounded-xl" />

          {/* App Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Developed by <span className="text-blue-600">{companyName}</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-4 text-sm">
              <Stat title="Downloads" value={`${downloads}M`} />
              <Stat title="Avg Rating" value={`${ratingAvg} ★`} />
              <Stat title="Reviews" value={reviews} />
            </div>
          </div>

          {/* Install Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
            Install Now ({size} MB)
          </button>
        </div>
        Ratings
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Ratings</h2>

          {ratings.map((r, index) => (
            <RatingBar
              key={index}
              star={r.name}
              percent={(r.count / reviews) * 100}
            />
          ))}
        </div>
        {/* Description */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Components ---------- */

function Stat({ title, value }) {
  return (
    <div>
      <p className="font-semibold">{value}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  );
}

function RatingBar({ star, percent }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-12 text-sm">{star}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-3">
        <div
          className="bg-emerald-400 h-3 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default AppsPreview;

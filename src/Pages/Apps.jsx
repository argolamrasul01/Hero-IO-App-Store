import React, { useState } from "react";
import useApps from "../hooks/useApps";
import Card from "./Card";
import AppNotFound from "./AppNotFound";
const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const appSearch = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  if (appSearch.length === 0) {
    return <AppNotFound />;
  }
  return (
    <div>
      <div>
        <div className="text-center mt-10 mb-4">
          <h1 className="font-bold text-5xl mb-4">Our All Applications</h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mx-14 mt-8">
            <p className="font-semibold text-2xl">
              <span>({appSearch.length})</span> Apps Found
            </p>
            <label className="input">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="search Apps"
              />
            </label>
          </div>
        </div>
        {/* All apps */}
        <div className="max-w-full mx-auto overflow-x-auto w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appSearch.map((app) => {
              return <Card key={app.id} app={app} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;

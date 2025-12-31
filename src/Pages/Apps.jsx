import React from "react";
import useApps from "../hooks/useApps";
import Card from "./Card";
const Apps = () => {
  const { apps, loading, error } = useApps();
  return (
    <div>
      <div>
        <div>
          <h1>Our All Applications</h1>
          <p>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div>
          <div>
            <p>({apps.length}) Apps Found</p>

            <input type="text" placeholder="search Apps" />
          </div>
        </div>
        <div className="max-w-full mx-auto overflow-x-auto w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => {
              return <Card key={app.id} app={app} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;

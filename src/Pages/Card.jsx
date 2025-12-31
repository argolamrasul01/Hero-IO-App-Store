import React from "react";

const Card = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;
  return (
    <div>
      <div className="card bg-base-100 max-w-full shadow-sm rounded-lg overflow-hidden hover:scale-105 transition ease-in-out">
        <figure className="w-full h-48 object-cover">
          <img src={image} alt={title} className="w-full object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title ml-2.5">{title}</h2>

          <div className="card-actions justify-between mt-2">
            <div className="badge flex items-center gap-1">
              <img
                className="w-3"
                src="/src/assets/icon-downloads.png"
                alt=""
              />
              {downloads}M
            </div>
            <div className="badge flex items-center gap-1">
              <img className="w-3" src="/src/assets/icon-ratings.png" alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

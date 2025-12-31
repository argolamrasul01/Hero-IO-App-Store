import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div>
      <div className="mx-40 my-10">
        <img
          className="mx-auto mb-4"
          src="/src/assets/App-Error.png"
          alt="error"
        />
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-2">OPPS!! APP NOT FOUND</h2>
          <p className="text-[#627382] mb-4">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link
            onClick={() => window.location.reload()}
            className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)]
             text-white px-6 py-2 rounded
             hover:opacity-90 transition"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;

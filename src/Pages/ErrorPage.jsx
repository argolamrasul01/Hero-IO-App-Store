import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="m-40 mt-6">
        <img
          className="mx-auto mb-4"
          src="/src/assets/error-404.png"
          alt="error"
        />
        <div className="text-center">
          <h2 className="font-bold text-4xl mb-2">Oops, page not found!</h2>
          <p className="text-[#627382] mb-4">
            The page you are looking for is not available.
          </p>
          <Link
            className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)]
             text-white px-6 py-2 rounded
             hover:opacity-90 transition"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

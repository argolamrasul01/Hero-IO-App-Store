import React from "react";
import Card from "./Card";
import useApps from "../hooks/useApps";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-20 mb-10 mt-20">
        <h1 className="text-7xl font-bold text-center mb-2.5">
          We Build <br />{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center text-[#627382] mb-20">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div>
          <button className="btn bg-white mr-2">
            <img
              className="w-3"
              src="/src/assets/Google_Play_2022_icon.svg.png"
              alt=""
            />
            Google Play
          </button>
          <button className="btn bg-white">
            <img
              className="w-4"
              src="/src/assets/App_Store_(iOS).svg.png"
              alt=""
            />
            App Store
          </button>
        </div>
      </div>
      {/* Hero img */}
      <div>
        <img
          className="mx-auto md:w-xl w-md"
          src="/src/assets/hero.png"
          alt="Hero img"
        />
      </div>
      <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white p-20">
        <div>
          <h2 className="font-bold text-5xl text-center mb-10">
            Trusted by Millions, Built for You
          </h2>
        </div>
        <div className="flex justify-center items-center gap-20 text-center">
          <div>
            <p>Total Downloads</p>
            <h1 className="text-6xl font-extrabold py-4">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="text-6xl font-extrabold py-4">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="text-6xl font-extrabold py-4">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* Trending Apps */}
      <div>
        <div className="m-20">
          <h2 className="text-4xl mb-4 font-bold text-center">Trending Apps</h2>
          <p className="text-center text-[#627382] mb-10">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="max-w-full mx-auto overflow-x-auto w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingApps.map((app) => {
              return <Card key={app.id} app={app} />;
            })}
          </div>
        </div>
      </div>
      {/* Btn show all */}
      <div className="flex justify-center items-center mb-10">
        <Link
          to="/apps"
          className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2_100%)]
             text-white px-6 py-2 rounded
             hover:opacity-90 transition"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;

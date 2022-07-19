import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Categories from "../components/Categories/Categories";
import Hero from "../components/hero/Hero";

const links = [
  {
    title: "Public campsites",
  },
  {
    title: "Private campsites",
  },
  {
    title: "Fishing spots",
  },
  {
    title: "Activities",
  },
];
const routes = [
  {
    location: "/map",
    name: "Map",
  },
];

const Home = () => {
  return (
    <>
      <Navigation items={routes} />
      <Categories items={links} />
      <Hero />
    </>
  );
};

export default Home;

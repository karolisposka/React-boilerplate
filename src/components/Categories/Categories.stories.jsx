import React from "react";
import Categories from "./Categories";

export default {
  title: "components/Categories",
  components: Categories,
};

const links = [
  {
    title: "Public Campsites",
  },
  {
    title: "Private Campsites",
  },
  {
    title: "Fishing spots",
  },
  {
    title: "Activities",
  },
];

export const Primary = () => {
  return <Categories items={links} />;
};

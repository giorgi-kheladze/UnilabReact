import React from "react";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
import NewArrivals from "../components/NewArrivals";
import TopSellings from "../components/TopSellings";
import Style from "../components/Style";
import Revies from "../components/Revies";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSellings />
      <Style />
      <Revies />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Heder/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      <ScrollUpButton />
    </div>
  );
};

export default Home;

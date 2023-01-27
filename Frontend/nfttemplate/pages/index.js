import React from "react";
import Style from "../styles/index.module.css";
import { HeroSection, Service, Subscribe, Title, Category, Filter, AudioLive, FollowerTab,Slider, Brand} from "../components/componentindex";
import {BigNFTSlider} from "../components/componentindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider/>
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <AudioLive/>
      <FollowerTab />
      <Slider />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category/>
      <Subscribe/>
      <Brand />
    </div>
  );
};

export default Home;

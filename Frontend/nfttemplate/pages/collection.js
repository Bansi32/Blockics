import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img"
import {
  Banner,
  NFTCardTwo,
  CollectionProfile,
} from "../collectionPage/collectionIndex";

import { Slider, Brand } from "../components/componentindex";
import {Filter} from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      {/* <Banner bannerImage={images.creatorbackground1} /> */}
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <CollectionProfile/>
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
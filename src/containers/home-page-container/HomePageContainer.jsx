import React from "react";

import { HomeHeroSection } from "@components/home/hero-section/HomeHeroSection";
import { FeaturedProducts } from "./featured-products/FeaturedProducts";
import { OnSaleSection } from "@components/home/on-sale-section/OnSaleSection";
import LatestNewsSection from "@components/home/latest-news-section/LatestNewsSection";

const HomePageContainer = () => {
  return (
    <>
      <HomeHeroSection />
      <FeaturedProducts />
      <OnSaleSection />
      <LatestNewsSection />
    </>
  );
};

export { HomePageContainer };

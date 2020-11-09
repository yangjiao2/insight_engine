import React from "react";
// import sections
import SearchFeature from "../components/sections/SearchFeature";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

import Carousel from "../../src/components/elements/Carousel";
import CarouselItem from "../../src/components/elements/CarouselItem";

const Home = () => {
  return (
    <>
      <Cta split />

      <SearchFeature
        className="illustration-section-01"
        sectionInner
        shrinkInner
      />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      /> */}
      {/* <Testimonial topDivider /> */}
    </>
  );
};

export default Home;

import React from "react";
import SingleFeature from "./SingleFeature";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const features = [
  {
    icon: "IoRocketOutline",
    title: "Free Shipping",
    description: "Free Shipping for orders over ₹130",
  },
  {
    icon: "IoShieldCheckmarkOutline",
    title: "Money Guarantee",
    description: "Within 30 days for an exchange.",
  },
  {
    icon: "IoCardOutline",
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
  {
    icon: "IoTimerOutline",
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeatureList = () => {
  return (
    <section>
      <div className="container mx-auto px-12 py-18 max-lg:py-16 max-lg:px-5">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={false}
          arrows={false}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={600}
          containerClass="carousel-container"
          itemClass="px-3"
        >
          {features &&
            features.map((feature) => (
              <SingleFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeatureList;

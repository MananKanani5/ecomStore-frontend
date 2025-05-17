import React from "react";
import SingleFeature from "./SingleFeature";

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

const FeatureList = () => {
  return (
    <section>
      <div className="container mx-auto flex max-lg:flex-col items-center justify-between gap-2 px-12 py-18 max-lg:py-12 max-lg:px-5">
        {features &&
          features.map((feature) => (
            <SingleFeature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
      </div>
    </section>
  );
};

export default FeatureList;

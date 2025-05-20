import React from "react";
import SingleBanner from "./SingleBanner";

const banners = [
  {
    id: 1,
    image:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/m1_banner_01.jpg",
    title: "Wishpers of Timeless Fashion",
    subTitle: "Effortless Elegence",
    buttonText: "Shop Now",
    buttonLink: "/products",
    alignment: "right",
  },
  {
    id: 2,
    image:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/m1_banner_02.jpg",
    title: "Urban Edge Meets lassic legance",
    subTitle: "Sale",
    buttonText: "Shop Now",
    buttonLink: "/products",
    alignment: "center",
  },
  {
    id: 3,
    image:
      "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2024/12/m1_banner_03.jpg",
    title: "Joyful Journeys Wardrobe",
    subTitle: "Timeless Styles",
    buttonText: "Shop Now",
    buttonLink: "/products",
    alignment: "left",
  },
];

const BannerList = () => {
  return (
    <section className="container mx-auto flex max-lg:flex-col gap-5 justify-between px-12 pb-18 max-lg:px-5">
      {banners.map((banner) => (
        <SingleBanner
          key={banner.id}
          title={banner.title}
          subTitle={banner.subTitle}
          buttonText={banner.buttonText}
          buttonLink={banner.buttonLink}
          image={banner.image}
          alignment={banner.alignment}
        />
      ))}
    </section>
  );
};

export default BannerList;

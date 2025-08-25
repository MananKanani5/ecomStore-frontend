import React from "react";
import PageHeader from "../components/PageHeader";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";

export const metadata = {
  title: "ecomStore | About Us",
  description: "One Stop Shop for All Your Needs",
};

const aboutDetails = {
  tagline:
    "Your One-Stop Destination for Fashion That Inspires, Empowers, and Elevates Your Style Every Day.",
  img1: "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2025/02/ab_banner_01.jpg",
  img2: "https://bunny-wp-pullzone-nhuiyso62z.b-cdn.net/wp-content/uploads/2025/02/ab_banner_02.jpg",
  img3: "https://naturya.novaworks.net/wp-content/uploads/2024/12/m1_video_bg-scaled.jpg",
  about: `At ecomStore, we believe in the transformative power of fashion and its ability to shape not only the way you look, but also the way you feel. <br /> <br /> Every collection we curate is thoughtfully designed to inspire confidence, allowing individuals to embrace their uniqueness and showcase their personal style. We aim to make fashion more than just clothing—it's about self-expression, identity, and the joy that comes with discovering pieces that truly resonate with you. <br /> <br /> Our commitment extends beyond trends. We carefully source the finest materials, emphasizing both quality and sustainability, ensuring that every product you choose stands the test of time.`,
  counter: [
    {
      targetNumber: 450,
      duration: 1000,
      title: "Premium Products",
    },
    {
      targetNumber: 25,
      duration: 500,
      title: "Years of Experience",
    },
    {
      targetNumber: 3600,
      duration: 1500,
      title: "Satisfied Customers",
    },
    {
      targetNumber: 29,
      duration: 750,
      title: "Awards Gained",
    },
  ],
};

const page = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About", link: "/about" },
        ]}
        bgImage="/about/page_header_bg.jpg"
      />
      <section className="container mx-auto flex flex-col max-lg:flex-col gap-5 justify-between px-12 py-10 max-lg:px-5">
        <h2 className="text-5xl leading-normal mb-5 animate__animated animate__fadeInUp max-lg:text-2xl">
          {aboutDetails.tagline}
        </h2>
        <div className="flex gap-10 overflow-hidden max-lg:flex-col">
          <Image
            src="/about/ab_banner_01.jpg"
            alt="About Us"
            className="w-full object-cover animate__animated animate__fadeInUp"
            width={100}
            height={491}
            unoptimized
          />
          <Image
            src="/about/ab_banner_02.jpg"
            alt="About Us"
            className="w-full object-cover animate__animated animate__fadeInUp"
            width={100}
            height={491}
            unoptimized
          />
        </div>

        <div className="flex gap-10 items-center mt-5 max-lg:flex-col">
          <Image
            src="/about/m1_video_bg-scaled.jpg"
            alt="About Us"
            className="w-1/2 object-contain max-lg:w-full"
            width={100}
            height={100}
            unoptimized
          />
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: aboutDetails.about }}
          />
        </div>
      </section>

      <div className="flex gap-10 justify-evenly py-18 w-full bg-[#a79d80] text-white max-lg:flex-col max-lg:items-center">
        {aboutDetails.counter.map((counter, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <AnimatedCounter
              targetNumber={counter.targetNumber}
              duration={counter.duration}
              className="text-5xl font-semibold"
            />
            <p className="text-lg mt-2">{counter.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;

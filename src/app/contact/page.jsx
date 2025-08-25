import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "ecomStore | Contact Us",
  description: "One Stop Shop for All Your Needs",
};

const contactDetails = {
  img: "https://naturya.novaworks.net/wp-content/uploads/2025/02/contact_bg.jpg",
  contact: [
    {
      type: "Address",
      values: ["PO Box 16122 Collins Street West Victoria 8007 Australia"],
    },
    { type: "Phone", values: ["+1 234 567 890"] },
    { type: "Email", values: ["info@ecomstore.com"] },
  ],
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.681432580698!2d69.61909877762375!3d21.637333915488277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b58d0c2a831d7f1%3A0xf18abc3fee3a9107!2sManan%20Kanani%20-%20Full%20Stack%20Developer%20%7C%20website%20designer%20in%20Gujarat!5e0!3m2!1sen!2sin!4v1756120392824!5m2!1sen!2sin",
};

const page = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/contact" },
        ]}
        bgImage="/about/page_header_bg.jpg"
      />
      <section className="container mx-auto flex flex-col max-lg:flex-col gap-5 justify-between px-12 py-10 max-lg:px-5">
        <div className="flex gap-10 max-lg:flex-col py-12">
          {contactDetails.contact.map((item, index) => (
            <ContactCard key={index} type={item.type} values={item.values} />
          ))}
        </div>
        <div className="flex max-lg:flex-col">
          <div className="flex flex-col justify-between w-1/2 max-lg:w-full max-lg:p-0 pr-8">
            <div>
              <h2 className="text-3xl mb-3 max-lg:text-2xl">
                Get in Touch with Us
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum. Curabitur id risus nec eros
                efficitur facilisis.
              </p>
            </div>
            <ContactForm className="px-12 py-20 max-lg:py-8 max-lg:px-5  bg-[#f5f2ec] rounded-sm" />
          </div>
          <div className="pl-8 max-lg:p-0 max-lg:mt-8">
            <Image
              src={contactDetails.img}
              alt="Contact Us"
              className="w-full object-cover"
              width={100}
              height={500}
              unoptimized
            />
          </div>
        </div>
      </section>
      <div className="w-full">
        <iframe
          src={contactDetails.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-96 max-lg:h-80"
        />
      </div>
    </>
  );
};

export default page;

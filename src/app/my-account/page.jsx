import React from "react";
import PageHeader from "../components/PageHeader";

const Page = () => {
  return (
    <section className="my-account">
      <PageHeader
        title="My Account"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "My Account", link: "/my-account" },
        ]}
      />
    </section>
  );
};

export default Page;

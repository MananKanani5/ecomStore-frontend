import React from "react";

const PageHeader = ({ title, breadcrumbs, bgImage }) => {
  return (
    <>
      <section className="page-header h-60 max-lg:h-40 w-full bg-gray-100">
        <div className="container mx-auto h-full flex flex-col justify-center gap-2 px-12 py-2 max-lg:px-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          {breadcrumbs && (
            <ul className="flex items-center gap-2">
              {breadcrumbs.map((breadcrumb, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  <a href={breadcrumb.link}>{breadcrumb.label}</a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="ml-2 text-gray-500">/</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default PageHeader;

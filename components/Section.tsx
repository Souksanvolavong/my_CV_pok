import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className=" flex flex-col px-4 py-2 md:py-16 "
    >
      {/* <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">{title}</h2> */}
      <div className="text-gray-700">{children}</div>
    </section>
  );
};

export default Section;

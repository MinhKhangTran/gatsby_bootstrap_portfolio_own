import React from "react";

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <h2 className="text-center text-primary heading_lvl_2">{title}</h2>
      <p className="lead text-center text-primary">{subtitle}</p>
    </>
  );
};

export default Title;

import React from "react";

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <h2 className="text-primary heading_lvl_2 fw-bold">{title}</h2>
      <p className="lead text-primary heading_subtitle">{subtitle}</p>
    </>
  );
};

export default Title;

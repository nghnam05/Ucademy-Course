import React from "react";

const HeadingTypography = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-2xl font-semibold text-secondary">{children}</h1>;
};

export default HeadingTypography;

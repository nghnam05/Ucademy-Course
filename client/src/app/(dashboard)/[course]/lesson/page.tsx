"use client";

import { PageProps } from "@/app/types/pageProps";
import React from "react";

const page = ({ params, searchParams }: PageProps) => {
  console.log("params", params);
  console.log("searchParams", searchParams);
  return <div>page</div>;
};

export default page;

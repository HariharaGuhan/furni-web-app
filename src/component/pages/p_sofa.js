import React from "react";
import ProductCategory from "./productCategory";
import sofaData from "./product.json";

export default function Sofa() {
  const sofas = sofaData.filter((item) => item.category === "Sofa");

  return <ProductCategory category="Sofa" data={sofas} />;
}

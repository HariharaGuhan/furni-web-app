import React from "react";
import ProductCategory from "./productCategory";
import chairData from "./product.json";

export default function Chair() {
  const chairs = chairData.filter((item) => item.category === "Chair");

  return <ProductCategory category="Chair" data={chairs} />;
}

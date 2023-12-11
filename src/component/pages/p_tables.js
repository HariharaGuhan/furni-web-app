import React from "react";
import ProductCategory from "./productCategory";
import tableData from "./product.json";

export default function Tables() {
  const tables = tableData.filter((item) => item.category === "Tables");

  return <ProductCategory category="Tables" data={tables} />;
}

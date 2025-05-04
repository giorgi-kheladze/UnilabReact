import React from "react";
import ProductView from "../components/ProductView";
import Similar from "../components/Similar";
import AllRevius from "../components/AllRevius";

const ProductDetail = () => {
  return (
    <div>
      <ProductView />
      <AllRevius />
      <Similar />
    </div>
  );
};

export default ProductDetail;

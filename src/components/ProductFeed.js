import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div
      className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4 md:-mt-40 mx-auto"
    >
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Products = ({ initialProducts }: any) => {
  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id: number) => {
    const updated = products.filter((p: any) => p.id !== id);
    setProducts(updated);
  };

  const sortByPrice = () => {
    const sorted = [...products].sort(
      (a: any, b: any) => a.price - b.price
    );
    setProducts(sorted);
  };

  return (
    <div>
      <h2>Products (SSR + CSR)</h2>

      <button onClick={sortByPrice}>Sort by Price</button>

      {products.slice(0, 5).map((product: any) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>

          {/* ✅ Navigate with Param */}
          <Link href={`/product/${product.id}`}>
            <button>View Details</button>
          </Link>

          <button onClick={() => removeProduct(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

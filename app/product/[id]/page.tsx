import React from "react";

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

/* ✅ SERVER ACTION */
async function addToCart(formData: FormData) {
  "use server";

  const productId = formData.get("productId");

  console.log("Added to cart:", productId);

  // 👉 Here you would normally:
  // Save to DB / Session / Cookies / Cart API
}

const ProductDetails = async ({ params }: any) => {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
      <p>{product.description}</p>

      {/* ✅ BUTTON USING SERVER ACTION */}
      <form action={addToCart}>
        <input type="hidden" name="productId" value={product.id} />

        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default ProductDetails;

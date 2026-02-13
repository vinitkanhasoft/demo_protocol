// components/ProductList.tsx
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  // ✅ Simulate slow API
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div>
      {products.map((p: any) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}

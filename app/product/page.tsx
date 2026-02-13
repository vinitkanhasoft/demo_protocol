// app/products/page.tsx
import { Suspense } from "react";
import ProductsSkeleton from "./ProductsSkeleton ";
import ProductList from "./ProductList";


export default function ProductsPage() {
  return (
    <div>
      {/* ✅ FAST CONTENT */}
      <h1>Products Page 🚀</h1>

      <div>
        <button>All</button>
        <button>Electronics</button>
        <button>Clothing</button>
      </div>

      {/* ✅ STREAMED CONTENT */}
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

// components/ProductsSkeleton.tsx
export default function ProductsSkeleton() {
  return (
    <div>
      <p>Loading products... ⏳</p>

      <div style={{ opacity: 0.5 }}>
        <p>Product loading...</p>
        <p>Product loading...</p>
        <p>Product loading...</p>
      </div>
    </div>
  );
}
 
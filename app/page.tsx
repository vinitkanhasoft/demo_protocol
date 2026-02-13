import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Hello</h1>

      <Link href="/product">
        <button>Go to Product Page</button>
      </Link>
    </div>
  );
};

export default Page;

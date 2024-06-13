import React, { useEffect } from "react";

function Products() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.location.href = "/login";
    }
  });
  return <div>Products</div>;
}

export default Products;

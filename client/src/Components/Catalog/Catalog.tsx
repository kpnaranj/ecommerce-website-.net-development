import { Fragment,useState, useEffect } from "react";
import { Product } from "../../Models/products";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    let storageTheme: string = localStorage.getItem("theme") || "";
    document.documentElement.setAttribute("data-theme", storageTheme);
  }, []);
  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
};

export default Catalog;

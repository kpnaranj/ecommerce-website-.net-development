import { Fragment, useState, useEffect } from "react";
import { Product } from "../../Models/products";
import ProductList from "./ProductList";
/* import { Button } from "@mui/material";
import { v4 as uuid } from "uuid"; */

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
};

export default Catalog;

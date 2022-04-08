import { Fragment, useState, useEffect } from "react";
import agent from "../../api/agent";
import { Product } from "../../Models/products";
import ProductList from "./ProductList";
/* import { Button } from "@mui/material";
import { v4 as uuid } from "uuid"; */

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
};

export default Catalog;

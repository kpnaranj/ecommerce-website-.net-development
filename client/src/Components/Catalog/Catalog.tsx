import { Fragment, useState, useEffect } from "react";
import agent from "../../api/agent";
import { Product } from "../../Models/products";
import LoadingComponent from "../Layout/LoadingComponent";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Loading products..." />;

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
};

export default Catalog;

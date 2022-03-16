import { Fragment } from "react";
import { Product } from "../../Models/products";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <Fragment>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add product
      </Button>
    </Fragment>
  );
};

export default Catalog;

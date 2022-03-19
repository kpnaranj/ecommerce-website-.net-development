import { Fragment } from "react";
import { Product } from "../../Models/products";
import { List } from "@mui/material";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Fragment>
      <List>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </List>
    </Fragment>
  );
};

export default ProductList;

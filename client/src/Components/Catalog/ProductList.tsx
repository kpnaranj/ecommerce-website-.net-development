import { Fragment } from "react";
import { Product } from "../../Models/products";
import ListGroup from 'react-bootstrap/ListGroup';
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Fragment>
      <ListGroup as="ul">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ListGroup>
    </Fragment>
  );
};

export default ProductList;

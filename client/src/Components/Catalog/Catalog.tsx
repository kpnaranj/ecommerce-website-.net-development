import { Fragment } from "react";
import { Product } from "../../Models/products";

interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <Fragment>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <button onClick={addProduct}>Add product</button>
    </Fragment>
  );
};

export default Catalog;

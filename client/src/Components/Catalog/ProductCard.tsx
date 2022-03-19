import { Fragment } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Product } from "../../Models/products";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Fragment>
      <ListGroup.Item as="li" className="d-flex align-items-center align-content-between flex-wrap">
        <Image
          className="img-fluid"
          width={40}
          height={40}
          alt={product.name}
          src={product.pictureUrl}
          roundedCircle={true}
        />
        <span>{product.name} - {product.price}</span>
      </ListGroup.Item>
    </Fragment>
  );
};

export default ProductCard;

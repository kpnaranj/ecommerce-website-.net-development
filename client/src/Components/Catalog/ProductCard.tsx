import { Fragment } from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../Models/products";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={product.pictureUrl} />
        </ListItemAvatar>
        <ListItemText>
          {product.name} - {product.price}
        </ListItemText>
      </ListItem>
    </Fragment>
  );
};

export default ProductCard;

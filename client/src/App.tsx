import { useState, useEffect, Fragment } from "react";
// Components
import Catalog from "./Components/Catalog/Catalog";
// Models
import { v4 as uuid } from "uuid";
import { Product } from "./Models/products";
import { Typography } from "@mui/material";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: uuid(),
        name: "product" + (prevState.length + 1),
        price: prevState.length + 100,
        brand: "A new brand",
        description: "This is description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  };

  return (
    <Fragment>
      <Typography variant="h1">Ecommerce Website</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </Fragment>
  );
};

export default App;

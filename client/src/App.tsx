import { useState, useEffect } from "react";
// Components
import Catalog from "./Components/Catalog/Catalog";
// Models
import { v4 as uuid } from "uuid";
import { Product } from "./Models/products";

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
    <div>
      <h1 style={{ color: "blue" }}>Ecommerce Website</h1>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
};

export default App;

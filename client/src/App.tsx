import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const [products, setProducts] = useState([
    { id: uuid(), name: "product1", price: 100.0 },
    { id: uuid(), name: "product2", price: 200.0 },
  ]);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: uuid(),
        name: "product" + (prevState.length + 1),
        price: prevState.length + 100,
      },
    ]);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Ecommerce Website</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </div>
  );
};

export default App;

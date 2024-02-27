import { useEffect, useState } from "react";
import { Card, Button, CardFooter } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const dispatch = useDispatch()
  const addTOCart = (product) =>{

    dispatch(add(product))

  }
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100" style={{ width: "18rem" }}  key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "250px", height: " 150px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR : {product.price}</Card.Text>
        </Card.Body>
        <CardFooter>
          <Button variant="primary" onClick={() => addTOCart(product)}>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  ));
  return (
    <div>
      <h3>Products Dashboard</h3>
      <div className="row" >{cards}</div>
    </div>
  );
};
export default Product;

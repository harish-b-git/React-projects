import { Button, Card, CardFooter } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () =>{

    const cartProducts = useSelector(state => state.cart)

    const dispatch = useDispatch()
    const RemoveItem = (id) =>{
        dispatch(remove(id))
    }

    const cards = cartProducts.map((product) => (
        <div className="col-md-4" style={{ marginBottom: "15px" }}>
          <Card className="h-150 " style={{ width: "28rem" }} key={product.id} >
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
              <Button variant="danger" onClick={() => RemoveItem(product.id)}>Remove Item</Button>
            </CardFooter>
          </Card>
        </div>))
    return(
        <div className="row">
            {cards}
        </div>
    )
}
export default Cart;
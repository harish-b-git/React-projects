import { useEffect, useState } from "react";
import './styles.css'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const[disableButton,setDisableButton] = useState(false)

  async function FetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      
      if (result && result.products && result.products.length) {
        setProducts((preData)=> [...preData,...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    FetchProducts();
  }, [count]);

  useEffect(() =>{
    if(products && products.length === 100){
        setDisableButton(true)
    }
  },[products])
  if (loading) {
    return <div>Loading Data !! Please wait.............</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((item) => (
              <div className="product" >
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load more products</button>
        {
            disableButton ? <p> you have reached to 100 products</p> : null
        }
      </div>
    </div>
  );
}

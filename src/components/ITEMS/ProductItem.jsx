import { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import Footer from "../FOOTER/Footer";
import Navbar from "../NAVBAR/Navbar";
const ProductItem = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  //  const navi = useNavigate();
  // console.log(product);

  const Fatchdata = () => {
    axios.get("https://fakestoreapi.com/products/" + params?.id).then((res) => {
      res.data.quantity = 1;
      setProduct(res.data);
    });
  };

  useEffect(() => {
    Fatchdata();
  }, []);

  // incremnet items 
  const increment = () => {
    const newProduct = {
      ...product, 
      quantity: product.quantity + 1,
     };
    setProduct(newProduct);
  };

  // decrement items
  const decrement = () => {
    if (product?.quantity > 1) {
      const newProduct = { 
        ...product,
         quantity: product.quantity - 1
         };
      setProduct(newProduct);
    }
  };

  // user data store in localstorage 
  const store = () =>{
    const exisproduct = localStorage.getItem("product");
    let products = exisproduct ? JSON.parse(exisproduct):[];
     products.push(product)
    localStorage.setItem("product",JSON.stringify(products))
  }

  return (
    <>
    <Navbar data={product.quantity}/>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-content-center justify-content-center mt-2">
            <img src={product?.image} alt="image" className="w-50" />
          </div>
          <div className="col-md-6 mt-4">
            <h1 className="">{product.title}</h1>
            <h4 className=" fs-6">{product.description}</h4>
            <div className="d-flex justify-content-between mx-3 mt-4">
              <h6 className="fw-bold fs-5 mt-2"> &#8377;{product.price*product.quantity}</h6>
              <div className="text-center">
                <button className="btn btn-success" onClick={() => increment()}>
                  +
                </button>
                <span className="p-4 fw-bold fs-5">{product?.quantity}</span>
                <button className="btn btn-danger" onClick={() => decrement()}>
                  -
                </button>
              </div>
              <h6 className="fw-bold fs-5 mt-2">
                ⭐⭐⭐⭐{product?.rating?.rate}
              </h6>
            </div>
            <div className="mt-4 d-flex justify-content-between mx-3">
              <button className="btn btn-primary" onClick={()=>store()}>AddCart</button>
              {/* <button className="btn btn-danger" onClick={()=>getitem()}>Buy</button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductItem;

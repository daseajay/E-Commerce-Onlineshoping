import axios from "axios";
import Home from "../HOME/Home";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProduct] = useState([]);
  
  // filter items 
  const [data, setData] = useState(products);

  const filterFn = (e) =>{
    const updatelist = products.filter((a)=>a.category === e)
    setData(updatelist)
  }
  // filter items end 

  console.log(products);

  const Fatchdata = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data);
      // update the filter items
      setData(res.data)
      // update the filter itmes
    });
  };

  useEffect(() => {
    Fatchdata();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="mt-4 d-flex justify-content-center gap-2">
          <button className="btn btn-success text-capitalize" onClick={()=>setData(products)}>All</button>
          <button className="btn btn-success text-capitalize" onClick={()=>filterFn("men's clothing")}>men's clothing</button>
          <button className="btn btn-success text-capitalize" onClick={()=>filterFn("women's clothing")}>women's clothing</button>
          <button className="btn btn-success text-capitalize" onClick={()=>filterFn("jewelery")}>jewelery</button>
          <button className="btn btn-success text-capitalize" onClick={()=>filterFn("electronics")}>electronics</button>
        </div>
        <div className="row">
          {data.map((items) => (
            <div className="col-lg-3 col-md-4 col-6 mt-3">
              <div className=" rounded-3 shadow" key={items.id}>
                <div className="text-center my-3">
                 <img
                    src={items.image}
                    className="card-img-top my-2 w-75"
                    height={200}
                    alt="img"
                  />
                </div>
                <h2 className="fs-5 mx-3 fw-bold">
                  {items.title.slice(0, 10)}
                </h2>
                <div className="d-flex justify-content-between mx-3">
                  <p className="fw-bold">&#8377;{items.price}</p>
                  <p className="fw-bold">
                    &#x2605; &#x2605; {items.rating.rate}
                  </p>
                </div>
                <Link to={`/item/${items.id}`}><button className="btn btn-outline-success mx-3 my-2">
                  Shop Now
                </button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

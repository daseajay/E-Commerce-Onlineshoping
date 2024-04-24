import { useState } from "react";
import Footer from "../FOOTER/Footer";
import Navbar from "../NAVBAR/Navbar";
import { MdDeleteSweep } from "react-icons/md";
import { FaFastBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {

  const items = JSON.parse(localStorage.getItem("product"));

  const [getdata, setGetdata] = useState(items);

    // increce the total amount
  const totalamount = getdata?.map((item)=> item.price * item.quantity)
  const totalvalue = totalamount?.reduce((acc,pri)=>acc+pri,0)

  // increse the total quantity
  const totalquanti = getdata?.map((qu) => qu.quantity)
  const QuantityValue = totalquanti?.reduce((acc, qun) => acc + qun,0);

  // delete items in cart

  const handleDelete = (id) => {
    const updatedItems = getdata.filter((item) => item.id !== id);
    setGetdata(updatedItems);
    localStorage.setItem("product", JSON.stringify(updatedItems));
  };

  // show the  toasty msg your order is successfully
  const notfy = () =>{
    setGetdata([])
    localStorage.removeItem("product")
   toast.success("your order successfull")
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row mt-5 ">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getdata?.map((items) => (
                  <tr key={items?.id}>
                    <td>{items?.id}</td>
                    <td>
                      <img src={items?.image} alt="" width={50} />
                    </td>
                    <td>{items?.title}</td>
                    <td>{items?.quantity}</td>
                    <td>{items?.price}</td>
                    <td>
                      <button
                        className="btn btn-danger text-end"
                        onClick={() => handleDelete(items?.id)}
                      >
                        <MdDeleteSweep />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <Link to="/products" className="btn btn-white">
                <FaFastBackward />
              </Link>
            </table>
          </div>

          <div className="col-md-4 mt-2">
            <table class="table table-info">
              <thead>
                <tr className="table-active">
                  <th scope="col">USER AMOUNT LIST</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total items<strong className="ms-5">{QuantityValue}</strong></td>
                </tr>
                <tr>
                  <td>Tolal Amoute<strong className="ms-4">{totalvalue}</strong></td>
                </tr>
              </tbody>
            </table>
            <div className="text-end">
            <button className="btn btn-success" onClick={(e)=>notfy(e)}>Buy Items</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

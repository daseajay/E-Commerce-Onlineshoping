import logo from "../../assets/images/logo (1).png"
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css"
const Navbar = ({data}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand mx-3" href="#">
        <img src={logo} alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0 mx-1 text-center">
          <li className="nav-item px-2">
            <a className="nav-link fs-5 text-white" aria-current="page" href="/home">Home</a>
          </li>
          {/* <li className="nav-item px-2">
            <a className="nav-link fs-5 text-white" href="/about">About</a>
          </li> */}
          <li className="nav-item px-2">
            <a className="nav-link fs-5 text-white" href="/products">Products</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link fs-5 text-white" href="/cart">Cart</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link  text-danger" href="/contact"><FaCartArrowDown className="fs-4"/>{data}</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link text-white" href="/contact"><FaUserCircle className="fs-3"/></a>
          </li>
        </ul>
      </div>
    </div>
      </nav>
    </div>
  );
}

export default Navbar;

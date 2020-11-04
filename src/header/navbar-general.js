import React, { useState } from "react";
import { connect } from "react-redux";
import "./navigation.css";
import { removeitem } from "../components/actions/cartActions";
import Cart from "./cart.js";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const numberOfItems = props.cartNum;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const removeItem = (data) => {
    props.removeItem(data);
  };

  return (
    <div className="navi">
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div className="navbar-start">
          <a className="navbar-brand" href="#">
            E-Commerce
          </a>
          <div
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#homebar"
          >
            <span className="sr-only">Toggle Homebar</span>
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="collapse navbar-collapse " id="homebar">
            <ul className="nav navbar-nav main-nav-comp">
              <li className="nav-item">
                <NavLink to="/" className="nav-Link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Recommendation" className="nav-Link">
                  Your Recommendation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/TodaysDeal" className="nav-Link">
                  Todays Deal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Recommendation" className="nav-Link">
                  Orders
                </NavLink>
              </li>
            </ul>
            <div>
              <form className="form-inline mr-auto search-bar" target="self">
                <div className="form-group">
                  <label htmlFor="search-field">
                    <i className="fa fa-search" />
                  </label>
                  <input
                    id="searchFor"
                    className="form-control search-field"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
              <button
                type="button"
                className="button-cart"
                onClick={handleShow}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-cart cartValue"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
                <span className="badge badge-info">{numberOfItems}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart
        handleShow={handleShow}
        show={show}
        handleClose={handleClose}
        items={props.items}
        totalPrice={props.totalPrice}
        originalPrice={props.originalPrice}
        discount={props.discount}
        removeItem={removeItem}
      />
      <hr />
    </div>
  );
};

const mapDisptachToProps = (dispatch) => ({
  removeItem: (data) => dispatch(removeitem(data)),
});

const mapStateToProps = ({ cartValue }) => ({
  cartNum: cartValue.itemsNum,
  items: cartValue.items,
  totalPrice: cartValue.totalPrice,
  originalPrice: cartValue.originalPrice,
  discount: cartValue.totalDiscount,
});

export default connect(mapStateToProps, mapDisptachToProps)(Navbar);

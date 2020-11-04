import React, { useState } from "react";

const Cart = ({
  handleShow,
  show,
  handleClose,
  items,
  totalPrice,
  originalPrice,
  discount,
  removeItem,
}) => {
  const showClass = show ? "modalShow" : "";

  const itemArray = items.cartData;
  const arrayMap = items.mapObject;

  return (
    <>
      <div
        className={`modal fade show ${showClass}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {itemArray && itemArray.length > 0
                ? itemArray.map((item) => (
                    <div key={item.pid} className="items-cart">
                      {item.product_name}
                      <span className="badge badge-info">
                        {arrayMap.get(item.pid)}
                      </span>
                      <span style={{ display: "block", float: "right" }}>
                        {item.discounted_price &&
                        item.discounted_price !== item.retail_price ? (
                          <>
                            <i className="orig-Price">{item.retail_price}</i>
                            <strong>{item.discounted_price}</strong>
                          </>
                        ) : (
                          <strong>{item.retail_price}</strong>
                        )}
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                          onClick={() => {
                            removeItem(item);
                          }}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </span>
                      <hr />
                    </div>
                  ))
                : "Kindly add item to Cart to checkout"}
            </div>
            <span>
              <h4>
                Total Price:
                <i className="orig-Price">
                  {originalPrice !== totalPrice && originalPrice}
                </i>
                {"  "}
                <strong>{totalPrice}</strong>
              </h4>
            </span>
            {discount > 0 && <h4>You have saved : {discount}</h4>}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleClose}
              >
                Return
              </button>
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

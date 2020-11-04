import React, { useEffect } from "react";
import { connect } from "react-redux";
import { additem, removeitem } from "./actions/cartActions";

import Cards from "./cards";

const Products = {
  uniq_id: "uubasfghsdfn",
  product_url: "",
  product_name: "Test",
  product_category_tree: "",
  pid: "sdgasfdsdfsdf",
  retail_price: 4466,
  discounted_price: 789,
  image: "",
  description: "asdasdas",
  product_rating: "",
  brand: "sdasd",
  product_specifications: "adasd",
};

const Rows = (props) => {
  const cardSet = props.cart.cardSet;

  const addItemToCart = (data) => {
    props.addItem(data);
  };

  const items = props.items;

  return (
    <div className="container">
      <div className="row justify-content-center products">
        {items &&
          items.map((item) => (
            <Cards
              productData={item}
              addItem={addItemToCart}
              key={item.pid}
              added={cardSet.has(item.pid)}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartValue, items }) => {
  return { cart: cartValue, items: items };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (e) => dispatch(additem(e)),
  removeItem: () => dispatch(removeitem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rows);

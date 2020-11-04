import CartObject from "../CartObject";
import * as cartAc5tion from "../actions/cartActionsConstant";

//TODO: change Set to map to add number of added items
//TODO: Change cart to Map instead of Array

const cart = {
  items: new CartObject(),
  itemsNum: 0,
  totalPrice: 0,
  originalPrice: 0,
  totalDiscount: 0,
  cardSet: new Set(),
};

const CartReducer = (state = cart, action) => {
  switch (action.type) {
    case cartAc5tion.AddItemEvent:
      if (state.items.has(action.data.pid)) {
        let cartNumAdded = state.items.get(action.data.pid) + 1;
        state.items.set(action.data.pid, {
          data: action.data,
          noe: cartNumAdded,
        });
      } else {
        state.items.set(action.data.pid, { noe: 1, data: action.data });
      }

      let NitemsNum = state.itemsNum + 1;
      let price = state.totalPrice + action.data.discounted_price;
      let oPrice = state.originalPrice + action.data.retail_price;
      let oTotDisc = oPrice - price;
      state.cardSet.add(action.data.pid);

      return {
        ...state,
        items: state.items,
        itemsNum: NitemsNum,
        totalPrice: price,
        originalPrice: oPrice,
        totalDiscount: oTotDisc,
        cardSet: state.cardSet,
      };

    case cartAc5tion.RemoveItemEvent:
      let toRemovePID = action.data.pid;
      let newNum = state.itemsNum - 1;
      let Nprice = state.totalPrice - action.data.discounted_price;
      let NoPrice = state.originalPrice - action.data.retail_price;
      let NDisco = NoPrice - Nprice;
      const tempMap = state.items;
      let dataCart = tempMap.get(toRemovePID);
      if (dataCart.noe > 1) {
        dataCart = { ...dataCart, noe: dataCart.noe - 1 };
        tempMap.set(toRemovePID, dataCart);
      } else {
        tempMap.delete(toRemovePID);
      }

      state.cardSet.delete(action.data.pid);
      return {
        items: tempMap,
        itemsNum: newNum,
        totalPrice: Nprice,
        originalPrice: NoPrice,
        totalDiscount: NDisco,
        cardSet: state.cardSet,
      };
    default:
      return state;
  }
};

export default CartReducer;

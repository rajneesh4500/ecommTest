class CartObject {
  constructor() {
    this.mapObject = new Map();
    this.cartData = [];
  }

  get(key) {
    return this.mapObject.get(key);
  }

  set(key, value) {
    if (!this.has(key)) this.cartData = [...this.cartData, value.data];
    this.mapObject.set(key, value.noe);

    console.log(this.cartData);
  }

  has(key) {
    return this.mapObject.has(key);
  }

  delete(key) {
    let numEntries = this.mapObject.get(key);
    if (numEntries > 1) {
      this.mapObject.set(key, numEntries - 1);
    } else {
      this.mapObject.delete(key);
      this.cartData = this.cartData.filter((k) => k.pid !== key);
    }
  }
}

export default CartObject;

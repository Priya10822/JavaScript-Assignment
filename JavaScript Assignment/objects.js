//Objects of products
//Properties- itemName, price, discount, itemCode

const product = {
  itemName: "Flower",
  price: "50",
  discount: 20,
  itemCode: "F50",
};

//factory func and constructor function

function createProduct(name, price, discount, itemCode) {
  return {
    itemName: name,
    price: price,
    discount: discount,
    itemCode: itemCode,
  };
}
const football = createProduct("football", 400, 10, "F30");

function Product(name, price, discount, itemCode) {
  this.itemCode = name;
  this.price = price;
  this.discount = discount;
  this.itemCode = itemCode;
  this.discountValue = function () {
    return (price * discount) / 100;
  };
}
//new keyword for creating obj using constructor
const mobile = new Product("Oneplus Nord", 30000, 5, "OP20");

type Pizza = {
  name: string;
  price: number;
};

const menu = [
  { name: "Margarita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);

  if (!selectedPizza) {
    console.error("Sorry, we don't have that pizza on the menu.");
    return;
  }
  cashInRegister += selectedPizza.price;

  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);

  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

const EventEmitter = require("node:events");

class OrderSystem extends EventEmitter {
  createOrder(order) {
    console.log(`Order received: ${order.item}`);
    this.emit("orderCreated", order);
  }
}

const orderSys = new OrderSystem();

orderSys.on("orderCreated", (order) => {
  console.log(`Sending email to ${order.email} for ${order.item}`);
});

orderSys.on("orderCreated", (order) => {
  console.log(`Notifying warehouse to ship ${order.item}`);
});

orderSys.createOrder({ item: "Laptop", email: "clinton@example.com" });

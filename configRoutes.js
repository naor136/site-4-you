const indexR = require("./index");
const usersR = require("./users");
const categoriesR = require("./categories");
// const productsR = require("./products");
// const ordersR = require("./orders");


exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/categories",categoriesR);
  // app.use("/products",productsR);
  // app.use("/orders",ordersR);

}
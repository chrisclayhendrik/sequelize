const express = require("express");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const path = require("path"); //node native module path
const { Restaurant } = require("../src/models/restaurant");
const { Menu } = require("../src/models/menu");
const { Item } = require("../src/models/item");

const app = express();
const port = 3000;
app.use(express.json());

//set up our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});
app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");

//support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));
//support the parsing of incoming requests with json payloads
app.use(express.json());

//points toward folder of static files
app.use(express.static(path.join(__dirname, "../public")));

//GET method on /restaurants route returns all restaurants
app.get("/web/restaurants", async (req, res) => {
  //find all instances of the Model Restaurant
  const restaurants = await Restaurant.findAll();
  //respond with allRestaurants as a json objeect
  res.render("restaurants", { restaurants });
});

app.get("/web/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.render("restaurant", { restaurant });
});

app.post("/restaurants", async (req, res) => {
  let newRestaurant = await Restaurant.create(req.body);
  res.send("Restaurant created");
});

app.put("/restaurants/:id", async (req, res) => {
  let updatedRestaurant = await Restaurant.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

// delete one Restaurant by id
app.delete("/restaurants/:id", async (req, res) => {
  const deleted = await Restaurant.destroy({
    where: { id: req.params.id },
  });
  let deleteReport = "Deletion failed";
  if (deleted) {
    deleteReport = "Deletion successful";
  }
  res.send(deleteReport);
});

app.get("/menus", async (req, res) => {
  //find all instances of the Model Menu
  const allMenus = await Menu.findAll();
  //respond with allMenus as a json objeect
  res.json(allMenus);
});

app.get("/menus/:id", async (req, res) => {
  const menu = await Menu.findByPk(req.params.id);
  res.json(menu);
});

app.post("/menus", async (req, res) => {
  let newMenu = await Menu.create(req.body);
  res.send("Menu created");
});

app.put("/menus/:id", async (req, res) => {
  let updatedMenu = await Menu.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

// delete one Restaurant by id
app.delete("/menus/:id", async (req, res) => {
  const deleted = await Menu.destroy({
    where: { id: req.params.id },
  });
  let deleteReport = "Deletion failed";
  if (deleted) {
    deleteReport = "Deletion successful";
  }
  res.send(deleteReport);
});

app.get("/items", async (req, res) => {
  //find all instances of the Model Item
  const allItems = await Item.findAll();
  //respond with allItems as a json objeect
  res.json(allItems);
});

app.get("/items/:id", async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.json(item);
});

app.post("/items", async (req, res) => {
  let newItem = await Item.create(req.body);
  res.send("Item created");
});

app.put("/items/:id", async (req, res) => {
  let updatedItem = await Item.update(req.body, {
    where: { id: req.params.id },
  });
  res.send("Updated!");
});

// delete one Restaurant by id
app.delete("/items/:id", async (req, res) => {
  const deleted = await Item.destroy({
    where: { id: req.params.id },
  });
  let deleteReport = "Deletion failed";
  if (deleted) {
    deleteReport = "Deletion successful";
  }
  res.send(deleteReport);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

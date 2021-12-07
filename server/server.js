const express = require("express");
const path = require("path"); //node native module path
const { Restaurant } = require("../src/restaurant");
const { Menu } = require("../src/menu");
const { Item } = require("../src/item");

const app = express();
const port = 3000;

//points toward folder of static files
app.use(express.static("../public"));

//GET method on /restaurants route returns all restaurants
app.get("/restaurants", async (req, res) => {
  //find all instances of the Model Restaurant
  const allRestaurants = await Restaurant.findAll();
  //respond with allRestaurants as a json objeect
  res.json(allRestaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json(restaurant);
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

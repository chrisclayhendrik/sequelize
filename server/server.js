const express = require("express");
const path = require("path"); //node native module path

const app = express();
const port = 3000;

//points toward folder of static files
app.use(express.static(path.join(__dirname, "public")));

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
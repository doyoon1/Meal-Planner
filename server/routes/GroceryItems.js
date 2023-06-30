const router = require("express").Router();
//import model
const groceryItemsModel = require("../models/GroceryItems");

//create first route
router.post("/api/item", async (req, res) => {
  try {
    const newItem = new groceryItemsModel({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//create second route
router.get("/api/items", async (req, res) => {
  try {
    const allGroceryItems = await groceryItemsModel.find({});
    res.status(200).json(allGroceryItems);
  } catch (err) {
    res.json(err);
  }
});

//update item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by it's id and update it
    const updateItem = await groceryItemsModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      }
    );
    res.status(200).json("Item successfully updated");
  } catch (errr) {
    res.json(err);
  }
});

//delete an item
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by it's id and delete it
    const deleteItem = await groceryItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item successfully deleted");
  } catch (err) {
    res.json(err);
  }
});

//delete all the item
router.delete("/api/items", async (req, res) => {
  try {
    // Delete all items
    const deleteItems = await groceryItemsModel.deleteMany({});
    res.status(200).json("All items successfully deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;

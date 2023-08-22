const express = require("express");
const productModel = require("../model/product");
const router = express.Router();

// Create a product
router.post("/post-product", async (req, res) => {
  const { text } = req.body;
  try {
    const product = await productModel.create({ text }); // Create with an object
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
});

// Get all products
router.get("/get-product", async (req, res) => {
  try {
    const getProduct = await productModel.find();
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json({ message: "Error getting products" });
  }
});

// Update a product by ID
router.put("/update-product/:id", async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const update = await productModel.findByIdAndUpdate(id, { text }, { new: true });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
});

// Delete a product by ID
router.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const del = await productModel.findByIdAndDelete(id);
    if (!del) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
});

module.exports = router;

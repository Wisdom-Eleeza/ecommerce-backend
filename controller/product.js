const express = require("express");
const productModel = require("../model/product");
const router = express.Router();

router.post("/post-product", async (req, res) => {
  const { text } = req.body;
  const product = await productModel.create(text);
  res.status(200).json(product);
});

router.get("/get-product", async (req, res) => {
  const getProduct = await productModel.find();
  res.status(200).json(getProduct);
});

router.put("/update-product/:id", async (req, res) => {
  const { id } = req.params;
  const text = req.body;
  const update = await productModel.findByIdAndUpdate(id, { text });
  res.status(200).json(update);
});

router.delete("/delete-product", async (req, res) => {
  const { id } = req.params;
  const del = await productModel.findByIdAndDelete(id);
  res.status(200).json({ message: "Product Deleted" });
});

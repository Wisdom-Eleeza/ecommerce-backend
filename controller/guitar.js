const express = require("express");
const customerModel = require("../model/customers");

const customerOrder = async (req, res) => {
  const { customerId, order } = req.body;
  try {
    const getCustomer = await customerModel.findById(customerId);
    const getOrder = await customerModel.find(order);

    if (!getCustomer) return res.status(404).json("Customer not found");
    if (!getOrder) return res.status(404).json("Order not found");

    let totalOrder = 0;

    // getOrder.map((item) => {
    //   itemPrice = 10;
    //   totalOrder = totalOrder + itemPrice;
    // });

    for (getOrder in order) {
      itemPrice = 10;
      totalOrder += itemPrice;
    }
    res.json(totalOrder);
  } catch (error) {
    res.status(500).json();
  }
};

module.exports = customerOrder;

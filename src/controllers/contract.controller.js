"use strict";

const contractData = require("../models/contract.model");

exports.findAll = function (req, res) {
 contractData.findAll(function (err, contractData) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", contractData);
    res.send(contractData);
  });
};

exports.create = function (req, res) {
  const new_contract = new contractData(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
   contractData.create(new_contract, function (err, contractData) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "User added successfully!",
        data: contractData,
      });
    });
  }
};
// exports.findById = function (req, res) {
//  contractData.findById(req.params.id, function (err, employee) {
//     if (err) res.send(err);
//     res.json(employee);
//   });
// };

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
   contractData.update(
      req.params.id,
      new contractData(req.body),
      function (err, contract) {
        if (err) res.send(err);
        res.json({ error: false, message: "Users successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
 contractData.delete(req.params.id, function (err, contractData) {
    if (err) res.send(err);
    res.json({ error: false, message: "Contract successfully deleted" });
  });
};

const express  = require('express');
const DAO      = require('../dao/employees.dao');

var Controller = {

  find: function(req, res){
    console.log("[controller] find");
    DAO.find(req.query).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  findById: function(req, res){
    console.log("[controller] findByID", req.params.id);
    DAO.findById(req.params.id).then(function(data){
      res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  findByQuery: function(req, res){
    console.log("[controller] findByQuery");
    DAO.findByQuery(req.params.query).then(function(data){
			res.json(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  insertOne: function(req, res){
    console.log("[controller] insertOne: ", req.body);
    DAO.insertOne(req.body).then(function(data){
			res.json(data);
      console.log(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  updateOne: function(req, res){
    console.log("[controller] updateOne: body: ", req.body);
    DAO.updateOne(req.body).then(function(data){
			res.json(data);
      console.log(data);
    }).catch(function (error) {
      res.json(error);
    });
  },

  deleteOne: function(req, res){
    console.log("[controller] deleteOne: id: ", req.params.id);
    DAO.deleteOne(req.params.id).then(function(data){
			res.json(data);
      console.log(data);
    }).catch(function (error) {
      res.json(error);
    });
  }

}

module.exports = exports = Controller;

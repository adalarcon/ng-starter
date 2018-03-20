const express 	  = require('express');
const db          = require('../helper/mongo');
const COLLECTION  = "orders-detail";
const ProductsDAO = require('./products.dao');

var DAO = {

  find: function(params){
    params = params || {};
    params.pager = params.pager || {};
    params.pager.pageSize = parseInt(params.pager.pageSize) || 0;
    params.pager.pageIndex = parseInt(params.pager.pageIndex) || 0;
    console.log("[dao] find", params);
    return new Promise((resolve, reject) => {
       db.find(COLLECTION, {query:{}, fields:{}, sort:{"order":1}, pager: params.pager }).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findById: function(id){
    console.log("[dao] findById ",id);
    return new Promise((resolve, reject) => {
       db.findById(COLLECTION, {id: id}).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findByOrderId: function(id, params){
    params = params || {};
    params.pager = params.pager || {};
    params.pager.pageSize = parseInt(params.pager.pageSize) || 0;
    params.pager.pageIndex = parseInt(params.pager.pageIndex) || 0;
    console.log("[dao] findByOrderId ",id);
    return new Promise((resolve, reject) => {
       db.find(COLLECTION, { query: {OrderID: id} }).then(function(data){
         updateOrdersDetail(data).then((res)=>{
           resolve(res);
         });
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  findByQuery: function(query){

    var obj = {$or :[
      { name: new RegExp(query, "i") },
      { number: new RegExp(query, "i") },
      { subject: new RegExp(query, "i") }
    ]};

    return new Promise((resolve, reject) => {
       db.find(COLLECTION, { query: {query: obj}, fields: {}, sort: {"order":1}} ).then(function(data){
         resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  insertOne: function(obj){
    console.log("[dao] insertOne: ", obj);
    return new Promise((resolve, reject) => {
       db.insertOne(COLLECTION, obj).then(function(data){
        resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  updateOne: function(obj){
    console.log("[dao] updateOne: body: ", obj);
    return new Promise((resolve, reject) => {
       db.updateOne(COLLECTION, obj).then(function(data){
        resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  },

  deleteOne: function(id){
    console.log("[dao] deleteOne: id: ", id);
    return new Promise((resolve, reject) => {
       db.deleteOne(COLLECTION, id).then(function(data){
        resolve(data);
       }).catch(function (error) {
         reject(error);
       });
    });
  }

}

function updateOrdersDetail(ordersDetail) {
  let promises = [];
  for (let i = 0; i < ordersDetail.length; i++) {
    promises.push(new Promise((resolve,reject) => {
      ProductsDAO.findById(ordersDetail[i].ProductID).then(function(data){
        ordersDetail[i].product = data;
        resolve(ordersDetail[i]);
      }).catch(function (error) {
        resolve(error);
      });
    }));
  }
  return Promise.all(promises);
}

module.exports = exports = DAO;

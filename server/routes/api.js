const express         = require('express');
const router          = express.Router();
const EmployeesCTRL   = require('../controller/employees.controller');
const CustomersCTRL   = require('../controller/customers.controller');
const ProductsCTRL    = require('../controller/products.controller');
const OrdersCTRL      = require('../controller/orders.controller');
const OrdersDetailCTRL      = require('../controller/orders-detail.controller');

router.all('*', function(req, res, next){
  console.log("[api]", req.method, req.url);
  next();
});

// employees
router.get('/api/v1/employees', EmployeesCTRL.find);
router.get('/api/v1/employees/:id', EmployeesCTRL.findById);
router.post('/api/v1/employees', EmployeesCTRL.insertOne);
router.put('/api/v1/employees', EmployeesCTRL.updateOne);
router.delete('/api/v1/employees/:id', EmployeesCTRL.deleteOne);

// customers
router.get('/api/v1/customers', CustomersCTRL.find);
router.get('/api/v1/customers/:id', CustomersCTRL.findById);
router.post('/api/v1/customers', CustomersCTRL.insertOne);
router.put('/api/v1/customers', CustomersCTRL.updateOne);
router.delete('/api/v1/customers/:id', CustomersCTRL.deleteOne);

// products
router.get('/api/v1/products', ProductsCTRL.find);
router.get('/api/v1/products/:id', ProductsCTRL.findById);
router.post('/api/v1/products', ProductsCTRL.insertOne);
router.put('/api/v1/products', ProductsCTRL.updateOne);
router.delete('/api/v1/products/:id', ProductsCTRL.deleteOne);

// orders
router.get('/api/v1/orders', OrdersCTRL.find);
router.get('/api/v1/orders/:id', OrdersCTRL.findById);
router.post('/api/v1/orders', OrdersCTRL.insertOne);
router.put('/api/v1/orders', OrdersCTRL.updateOne);
router.delete('/api/v1/orders/:id', OrdersCTRL.deleteOne);

// Orders detail
router.get('/api/v1/orders/:id/detail', OrdersDetailCTRL.findByOrderId);

router.get('/api/v1/orders-detail', OrdersDetailCTRL.find);
router.get('/api/v1/orders-detail/:id', OrdersDetailCTRL.findById);
router.post('/api/v1/orders-detail', OrdersDetailCTRL.insertOne);
router.put('/api/v1/orders-detail', OrdersDetailCTRL.updateOne);
router.delete('/api/v1/orders-detail/:id', OrdersDetailCTRL.deleteOne);

module.exports = router;

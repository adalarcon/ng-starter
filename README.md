# MEAN Stack boilerplate with examples

this is a mean boilerplate for MEAN Stack

# Installation

## Node
npm install  

## Dependencies

npm install -g nodemon
npm install -g concurrently
npm install -g @compodoc/compodoc

## Start proyect

npm start

## Generate Angular Documentation

npm run docs

## Angular Build

npm run build:prod  

or

npm run build:dev


## Angular Application

http://localhost:4600/

## Rest API url

http://localhost:3600/

# REST API

## Employees

GET     /api/v1/employees  
GET     /api/v1/employees/:id  
POST    /api/v1/employees  
PUT     /api/v1/employees  
DELETE  /api/v1/employees/:id  

## Customers

GET     /api/v1/customers  
GET     /api/v1/customers/:id  
POST    /api/v1/customers  
PUT     /api/v1/customers  
DELETE  /api/v1/customers/:id  

## Products

GET     /api/v1/products  
GET     /api/v1/products/:id  
POST    /api/v1/products  
PUT     /api/v1/products  
DELETE  /api/v1/products/:id  

## Orders

GET     /api/v1/orders  
GET     /api/v1/orders/:id  
POST    /api/v1/orders  
PUT     /api/v1/orders  
DELETE  /api/v1/orders/:id  

## Orders detail

GET     /api/v1/orders/:id/detail  
GET     /api/v1/orders-detail/  
GET     /api/v1/orders-detail/:id  
POST    /api/v1/orders-detail  
PUT     /api/v1/orders-detail  
DELETE  /api/v1/orders-detail/:id  

## Paging params

pager[pageSize]  
pager[pageIndex]  

## Example

/api/v1/orders?pager[pageSize]=2&pager[pageIndex]=1  


# Database

## Import Database

run ./export file from ./database/ directory  

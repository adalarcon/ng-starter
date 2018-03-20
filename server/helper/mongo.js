const MongoClient   = require('mongodb').MongoClient;
const ObjectID      = require('mongodb').ObjectID;
const MongoConfig   = require('../config/mongodb');

const url = MongoConfig.url;

// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

const MongoModule = {

  find: (collection, params ) => {
    params = params || {};
    params.pager = params.pager || {};

    var limit = 0;
    var skip = 0;
    if(params.pager.pageIndex && params.pager.pageSize){
      skip = params.pager.pageSize*(params.pager.pageIndex-1);
      limit = params.pager.pageSize;
    }
    return new Promise((resolve, reject) => {
       connection((db) => {
           db.collection(collection)
           .find(params.query, params.fields)
           .sort(params.sort)
           .skip(skip)
           .limit(limit)
           .toArray()
           .then((obj) => {
               resolve(obj);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });


  },

  findOne: (collection, params ) => {
    params = params || {};
    return new Promise((resolve, reject) => {
       connection((db) => {
           db.collection(collection)
           .find(params.query, params.fields)
           .sort(params.sort)
           .toArray()
           .then((obj) => {
               resolve(obj[0]);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });
  },

  findById: (collection, params ) => {
    params = params || {};
    return new Promise((resolve, reject) => {
       connection((db) => {
           db.collection(collection)
           .find({_id: new ObjectID(params.id)}, params.fields)
           .sort(params.sort)
           .toArray()
           .then((obj) => {
               resolve(obj[0]);
               db.close();
           })
           .catch((err) => {
               reject(err);
               db.close();
           });
       });
    });
  },

  insertOne: (collection, obj) => {
    return new Promise((resolve, reject) => {
      connection((db) => {
        db.collection(collection)
        .insertOne(obj)
        .then((obj) => {
            resolve(obj);
            db.close();
        })
        .catch((err) => {
            reject(err);
            db.close();
        });
      });
    });
  },

  insertMany: (collection, obj) => {
    return new Promise((resolve, reject) => {
      connection((db) => {
        db.collection(collection)
        .insertMany(obj)
        .then((obj) => {
            resolve(obj);
            db.close();
        })
        .catch((err) => {
            reject(err);
            db.close();
        });
      });
    });
  },

  updateOne: (collection, obj) => {
    var id = obj._id;
    delete obj._id;
    return new Promise((resolve, reject) => {
      connection((db) => {
          db.collection(collection)
              .updateOne({_id: new ObjectID(id)}, obj)
              .then((obj) => {
                  resolve(obj);
                  db.close();
              })
              .catch((err) => {
                  reject(err);
                  db.close();
              });
      });
    });
  },

  deleteOne: (collection, id) => {
    return new Promise((resolve, reject) => {
      connection((db) => {
          db.collection(collection)
          .deleteOne({_id: new ObjectID(id)})
          .then((obj) => {
              resolve(obj);
              db.close();
          })
          .catch((err) => {
              reject(err);
              db.close();
          });
      });
    });
  },
}

module.exports = exports = MongoModule;

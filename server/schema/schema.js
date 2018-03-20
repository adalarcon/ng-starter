const {makeExecutableSchema}  = require('graphql-tools');
const db                    = require('../helper/mongo');
const DAO                   = require('../dao/customers.dao');

const typeDefs = [`

type Subject{
  _id: String
  name: String
  materials:[Materials]
  number: String
  image: String
  order: String
}

type Result{
  status: String
  body: [Subject]
}

type Materials{
  name: String
  url: String
}

type Query {
  subjects: Result
  subject(id: String!): Subject
  subjectByName(name: String!): [Subject]
}

type Mutation {
  insertOneSubjects(
    name: String,
    materials: String,
    number: String,
    image: String,
    orser: String): Subject!
}

schema {
  query: Query
  mutation: Mutation
}`];

const resolvers = {
  Query: {
    subjects(root){
       return DAO.find()
    },
    subject(root, args){
      return DAO.findById(args.id)
    },
    subjectByName(root, args){
      return DAO.findByQuery(args.name)
    }
  },
  Mutation: {
    insertOneSubjects(root, args){
      return DAO.insertOne(args);
    }
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});

module.exports  = schema;

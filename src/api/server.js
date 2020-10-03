const envtest = require('dotenv').config()
const tablecreation = require('./db/add-tables.js');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/taskSchema');
const resolvers = require('./resolvers/taskResolver');
const TaskAPI = require('./datasources/taskDataSource');

if(envtest.error){
  throw envtest.error
}

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    TaskAPI: new TaskAPI(),
  }),
  engine: {
    reportSchema: true
  }
});

// Start our server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
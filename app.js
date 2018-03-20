const app         = require('./server/config/express');
const bodyParser  = require('body-parser');
const schema      = require('./server/schema/schema.js');

var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

var server = app.listen(app.get('port'), function() {
  console.log('[app] Express server listening on port ' + server.address().port);
});

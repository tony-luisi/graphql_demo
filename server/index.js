var express = require('express')
var app = express()
var test = require('./routes/test')
var graphql = require('./routes/graphql')

app.use('/graphql', graphql)

app.use('/test', test)

app.listen(3000, function() {
  console.log('GraphQL server running on http://localhost:3000/graphql');
})

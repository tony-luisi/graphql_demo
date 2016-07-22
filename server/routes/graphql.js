var express = require('express')
var router = express.Router()
var graphql = require('graphql')
var graphqlHTTP = require('express-graphql')

var pokemon = require('../../db/pokemon.json')

var pokemonType = new graphql.GraphQLObjectType({
  name: 'Pokemon',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
})

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      pokemon: {
        type: pokemonType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: function(_, args) {
          return pokemon[args.id]
        }
      }
    }
  })
})

router.get('/', graphqlHTTP({ schema: schema, pretty: true}))

module.exports = router

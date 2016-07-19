var firebase = require('firebase')

firebase.initializeApp({
  serviceAccount: './test-b3de52be5397.json',
  databaseURL: 'https://test-ebd6b.firebaseio.com/'
})

var data = require('./data.json')
var arrayData = ['a', 'b', 'd', 45, false]

var db = firebase.database()
var ref = db.ref('server')

var usersRef = ref.child('test').set(arrayData)

var firebase = require('firebase')

firebase.initializeApp({
  serviceAccount: './test-b3de52be5397.json',
  databaseURL: 'https://test-ebd6b.firebaseio.com/'
})

var data = require('./data.json')

var db = firebase.database()
var ref = db.ref('server')

var usersRef = ref.child('users')

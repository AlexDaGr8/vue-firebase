import config from './firebaseConfig'
import firebase from 'firebase'

firebase.initializeApp(config);

// Sign in existing user
firebase.auth().signInWithEmailAndPassword('hintonalexander@gmail.com', 'th@fast3stKid')
.catch(function(err) {
  // Handle errors
});

var db = firebase.database();

export default {
  users: db.ref('users/'),
  contacts: db.ref('contacts/')
}
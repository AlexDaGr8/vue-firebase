import config from './firebaseConfig'
import firebase from 'firebase'
import auth from '../../config.js'

firebase.initializeApp(config);

// Sign in existing user
firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
.catch(function(err) {
  // Handle errors
});

var db = firebase.database();

export default {
  users: db.ref('users/'),
  contacts: db.ref('contacts/')
}
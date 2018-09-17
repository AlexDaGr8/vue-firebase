import firebase from 'firebase'
import auth from '../../config'

firebase.initializeApp(auth.settings);

// Sign in existing user
firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
.catch(function(err) {
  console.log('err', err)
});

var db = firebase.database();

export default {
  users: db.ref('users/'),
  contacts: db.ref('contacts/')
}
  import firebase from "firebase";
  import 'firebase/firestore'


  var config = {
    apiKey: "AIzaSyBSoFDUfFZCLhboxpertQf65l2YPgAcSrs",
    authDomain: "vue-app-a2cbb.firebaseapp.com",
    databaseURL: "https://vue-app-a2cbb.firebaseio.com",
    projectId: "vue-app-a2cbb",
    storageBucket: "vue-app-a2cbb.appspot.com",
    messagingSenderId: "639849880860"
  };

  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const currentUser = auth.currentUser;

  const settings = {
    timestampsInSnapshots: true
  }

  db.settings(settings);

  const userCollection = db.collection('users');
  const postCollection = db.collection('posts')
  const commentCollection = db.collection('comments')
  const likesCollection = db.collection('likes')

  export {
    db,
    auth,
    currentUser,
    userCollection,
    postCollection,
    commentCollection,
    likesCollection
  }

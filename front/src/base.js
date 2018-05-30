import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCQ8YL8HUyX00mOPvbevPM9zURV4IacDmg",
    authDomain: "findepplatform.firebaseapp.com",
    databaseURL: "https://findepplatform.firebaseio.com",
    projectId: "findepplatform",
    storageBucket: "",
    messagingSenderId: "698802417122"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, base, facebookProvider }
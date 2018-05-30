import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase';

//Style
import 'semantic-ui-css/semantic.min.css';

const config = {
    apiKey: "AIzaSyCQ8YL8HUyX00mOPvbevPM9zURV4IacDmg",
    authDomain: "findepplatform.firebaseapp.com",
    databaseURL: "https://findepplatform.firebaseio.com",
    projectId: "findepplatform",
    storageBucket: "findepplatform.appspot.com",
    messagingSenderId: "698802417122"
}

firebase.initializeApp(config);


const WithRouter = () =>{
    return(
        <BrowserRouter><App/></BrowserRouter>
    )
}

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
"use strict";
//var firebase = require('firebase');
//var app = angular.module('app',['firebase']);

var config = {
    apiKey: "AIzaSyCjqqXbZlCPgn3wdG4xWSum79U7yLhmStc",
    authDomain: "slrig-4ee0f.firebaseapp.com",
    databaseURL: "https://slrig-4ee0f.firebaseio.com",
    storageBucket: "slrig-4ee0f.appspot.com",
    messagingSenderId: "584454766760"
};
firebase.initializeApp(config);


//app.controller('ctrl',function(){});

//const auth = firebase.auth();
//auth.signInAnonymously();
//auth.signOut();
const messaging = firebase.messaging();
messaging.requestPermission()
    .then(function(){
        console.log("Have permission!")
    }).catch(function(e){
        console.log("error:"+e);
    })
messaging.onMessage(function(payload){
    console.log("onMessage: ",payload );
});
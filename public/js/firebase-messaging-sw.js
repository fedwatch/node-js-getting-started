/**
 * Created by admin on 2016/12/19.
 */
importScripts("https://www.gstatic.com/firebasejs/3.6.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.6.4/firebase-messaging.js");




// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjqqXbZlCPgn3wdG4xWSum79U7yLhmStc",
    authDomain: "slrig-4ee0f.firebaseapp.com",
    databaseURL: "https://slrig-4ee0f.firebaseio.com",
    storageBucket: "slrig-4ee0f.appspot.com",
    messagingSenderId: "584454766760"
};
var base = firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title = 'Hello world';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title,options);
});
//messaging.requestPermission()
//    .then(function(){
//        console.log("Have permission!")
//        return messaging.getToken()
//    })
//    .then(function(token){
//        console.log(token);
//    })
//    .catch(function(e){
//        console.log("error:"+e);
//    })
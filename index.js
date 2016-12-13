var express = require('express');
var app = express();
var compression = require('compression');
// var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


app.set('port', (process.env.PORT || 80));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', cookieParser());
// app.use('/', session({
//     // secret: cookie_secret,
//     // name: cookie_name,
//     // store: sessionStore, // connect-mongo session store
//     proxy: true,
//     resave: false,
//     saveUninitialized: true
// }));
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // console.log("-----------");
    // console.log(__dirname);
    res.render('pages/index');
});
//前端价值面试
app.get('/frontEndValueInterview', function (req, res) { res.render('pages/frontEndValueInterview'); });
// H5 面试方向
app.get('/H5', function (req, res) { res.render('pages/H5'); });
app.get('/H5/Html5', function (req, res) { res.render('pages/H5/Html5'); });
app.get('/H5/Css3', function (req, res) { res.render('pages/H5/Css3'); });
app.get('/H5/ES5Javascript', function (req, res) { res.render('pages/H5/ES5Javascript'); });
app.get('/H5/ES6Javascript', function (req, res) { res.render('pages/H5/ES6Javascript'); });
app.get('/H5/jQuery', function (req, res) { res.render('pages/H5/jQuery'); });
app.get('/H5/H5Mobile', function (req, res) { res.render('pages/H5/H5Mobile'); });
// AngularJS 面试方向
app.get('/AngularJS', function (req, res) { res.render('pages/AngularJS');console.log(__dirname); });
app.get('/AngularJS/AngularJS1x', function (req, res) { res.render('pages/AngularJS/AngularJS1x'); });
app.get('/AngularJS/AngularJS2', function (req, res) { res.render('pages/AngularJS/AngularJS2'); });
app.get('/AngularJS/AngularJSIonic', function (req, res) { res.render('pages/AngularJS/AngularJSIonic'); });
// React 面试方向
app.get('/React', function (req, res) { res.render('pages/React'); });
app.get('/React/React', function (req, res) { res.render('pages/React/React'); });
app.get('/React/ReactNative', function (req, res) { res.render('pages/React/ReactNative'); });
app.get('/React/ReactReduxNative', function (req, res) { res.render('pages/React/ReactReduxNative'); });
// 面试官空降
app.get('/Interviewer', function (req, res) { res.render('pages/Interviewer'); });
app.get('/Interviewer/HTML5', function (req, res) { res.render('pages/Interviewer/HTML5'); });
app.get('/Interviewer/AngularJS', function (req, res) { res.render('pages/Interviewer/AngularJS'); });
app.get('/Interviewer/React', function (req, res) { res.render('pages/Interviewer/React'); });
// 团队合作
app.get('/Team', function (req, res) { res.render('pages/Team'); });
app.get('/Team/HTML5', function (req, res) { res.render('pages/Team/HTML5'); });
app.get('/Team/AngularJS', function (req, res) { res.render('pages/Team/AngularJS'); });
app.get('/Team/React', function (req, res) { res.render('pages/Team/React'); });
// 帮助
app.get('/Help', function (req, res) { res.render('pages/Help'); });
app.get('/Help/Personal', function (req, res) { res.render('pages/Help/Personal'); });
app.get('/Help/Enterprise', function (req, res) { res.render('pages/Help/Enterprise'); });
// 服务
app.get('/Service', function (req, res) { res.render('pages/Service/index'); });

// 工程化
app.get('/Service', function (req, res) { res.render('pages/Service/index'); });


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});



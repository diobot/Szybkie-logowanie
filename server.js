const express = require('express'); //załadowanie modułu express
const app = express(); //utworzenie aplikacji express
const serv = require('http').Server(app); //utworzenie serwera WWW
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const register = fs.readFileSync('json/register.json');
const users = JSON.parse(register);
const router = express.Router();

// serv.listen(2000);
console.log("Server works...")
console.log(users)
app.use('/', router);
app.listen(process.env.port || 2000);
app.use(bodyParser.json());

/////////////////// Ładowanie Strony /////////////////////

router.get('/', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/index.html'));
});
router.get('/log.html', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/log.html'));
});
router.get('/main.js', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/js/main.js'));
});
router.get('/style.css', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/css/style.css'));
});
router.post('/login', (req, res) => {
        console.log(req.body);
        console.log(users);
        const { login, password } = req.body;
        // if(users[login]===password){
        // res.send("true");
        // }else{
        //     res.send("false")
        // }
        res.json({ isLoggedIn: users[login] === password });
    });


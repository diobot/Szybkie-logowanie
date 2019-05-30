function movies_desc(){
    console.log("Kliknięto Filmy");
}
function movies(){
    console.log("Kliknięto Kina");
}
var is_log = false;
function log_in(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var data = {login, password};
    console.log("Kliknięto Logowanie");
        return fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (res) { is_log = res }).then(console.log(is_log))
}

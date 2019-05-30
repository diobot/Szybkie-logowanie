function movies_desc(){
    console.log("Kliknięto Filmy");
}
function movies(){
    console.log("Kliknięto Kina");
}
var is_log = false;
function log_in(){
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    console.log("Kliknięto Logowanie");
        return fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                login: login.value,
                password: password.value
            })
        }).then(function (res) { is_log = res }).then(console.log(is_log))
}

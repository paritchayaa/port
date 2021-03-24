const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const usernamecheck = urlParams.get("username")
const passwordcheck = urlParams.get("password")
console.log(usernamecheck)
console.log(passwordcheck)

window.onload = pageLoad;
function pageLoad() {

    var login = document.getElementById("login")
    login.onsubmit = checkLogin;
}


function checkLogin() {

    var username = document.forms["login"]["username"]
    var password = document.forms["login"]["password"]

    if (usernamecheck != username.value || passwordcheck != password.value) {
        // alert("รหัสหรือชื่อผู้ใช้ ไม่ถูกต้อง")
        alert("password is incorrect")
        return false;

    }

    else if (usernamecheck == username.value && passwordcheck == password.value) {
        // alert("เข้าสู่ระบบสำเร็จ")
        alert("password is correct")
        
    }
    // console.log(username.value, password.value)

}
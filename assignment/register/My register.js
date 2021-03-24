window.onload = pageLoad;
function pageLoad(){

    var form = document.getElementById("register")
    form.onsubmit = checkForm

}

function checkForm() {

    var input = document.forms["register"]

     if(input.password1.value != input.repassword1.value)
    {
        alert("รหัสผิด")
        return false;
    }

        else if(input.password1.value == input.repassword1.value)
    {
        alert("รหัสผ่านถูกต้อง")
        return true;
    }
}




   





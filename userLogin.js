userName = document.getElementById('name');
passwd = document.getElementById('password');
document.getElementById('usrRegister').addEventListener("click",register);
document.getElementById('usrLogin').addEventListener("click",validateInput);
function register(){
    window.open('signup.html');
}
function validateInput(){
    if( validateUserName() &&  validatePasswd()){
        document.getElementById('theForm').submit();
    }
 
}
function validateUserName(){
    if((userName.value).length<8){
        alert("Username must contain 8 or more characters");
        return false;
    }
    return true;
}
function validatePasswd(){
    if((passwd.value).length<8){
        alert("Password must contain 10 or more characters");
        return false;
    }
    if (!(passwd.value.match(/[a-z]/g))){
        alert("Password must contain a small letter");
        return false;
    }
    if (!(passwd.value.match(/[A-Z]/g))){
        alert("Password must contain a capital letter");
        return false;
    }
    return true;
}

let result = document.getElementById("result");
let logInBtn = document.getElementById("logInBtn");
let userName = document.getElementById("username");
let passWord = document.getElementById("password");

result.style.visibility = "hidden";

function logIn()
{
    if (userName.value == "Charls" && passWord.value == "charls123")
    {
        result.style.visibility = "visible";
        result.style.color = "green";
        result.textContent = "Log-In Success!";
    }
    else
    {
        result.style.visibility = "visible";
        result.style.color = "red";
        result.textContent = "Invalid Log-In Information.";
    }
}
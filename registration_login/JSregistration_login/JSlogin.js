let button = document.querySelector(".button");



let email =  document.querySelector(".email");


let password = document.querySelector(".password");





button.onclick = function()  {


formdata = new FormData();

formdata.append('email',email.value);
formdata.append('password',password.value);




return fetch("../includes/log.icludes.php",{
  method:"POST",
  body:formdata
})
.then(response => response.text())
.then(response => {
alert(response);

if (response != "Такого пользователя не существует")
{
window.location.href = "../../AccountPage/templates/accountPage.php";
}
})
}

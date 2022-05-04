let button = document.querySelector(".button");

let name = document.querySelector(".name");

let surname = document.querySelector(".surname");

let email =  document.querySelector(".email");


let password = document.querySelector(".password");


let password_repeat = document.querySelector(".password_repeat");

button.onclick = function()  {


formdata = new FormData();
formdata.append("name",name.value);
formdata.append('surname',surname.value);
formdata.append('email',email.value);
formdata.append('password',password.value);
formdata.append('password_repeat',password_repeat.value);

return fetch("../includes/reg.includes.php",{
  method:"POST",
  body:formdata
})
.then(response => response.text())
.then(response => {

  if (response == "Регистрация прошла успешно")
  {
  alert(response);
  window.location.href = "login.php";
}

else
{
  alert(response);
}


})

}

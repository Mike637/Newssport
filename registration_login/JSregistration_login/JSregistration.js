let button = document.querySelector(".button");

let name = document.querySelector(".name");

let surname = document.querySelector(".surname");

let email =  document.querySelector(".email");


let password = document.querySelector(".password");


let password_repeat = document.querySelector(".password_repeat");


let error = '';

button.onclick = function()  {


formdata = new FormData();
formdata.append("name",name.value);
formdata.append('surname',surname.value);
formdata.append('email',email.value);
formdata.append('password',password.value);
formdata.append('password_repeat',password_repeat.value);

emptyInput();
console.log(error);
console.log(emptyInput());
if (emptyInput() == false)
{
  alert(error)
}

else
{


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
}


function emptyInput()

{

  if (name.value != '' || surname.value != '' || email.value != '' || password.value != '' || password_repeat.value != '')

  {
     error = "Заполните пустые поля";
    return false;
  }

  else
  {
    return true;
  }
}

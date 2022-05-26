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
errorInput();
if (errorInput() == false)

{
  alert(error);
}


else {




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


function errorInput()

{


  if (name.value == '' || surname.value == '' || email.value == '' || password.value == '' || password_repeat.value == '')

  {
     error = "Заполните пустые поля";
     return false
      }

else if (password.value != password_repeat.value)
{
  error = "Пароли не совпадают";
  return false
}

else if (name.value.length <=3)
{
  error = "Имя слишком короткое";
  return false
}

else if (surname.value.length <=3)
{
  error = "Фамилия слишком короткая";
  return false
}

else if (password.value.length <=3)
{
  error = "Пароль слишком короткий";
  return false
}

else if (/^[a-z0-9]+[\.\-\_]?[a-z0-9]+@[a-z]+\.[a-z]+$/gm.test(email.value) == false)
{
  error = "некорректный почтовый ящик";
  return false
}

else {
  return true

}



}

/*
function RegTraining(str,substr)
{

console.log(substr.test(str));

}


RegTraining('owen7@list.ru',/^[a-z0-9]+[\.\-\_]?[a-z0-9]+@[a-z]+\.[a-z]+$/gm);
*/

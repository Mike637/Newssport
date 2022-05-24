let button = document.querySelector(".button");



let email =  document.querySelector(".email");


let password = document.querySelector(".password");





button.onclick = function()  {


formdata = new FormData();

formdata.append('email',email.value.trim());
formdata.append('password',password.value.trim());
EmptyInput();

if (EmptyInput() == false)

{
  alert('Заполните все поля');
}

else {





return fetch("../includes/log.icludes.php",{
  method:"POST",
  body:formdata
})
.then(response => response.text())
.then(response => {
alert(response);

if (response != "Такого пользователя не существует" || response != "Неверный пароль")
{

window.location.href = "../../AccountPage/templates/accountPage.php";

}

})

}
}



function EmptyInput()
{
  if (email.value == '' || password.value == '')
  {
    return false;
  }
  else
  {
    return true;
  }
}

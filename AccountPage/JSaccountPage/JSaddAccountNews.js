
let accountNews = document.querySelector(".accountNews");
let accountData = document.querySelector(".accountData");


function dataAccount()
{
var data = "";


return fetch("../includes/ShowAccountData.includes.php",{
  method:"POST",
}).
then(response => response.json()).
then(response => {
  data += `<h1 class="users_name">Имя пользователя: <strong>${response[0].users_name}</strong></h1>
  <h1 class="users_surname">Фамилия пользователя: <strong>${response[0].users_surname}</strong></h1>
  <h1 class="users_email">Почта пользователя:<strong>${response[0].users_email}<strong></h1>`;

  accountData.innerHTML = data;
})
}




function addAccountNews() {


var data = "";
return fetch("../includes/showAccountNews.includes.php",{
  method:"POST",
}).
then(response => response.json()).
then(response => {


  data +='<div class=Bottom_content>';


  for (var key = 0; key < response.length; key++)
  {
    data +=`<div class="Container_Bottom_content" data-id = "${response[key].img_id}">

      <div class='Container_Bottom_content_photo'>
  <img src="../../Add_News/img/${response[key].img_photoname}" alt="">
      </div>

      <div class="Container_Bottom_content_text">

      <p>${response[key].img_title}</p>
      <p>${AddDateNew(response[key].img_time)}</p>
      </div>
    </div>`;
  }
data +='</div>';
if (data == '<div class=Bottom_content></div>')
{
  accountNews.innerHTML = '<p id ="NoNews"><strong>К сожалению, у вас нет ни одной добавленной новости</strong></p><p id ="LinkAddNews">Хотите <a href="../../Add_News/templates/addNews.php">Добавить новость?</a></p>';
}
else
 {
  accountNews.innerHTML = data;
}


BlockDataIdOnClick()
})
}



function BlockDataIdOnClick()
{
let blockDataId = document.querySelectorAll('[data-id]');

for (element of blockDataId)
{

  element.onclick = function()
  {
    let id = this.getAttribute('data-id');
    window.location.href = `../../UpdateNew/templates/updateNew.php?id=${id}`;
  }
}
}



window.onload = function()
{
dataAccount();
  addAccountNews();


}






function AddDateNew(utcDate)
{
  var UtcDateConvert = convertUtcDate(utcDate);
  var data = `Добавлено ${UtcDateConvert[0]} ${UtcDateConvert[1]} ${UtcDateConvert[2]} года в ${UtcDateConvert[3]}:${UtcDateConvert[4]}`;
  return data;
}


function convertUtcDate(utcDate)
{
  var dateList = [];
  var date = new Date(utcDate*1000);
var dayNumber = date.getDate();
var month = date.getMonth();
  var year = date.getFullYear();


  var hour = date.getHours();
  var minute = date.getMinutes();
var listMonthNames = ["Января", "Февраля", "Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
if (dayNumber < 10)
{
  dateList.push(`0${dayNumber}`);
}

else {
  dateList.push(`${dayNumber}`);
}

dateList.push(`${listMonthNames[month]}`);

dateList.push(`${year}`);

if (hour < 10)
{
  dateList.push(`0${hour}`);
}

else
{
  dateList.push(`${hour}`);
}


if (minute < 10)
{
  dateList.push(`0${minute}`);
}

else
{
  dateList.push(`${minute}`);
}

return dateList;

}

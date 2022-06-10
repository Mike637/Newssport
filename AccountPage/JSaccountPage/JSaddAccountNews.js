function addAccountNews() {

let main = document.querySelector("main");
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
  main.innerHTML = '<h2>К сожалению, у вас нет ни одной добавленной новости</h2>Хотите <a href="../../Add_News/templates/addNews.php">Добавить новость?</a>';
}
else
 {
  main.innerHTML = data;
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


let id = document.location.search;


window.onload = function()
{

  detailViewNew(id);


}

async function detailViewNew(idParameter)
{
  let container = document.querySelector(".container");
  data = "";
  response = await fetch("../../PageNew/includes/PageNewView.includes.php"+idParameter,{
   method:"GET",
 });

if (!response.ok)
{
  throw new Error(`Error in response!!! Your status is ${response.status}`)
}
  else {


 jsonResponse = await response.json();
 data+=`<h1 id="title">${jsonResponse.img_title}</h1>`;
 data += `<div class="img">`;
 data += `<img src="../../Add_News/img/${jsonResponse.img_photoname}" alt="picture_is_not_found">`;
 data +=`</div>`;
 data += `<h3 id="text">${jsonResponse.img_text}</h3>`;
 data+=`<h5>${AddDateNew(jsonResponse.img_time)}</h5>`;
data+= `<div class="links">`;
data +=`<a class="Edit" href = "../../FormUpdateNew/templates/formUpdateNew.php${idParameter}">Редактировать</a>`;

data +=`<a class="Delete" data-id = "${jsonResponse.img_id}">Удалить</a>`;
data +="</div>";

container.innerHTML = data;
var hrefDelete = document.querySelector('a[data-id]');

hrefDelete.onclick = async function()
{



  var id = this.getAttribute("data-id");
  response = await fetch(`../includes/DeleteNews.includes.php${idParameter}`,
  {
    method:"GET",
  });
  if (!response.ok)
  {
    throw new Error(`Error in response!!! Your status is ${response.status}`)
  }
  else {
    textResponse = await response.text();
    alert(textResponse);
    window.location.href = "../../Main/templates/main.php"
  }

}
}
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



function showNews() {

let main = document.querySelector("main");
var data = "";
 fetch("../includes/showNews.includes.php",{
  method:"POST",
}).
then(response => response.json()).
then(response => {
  data+= '<div class="top_content">';

data+=`<div class="Last_new" data-id="${response[0].img_id}">
  <div class="Last_new_photo">
  <img src="../../Add_News/img/${response[0].img_photoname}" alt="picture_is_not_found">
  </div>
  <div class="Last_new_text">
  <p>${response[0].img_title}</p>
  <p>${AddDateNew(response[0].img_time)}</p>
  </div>
</div>`;

data +='<div class="Container_Cols_news">';

for (var key = 1; key <=4; key++)
{
  if (key == 1)
  {
    data +=`<div class="Cols_news first" data-id="${response[key].img_id}">`;
  }
  else {
    data +=`<div class="Cols_news" data-id="${response[key].img_id}">`;
  }

  data +=`<div class="Cols_news_photo">
    <img src="../../Add_News/img/${response[key].img_photoname}" alt="picture_is_not_found">
  </div>
  <div class="Cols_news_text">
  <p>${response[key].img_title}</p>
  <h5>${AddDateNew(response[key].img_time)}</h5>
  </div>`;

  /* Close block Cols_news  */
  data+='</div>'
}






/* Close block Container_Cols_news  */
data +='</div>';

/* Close block top_content  */

  data+='</div>';

data +='<div class=Bottom_content>';


for (var key = 5; key < response.length; key++)
{
  data +=`<div class="Container_Bottom_content" data-id="${response[key].img_id}">

    <div class='Container_Bottom_content_photo'>
<img src="../../Add_News/img/${response[key].img_photoname}" alt="">
    </div>

    <div class="Container_Bottom_content_text">

    <p>${response[key].img_title}</p>
    <p>${AddDateNew(response[key].img_time)}</p>
    </div>
  </div>`;
}




/* Close block Bottom_content  */
data +='</div>';
main.innerHTML = data;

BlockDataIdOnClick();
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
    window.location.href = `../../PageNew/templates/pagenew.php?id=${id}`;
  }
}
}








window.onload = function()
{

  showNews();


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

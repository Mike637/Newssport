
let id = document.location.search;


function detailViewNew(idParameter)
{
  let container = document.querySelector(".container");

  data = "";
  fetch("../includes/PageNewView.includes.php"+idParameter,{
   method:"GET",
  }).
  then(response => response.json()).
  then(response =>  {
    data += `<h1>${response.img_title}</h1>`;
    data += `<div class="img">`;
    data += `<img src="../../Add_News/img/${response.img_photoname}" alt="picture_is_not_found">`;
    data +=`</div>`;
    data += `<h3 id="text">${response.img_text}</h3>`;
    data +=`<h4 id="date">${AddDateNew(response.img_time)}</h4>`;
    
container.innerHTML = data;


})
}


  detailViewNew(id);



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


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
 data+=`<h1>${jsonResponse.img_title}</h1>`;
 data += `<div class="img">`;
 data += `<img src="../../Add_News/img/${jsonResponse.img_photoname}" alt="picture_is_not_found">`;
 data +=`</div>`;
 data += `<h3 id="text">${jsonResponse.img_text}</h3>`;
data+= `<div class="links">`;
data +=`<a class="Edit" href = "../../FormUpdateNew/templates/formUpdateNew.php${idParameter}">Редактировать</a>`;

data +=`<a class="Delete" data-id = "${jsonResponse.img_id}">Удалить</a>`;
data +="<div>";
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

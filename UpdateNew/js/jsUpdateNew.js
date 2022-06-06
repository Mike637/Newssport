
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
 data+=`${jsonResponse.img_title}`;
data+=`<a href = "../../FormUpdateNew/templates/formUpdateNew.php${idParameter}">редактировать</a>`;
data +=`<br>`;
data+=`<br>`;
data+=`<a data-id = "${jsonResponse.img_id}" href="#">удалить</a>`;
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

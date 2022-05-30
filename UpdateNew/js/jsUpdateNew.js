let id = document.location.search;

/*
class (includes folder) from PageNew
*/
function detailViewNew(idParameter)
{
  let container = document.querySelector(".container");
  data = "";
  fetch("../../PageNew/includes/PageNewView.includes.php"+idParameter,{
   method:"GET",
  }).
  then(response => response.json()).
  then(response =>  {
    data+=`${response.img_title}`;
data+=`<a href = "../../FormUpdateNew/templates/formUpdateNew.php${idParameter}">редактировать</a>`;
data +=`<br>`;
data+=`<br>`;
data+=`<a href = >удалить</a>`;
container.innerHTML = data;


})
}


window.onload = function()
{

  detailViewNew(id);


}

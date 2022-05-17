
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
    data+=`${response.img_title}`;

container.innerHTML = data;


})
}


window.onload = function()
{

  detailViewNew(id);


}


let id = document.location.search;

function detailViewNew(idParameter)
{
  let main = document.querySelector("main");
  data = "";
  fetch("../includes/PageNewView.includes.php"+idParameter,{
   method:"GET",
  }).
  then(response => response.json()).
  then(response =>  {
    data+=`${response.img_title}`;

main.innerHTML = data;


})
}


window.onload = function()
{

  detailViewNew(id);


}

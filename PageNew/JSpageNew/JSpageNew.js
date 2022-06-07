
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

container.innerHTML = data;


})
}


  detailViewNew(id);

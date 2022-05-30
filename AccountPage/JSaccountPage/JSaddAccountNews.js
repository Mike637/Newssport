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
      <p>${response[key].img_time}</p>
      </div>
    </div>`;
  }
data +='</div>';
main.innerHTML = data;

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


/*
response => data.innerHTML = `<p>${response}</p>`
console.log(JSON.parse(response))

*/
window.onload = function()
{

  addAccountNews();


}

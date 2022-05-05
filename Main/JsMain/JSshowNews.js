

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
  <p>${response[0].img_time}</p>
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
  <p>${response[key].img_time}</p>
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
    <p>${response[key].img_time}</p>
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

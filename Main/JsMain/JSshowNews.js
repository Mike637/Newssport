

function showNews() {

let main = document.querySelector("main");
var data = "";
return fetch("../includes/showNews.includes.php",{
  method:"POST",
}).
then(response => response.json()).
then(response => {
  data+= '<div class="top_content">';

data+=`<div class="Last_new">
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
    data +='<div class="Cols_news first">';
  }
  else {
    data +='<div class="Cols_news">';
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
  data +=`<div class="Container_Bottom_content">

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
})
}



/*
























*/

window.onload = function()
{

  showNews();


}
/*
<div class="top_content">
  <div class="Last_new">
    <div class="Last_new_photo">
    <img src="img/Messi.jpg" alt="picture_is_not_found">
    </div>
    <div class="Last_new_text">
    <p>EL SHAARAWY DERAILS NAPOLI SERIE A HOPES AS ROMA CLING TO CHAMPIONS LEAGUE PURSUIT</p>
    <p>9 hours ago</p>
    </div>
  </div>


<div class="Container_Cols_news">
<div class="Cols_news first">
<div class="Cols_news_photo">
<img src="img/CriRo.jpg" alt="picture_is_not_found">
</div>
<div class="Cols_news_text">
<p>PREMIER LEAGUE</p>
<p>HAALAND THE CORNERSTONE OF MAN CITY’S NEW TREBLE PURSUIT – THE WARM-UP</p>
<p>10 hours ago</p>
</div>
</div>

<div class="Cols_news">
<div class="Cols_news_photo">
<img src="img/CriRo.jpg" alt="picture_is_not_found">
</div>
<div class="Cols_news_text">
<p>PREMIER LEAGUE</p>
<p>HAALAND THE CORNERSTONE OF MAN CITY’S NEW TREBLE PURSUIT – THE WARM-UP</p>
<p>10 hours ago</p>
</div>
</div>


<div class="Cols_news">
<div class="Cols_news_photo">
<img src="img/CriRo.jpg" alt="picture_is_not_found">
</div>
<div class="Cols_news_text">
<p>PREMIER LEAGUE</p>
<p>HAALAND THE CORNERSTONE OF MAN CITY’S NEW TREBLE PURSUIT – THE WARM-UP</p>
<p>10 hours ago</p>
</div>
</div>
<div class="Cols_news">
<div class="Cols_news_photo">
<img src="img/owenRonaldoReal.jpg" alt="picture_is_not_found">
</div>
<div class="Cols_news_text">
<p>PREMIER LEAGUE</p>
<p>HAALAND THE CORNERSTONE OF MAN CITY’S NEW TREBLE PURSUIT – THE WARM-UP</p>
<p>10 hours ago</p>
</div>
</div>
</div>


</div>
*/


var imgContent = document.querySelector(".imgContent");



function GetContentofNew() {

var data ='';




return fetch("../includes/getContentOfNew.includes.php" + document.location.search,{
  method:"GET",
}).
then(response => response.json()).
then(response => {
title.value = response[0].img_title;
textarea.value = response[0].img_text;
data += `<img src="../../Add_News/img/${response[0].img_photoname}" alt="picture_is_not_found">`;
imgContent.innerHTML = data;
});
}


GetContentofNew()

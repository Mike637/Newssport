
var title = document.querySelector("input[type = text]");

var text = document.querySelector("textarea");

var photo = document.querySelector("input[type = file]");

var button = document.querySelector("input[type = button]");


button.onclick = () => {


 formdata = new FormData();
 formdata.append("title",title.value);
 formdata.append("text",text.value);
 formdata.append("photo",photo.files[0]);


return fetch("../includes/addNews.includes.php",{
  method:"POST",
  body:formdata,
}).
then(response => response.text()).
then(response => alert(response))
}

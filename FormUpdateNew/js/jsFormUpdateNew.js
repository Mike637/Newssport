


let file = document.querySelector('input[type = "file"]');
let title = document.querySelector('input[type = "text"]');

let textarea = document.querySelector('textarea');





button = document.querySelector('button[type = "button"]');

formdata = new FormData();


button.onclick = function()
{
  formdata.append('title',title.value);
formdata.append('text',textarea.value);
formdata.append('photo',file.files[0]);


return fetch("../includes/formUpdateNews.includes.php" + document.location.search,{
  method:"POST",
  body:formdata,
}).
then(response => response.text()).
then(response => alert(response));
}

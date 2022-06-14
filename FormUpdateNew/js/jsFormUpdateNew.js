

var error = '';
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
if (errorInputTitleOrText() == false)
{
  alert(error)
}
else if (errorPictureInput() == false)
{
  alert(error)
}

else {
return fetch("../includes/formUpdateNews.includes.php" + document.location.search,{
  method:"POST",
  body:formdata,
}).
then(response => response.text()).
then(response =>
  {
alert(response);
window.location.reload(); 
});
}
}






function errorPictureInput()
{
  if (file.files[0] == undefined)
  {

    return true;
  }

else
{
  if (avialableFormatOfPictures() == undefined)
  {
   error = "Некорректный формат изобажения";
   return false;
  }
  else
  {
    return true
  }
}

}



function errorInputTitleOrText()
 {

if (title.value == '' || textarea.value == '')

{
   error = "Заполните пустые поля";
   return false
    }


    else if (title.value.length > 34)
    {
      error = "Недопустимое количество символов в заголовке";
      return false
    }

    else
    {
      return true
    }

}





function avialableFormatOfPictures()
{

  var  formatOfPicture = file.files[0].name.split('.')[1];
  var listOfPictureFormat = ['tiff','jpeg','bmp','png','gif','svg','JPG','jpg'];
 for (value of listOfPictureFormat)
 {
   if (formatOfPicture !== value)
   {
     continue
   }

   else
   {
     return true
   }
 }

}

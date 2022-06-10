
var title = document.querySelector("input[type = text]");

var text = document.querySelector("textarea");

var photo = document.querySelector("input[type = file]");

var button = document.querySelector("input[type = button]");

var error = '';

button.onclick = () => {


  if (errorInputTitleOrText() == false)
  {
    alert(error)
  }
  else if (errorPictureInput() == false)
  {
    alert(error)
  }

  else {


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
}







function errorInputTitleOrText()

{


  if (title.value == '' || text.value == '')

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


function errorPictureInput()
{
  if (photo.files[0] == undefined)
  {
    error = "Фотография не выбрана";
    return false;
  }

  else if (avialableFormatOfPictures() == undefined)
  {
    error = "Некорректный формат изобажения";
    return false;
  }

  else
  {

    return true
  }
}





function avialableFormatOfPictures()
{

  var  formatOfPicture = photo.files[0].name.split('.')[1];
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

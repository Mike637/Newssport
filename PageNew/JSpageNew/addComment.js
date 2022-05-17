
let new_id = document.location.search;
var addComment = document.getElementsByClassName('addComment')[0];




addComment.addEventListener('keydown',function(event)
{
  if (event.key == 'Enter')
{
     if (sessionEmail == '')
  {
    alert("чтобы оставлять комментарии, необходимо Войти в личный кабинет");
window.location.href = "../../registration_login/templates/login.php";
  }
  else {
    /*
commentAdd(new_id);
*/
this.selectionStart = 0;
commentAdd(new_id);
this.value = '';
window.location.reload();
  }
  }

})

window.onload = function()
{
  commentGet(new_id);
}



function commentAdd(idParameter)
{
  formdata = new FormData();
  formdata.append("text",addComment.value.trim());
  /*
  let container = document.querySelector(".container");
  data = "";
  */
  fetch("../includes/AddComments.includes.php"+ idParameter,{
   method:"POST",
   body:formdata
  }).
  then(response => response.text()).
  then(response =>  console.log(response))
}




function commentGet(idParameter)
{

  let comments = document.querySelector(".comments");
  data = "";

  fetch("../includes/GetComments.includes.php"+ idParameter,{
   method:"GET",
  }).
  then(response => response.text()).
  then(response =>   {
    data += response;
    comments.innerHTML = data;
})
}

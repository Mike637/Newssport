
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
  then(response => response.json()).
  then(response =>   {

    for (var key =0; key < response.length;key++)
    {


      var div = document.createElement("div");
      div.className = "commentBlock";
      div.setAttribute("data-id",response[key].sportComments_id);

      var p_AuthComment = document.createElement("p");
      p_AuthComment.className = "authorComment";

      p_AuthComment.innerText = `Автор: ${response[key].sportComments_author}`;

      div.appendChild(p_AuthComment);

      var p_TextComment = document.createElement("p");
      p_TextComment.className = "textComment";
      p_TextComment.innerText = `Комментарий: ${response[key].sportComments_text}`;
      div.appendChild(p_TextComment);


      if (p_AuthComment.innerText.substr(6).trim() == sessionEmail)
      {


        var a = document.createElement("a");
        a.innerText = "Редактировать";
        a.setAttribute("href","#");
        a.className="editComment";

        div.appendChild(a);
        var a = document.createElement("a");
        a.innerText = "Удалить";
        a.setAttribute("href","#");
          a.className="deleteComment";

        div.appendChild(a);

      }

      comments.appendChild(div);


    }

deletecomments();

})
}


function deletecomments()
{
  var deleteComment = document.getElementsByClassName("deleteComment");
  var commentblock = document.getElementsByClassName("commentblock");



  for (var key=0;key< deleteComment.length;key++)

  {
    deleteComment[key].addEventListener('click',function()
  {
/*
dataId = commentblock[key].getAttribute('data-id');
console.log(dataId);
*/
console.log(key);
  })
  }

}

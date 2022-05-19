
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
  then(response =>  alert(response))
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
editcomments();
})

}


function deletecomments()
{
  var deleteComment = document.getElementsByClassName("deleteComment");



for (element of deleteComment)
{
  /*

  */
element.onclick = function()
{
  var parentBlockId = this.parentElement.getAttribute("data-id");
  fetch("../includes/DeleteComments.includes.php?id="+ parentBlockId,{
   method:"GET",
  }).
  then(response => response.text())
  .then(response => {
    alert(response);
 window.location.reload();
  })


}
}

}




function editcomments()
{
  var editComment = document.getElementsByClassName("editComment");



for (element of editComment)
{



element.onclick = function()

{
parentBlock=this.parentElement;
console.log(parentBlock.childNodes[1].innerText.substr(12).trim());
  var parentBlockId = parentBlock.getAttribute("data-id");


  var div = document.createElement("div");
  div.className = "form";
  div.setAttribute("data-id",parentBlockId);
  var form = document.createElement("form");
  var textarea = document.createElement("textarea");
  textarea.value = parentBlock.childNodes[1].innerText.substr(12).trim();
  var button = document.createElement("button");
  button.innerText = "Обновить";
  form.appendChild(textarea);

  form.appendChild(button);
  div.appendChild(form);
  parentBlock.replaceWith(div);

  button.onclick = function()
  {
    parentBlock.childNodes[1].innerText = "Комментарий: " + textarea.value

div.replaceWith(parentBlock);

  }
  /*
  fetch("../includes/DeleteComments.includes.php?id="+ parentBlockId,{
   method:"GET",
  }).
  then(response => response.text())
  .then(response => {
    alert(response);
 window.location.reload();
  })

*/
}

}

}

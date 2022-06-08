
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

commentAdd(new_id);

this.selectionStart = 0;

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

        var span = document.createElement("span");
        var a = document.createElement("a");
        a.innerText = "Редактировать";

        a.className="editComment";

        span.appendChild(a);
        var a = document.createElement("a");
        a.innerText = "Удалить";

          a.className="deleteComment";
          span.appendChild(a)
        div.appendChild(span);

      }

      var hr = document.createElement("hr");
      div.appendChild(hr);

      comments.appendChild(div);


    }
editcomments();
deletecomments();

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
  var parentBlockId = this.parentElement.parentElement.getAttribute("data-id");
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
var parentSpan=this.parentElement;

var parentBlock=parentSpan.parentElement;
var textcomment = parentBlock.childNodes[1];

  var parentBlockId = parentBlock.getAttribute("data-id");


  var div = document.createElement("div");
  div.className = "form";
  div.setAttribute("data-id",parentBlockId);
  var form = document.createElement("form");
  var textarea = document.createElement("textarea");
  textarea.className = "UpdateComment";
  textarea.value = parentBlock.childNodes[1].innerText.substr(12).trim();
  var btnUpdate = document.createElement("button");
  btnUpdate.className = "UpdateClickBtn";
  btnUpdate.innerText = "Обновить";
  var btnCancel = document.createElement("button");
  btnCancel.className = "DeleteClickBtn";
  btnCancel.innerText ="Отменить";
  var p = document.createElement("p");
  p.className = "Buttons";
  form.appendChild(textarea);

p.appendChild(btnUpdate);
p.appendChild(btnCancel);
  form.appendChild(p);



  div.appendChild(form);

textcomment.replaceWith(div);
parentSpan.style.display = "none";

btnCancel.onclick = function()
{
  div.replaceWith(textcomment);
  parentSpan.style.display = "inline-block";
}

  btnUpdate.onclick = function()
  {
  textcomment.innerText = "Комментарий: " + textarea.value

div.replaceWith(textcomment);
  formdata = new FormData();
  formdata.append("text",textarea.value.trim());
  fetch("../includes/EditComments.includes.php?id="+ parentBlockId,{
   method:"POST",
   body:formdata
  }).
  then(response => response.text())
  .then(response => {
    alert(response);

  })
  parentSpan.style.display = "inline-block";
window.location.reload();

  }

  textarea.onkeydown = function(event)
  {

  if (event.key == 'Enter')
  {
    textcomment.innerText = "Комментарий: " + textarea.value

  div.replaceWith(textcomment);
    formdata = new FormData();
    formdata.append("text",textarea.value.trim());
    fetch("../includes/EditComments.includes.php?id="+ parentBlockId,{
     method:"POST",
     body:formdata
    }).
    then(response => response.text())
    .then(response => {
      alert(response);

    })
parentSpan.style.display = "inline-block";

  }
  }






}

}

}


let  container =document.querySelector(".container");
container.innerHTML = "";
let get =  document.location.search;
let id =  get.substr(4);
let form = document.querySelector("form");

let idPostEdit = null;








async function getAllPosts()
{
  const res = await fetch("api.php");
  const posts = await res.json();
for (post of posts[0])
{
  container.innerHTML += `<div class="post">
  <h5>${post.title}</h5>
  <p>${post.body}</p>
  <a href="index.php?id=${post.id}" >Подробнее</a>
  <a onclick="deletePost('${post.id}')">Удалить</a>
    <a onclick="selectPost('${post.id}','${post.title}','${post.body}')" >Редактировать</a>
  </div>`;
}

container.innerHTML += `<h1>Добавление поста</h1>
<form class="form" method="post">
 <label for="title">Заголовок</label>
 <br>
 <input type="text" name="title" class="title" value="">
<br>
<label for="body">Текст поста</label>
<br>
<input type="text" name="body" class="body" value="">
<br>
<br>
<button type="button" name="buttonAdd" class="buttonAdd" onclick="addPost(title,body)">Отправить пост</button>
</form>
<h1>Редактирование поста</h1>
<form class="form-edit">
 <label for="title-edit">Заголовок</label>
 <br>
 <input type="text" name="title-edit" class="title-edit" value="">
<br>
<label for="body-edit">Текст поста</label>
<br>
<input type="text" name="body-edit" class="body-edit" value="">
<br>
<br>
<button type="button" name="buttonEdit" class="buttonEdit" onclick = "updatePost(idPostEdit)" >Редактировать пост</button>
</form>`;

var buttonEdit = document.querySelector(".buttonEdit");


}


async function getPost(post_id)
{

  const res = await fetch(`api.php?id=${post_id}`);
  const post = await res.json();
  if (!post[0].id)
  {
    container.innerHTML += `<div class="error">
    <h1>${post[0].status}</h1>
    <h1>${post[0].message}</h1>
    <a href="index.php" >На главную</a>
    </div>`;
  }
else
{
  container.innerHTML += `<div class="post">
  <h5>${post[0].title}</h5>
  <p>${post[0].body}</p>
  <a href="index.php" >На главную</a>
  </div>`;
}

}

async function addPost(title,body)
 {

   title = document.querySelector(".title").value;
body = document.querySelector(".body").value;
 formdata = new FormData();
 formdata.append("title",title);
 formdata.append("body",body);
const postMethod = await fetch("api.php",{
  method:"POST",
  body:formdata,
});
const response = await postMethod.json();
console.log(response);
container.innerHTML = "";
await getAllPosts();


 }
  function selectPost(post_id,title,body)
 {

  idPostEdit = post_id;
    document.querySelector(".title-edit").value = title;
document.querySelector(".body-edit").value = body;


 }

async function updatePost(idPostEdit)
 {

title = document.querySelector(".title-edit").value;
body = document.querySelector(".body-edit").value;
const data = {
  "title":title,
  "body":body,
}

const patchMethod = await fetch(`api.php?id=${idPostEdit}`,{
  method:"PATCH",
 body:JSON.stringify(data),
});
const response = await patchMethod.json();

console.log(response);
container.innerHTML = "";
await getAllPosts();


 }

 async function deletePost(post_id)
 {
   const deleteMethod = await fetch(`api.php?id=${post_id}`,{
     method:"DELETE",
   });
   const response = await deleteMethod.json();

   console.log(response);
   container.innerHTML = "";
   await getAllPosts();
 }


  if (!!id)
  {
     getPost(id)

  }
  else
  {
     getAllPosts();

  }

/*
addPost();
*/

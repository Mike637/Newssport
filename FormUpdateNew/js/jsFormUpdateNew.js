


let file = document.querySelector('input[type = "file"]');

var object = new File(['new file'],'filename.txt')



button = document.querySelector('button[type = "button"]');

console.log(button);

file.files = object;

button.onclick = function()
{
  console.log(file.files[0]);

}

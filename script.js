const div = document.createElement("div");
div.textContent = "Button!";
div.id = "button"
document.querySelector("body").appendChild(div);
const input = document.getElementById('button');
input.addEventListener('click', function() {
  input.style.backgroundColor = "#FF69B4";
  alert('I was clicked!');
});
const form = document.getElementsById("infoForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const age = document.getElementById("age").value;
  const number = document.getElementById("number").value;

  const table = document
    .getElementById("infoTable")
    .getElementsByTagName("tbody")[0];
});

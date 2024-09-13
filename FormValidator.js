const form = document.getElementById("infoForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const age = document.getElementById("age").value;
  const number = document.getElementById("number").value;

  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.textContent = name;
  cell2.textContent = birthdate;
  cell3.textContent = age;
  cell4.textContent = number;
  cell5.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
});

function deleteRow(evt) {
  const deleteIndex = evt.parentElement.parentElement.rowIndex;
  document.getElementById("myTable").deleteRow(deleteIndex);
}

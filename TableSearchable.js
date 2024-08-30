"use strict";
const searchInput = document.querySelector(".search-input");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    if (text.indexOf(filter) > -1) {
      row.classList.remove("hide");
    } else {
      row.classList.add("hide");
    }
  });
});

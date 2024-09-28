function changeColor(element) {
  const buttons = document.querySelectorAll(".indicator-button button");
  const group = document.querySelectorAll(".indicator-button");

  buttons.forEach((btn) => {
    btn.classList.remove("clicked");
  });
  group.forEach((grp) => {
    grp.classList.remove("clicked");
    grp.classList.remove("active");
  });

  element.classList.add("clicked");
  element.parentElement.classList.add("clicked");
  element.parentElement.classList.add("active");
}

function changeColor(element) {
  // Mendapatkan semua button dalam grup
  const buttons = document.querySelectorAll(".indicator-button button");

  // Menghapus kelas 'clicked' dari semua button
  buttons.forEach((btn) => {
    btn.classList.remove("clicked");
  });

  // Menambahkan kelas 'clicked' pada button yang diklik
  element.classList.add("clicked");

  // Menghapus kelas 'clicked' dari semua indicator-button
  const group = document.querySelectorAll(".indicator-button");
  group.forEach((grp) => {
    grp.classList.remove("clicked");
  });

  // Menambahkan kelas 'clicked' pada parent div dari button yang diklik
  element.parentElement.classList.add("clicked");
}

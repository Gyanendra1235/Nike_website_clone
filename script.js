/* <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> */
function showPage(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
// ----------------
const scrollBox = document.getElementById("scrollBox");

function scrollLeft() {
  scrollBox.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  scrollBox.scrollBy({ left: 300, behavior: "smooth" });
}
// ---------------------------------
function showSection(sectionId) {
  // sabhi sections ko hide karo
  const sections = document.querySelectorAll('.product-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // sirf clicked section ko show karo
  document.getElementById(sectionId).classList.add('active');
}


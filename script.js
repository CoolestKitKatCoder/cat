function showCat() {
  let text = document.getElementById("catText");
  let img = document.getElementById("catImg");
  let btn = document.querySelector("button");

  text.style.display = "block";
  img.style.display = "block";

  setTimeout(() => {
    text.classList.add("show");
    img.classList.add("show");
  }, 50);

  btn.classList.add("clicked");
}

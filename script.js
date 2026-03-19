function showCat() {
  let text = document.getElementById("catText");
  let img = document.getElementById("catImg");
  let btn = document.querySelector("button");

  // show elements
  text.style.display = "block";
  img.style.display = "block";

  // trigger animations
  setTimeout(() => {
    text.classList.add("show");
    img.classList.add("show");
  }, 50);

  // button bounce
  btn.classList.add("clicked");
  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 400);
}


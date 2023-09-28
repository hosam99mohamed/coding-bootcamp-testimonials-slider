let john = document.querySelector(".john");
let tanya = document.querySelector(".tanya");
let prev = document.querySelectorAll(".prev-button");
let next = document.querySelectorAll(".next-button");

john.classList.add("hide");

let slideChange = () => {
  if (john.classList.contains("hide")) {
    john.classList.remove("hide");
    tanya.classList.add("hide");
  } else if (tanya.classList.contains("hide")) {
    tanya.classList.remove("hide");
    john.classList.add("hide");
  } else {
    john.classList.add("hide");
  }
};

prev.forEach((item) => item.addEventListener("click", slideChange));
next.forEach((item) => item.addEventListener("click", slideChange));



//creating toggle button function to handle mobile menu behaviour
const toggle = () => {
  const menu = document.querySelector(".menuNav");
  menu.classList.toggle("menuNav--open");
};
// setting buttons const
const closeButton = document.querySelector(".closeButton");
const hamburguerButton = document.querySelector(".hamburguerButton");
// handling button events
hamburguerButton.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle);

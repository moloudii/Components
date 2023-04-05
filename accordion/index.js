// const items = document.querySelectorAll(".collapse");
// let activeItem;
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", (event) => {
//     const current = event.currentTarget;
//     if (activeItem) {
//       activeItem.classList.remove("open");
//     }
//     activeItem = current;
//     current.classList.add("open");
//   });
// }

const accordion = document.querySelector(".collapse-content");
let activeItem;
accordion.addEventListener("click", (event) => {
  const current = event.target.closest(".collapse");
  if (activeItem) {
    activeItem.classList.remove("open");
  }
  if (current) {
    activeItem = current;
    event.target.closest(".collapse").classList.add("open");
  }
});

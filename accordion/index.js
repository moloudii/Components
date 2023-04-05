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

const accordions = document.querySelectorAll("[data-accordion]");
for (let i = 0; i < accordions.length; i++) {
  let activeItem;
  accordions[i].addEventListener("click", (event) => {
    const current = event.target;
    const target =
      current.hasAttribute("data-collapse-able") ||
      current.closest("[data-collapse-able]");

    if (activeItem) {
      activeItem.classList.remove("open");
    }
    if (target) {
      activeItem = target;
      target.classList.add("open");
    }
  });
}

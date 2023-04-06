function toast(text, duration) {
  const message = document.querySelector(".toast");
  message.classList.add("toast--show");
  message.innerText = text;
  setTimeout(() => message.classList.remove("toast--show"), duration);
}

const button = document.querySelector("button");
button.addEventListener("click", () => toast("some text some message", 700));

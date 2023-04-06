const forms = document.querySelectorAll("[data-validation]");

const messages = {
  valueMissing: () => "the value is required",
  patternMismatch: () => "the format is false",
  tooShort: (target) => `You have to enter ${target.minLength} character`,
};

const validityKeys = Object.keys(messages);

forms.forEach((form) => {
  form.addEventListener("input", (e) => {
    const { target } = e;
    const erroredElement = target.parentElement.querySelectorAll("small");
    erroredElement.forEach((elm) => elm.remove());
    validityKeys.forEach((key) => {
      if (target.validity[key]) {
        generateError(target, key);
      }
    });
  });
});

function generateError(target, key) {
  const errorEl = document.createElement("small");
  errorEl.innerHTML = messages[key](target);
  target.parentElement.appendChild(errorEl);
}

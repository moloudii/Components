class Toast {
  _defaultOption = {
    duration: 500,
  };
  constructor(options = {}) {
    this._configs = { ...this._defaultOption, ...options };
  }
  show(message, type = "default") {
    const container = this._buildAndAppendContainer();
    const messageElm = this._buildMessage(message, type);
    container.appendChild(messageElm);
    this._destroyMessage(messageElm);
  }

  _buildAndAppendContainer() {
    if (!this._container) {
      this._container = this._buildElement("toast-container");
      document.body.appendChild(this._container);
    }
    return this._container;
  }
  _buildMessage(message, type) {
    const messageElm = this._buildElement("toast-message");
    messageElm.innerText = message;
    messageElm.classList.add(`toast--${type}`);
    return messageElm;
  }
  _buildElement(className) {
    const elm = document.createElement("div");
    elm.classList.add(className);
    return elm;
  }
  _destroyMessage(message) {
    setTimeout(() => {
      message.remove();
      if (!this._container.children.length) {
        this._container.remove();
      }
    }, this._configs.duration);
  }
}

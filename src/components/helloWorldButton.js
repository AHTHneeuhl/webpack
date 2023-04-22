import "./helloWorldButton.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello world";
    button.classList.add(this.buttonCssClass);

    button.addEventListener("click", function () {
      const text = document.createElement("p");
      text.innerHTML = "Hello world";
      text.classList.add("hello-world-text");

      const body = document.querySelector("body");
      body.appendChild(text);
    });

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;

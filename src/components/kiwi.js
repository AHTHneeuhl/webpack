import Kiwi from "../tf.png";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    img.src = Kiwi;
    img.alt = "Kiwi";
    img.classList.add("kiwi");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default KiwiImage;

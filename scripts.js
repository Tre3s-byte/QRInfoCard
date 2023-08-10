class CardInjector {
  constructor(containerSelector, asideSelector) {
    this.container = document.querySelector(containerSelector);
    this.aside = document.querySelector(asideSelector);
  }

  insertHTML(element, html) {
    element.insertAdjacentHTML("Beforeend", html);
  }

  injectContent(data) {
    this.insertHTML(this.aside, data.themeButtons);
    this.insertHTML(this.container, data.content);
    this.insertHTML(this.container, data.attribution);
  }
}
const contentData = {
  content: `
    <img src="./images/image-qr-code.svg" alt="Generate QR code" class="card__qr" width="360" height="360" loading="lazy"/>
    <div class="container__text-container">
      <h1 class="card-title">Improve your front-end skills by building projects</h1>
      <p class="informative-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

    </div>
  `,
  themeButtons: ` 
    <div class="theme__container">
      <input type="checkbox" id="theme-switcher" class="theme-switcher" name="mode"/>
      <label for="theme-switcher" class="theme-label label"></label>
    </div>
    
  `,
  attribution: `
    <div class="attribution aside">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
      <a href="https://www.linkedin.com/in/tre3s-byte/" target="_blank">tre3s-byte</a>.
    </div>
  `,
};
const cardInjector = new CardInjector(".card", ".themes");
cardInjector.injectContent(contentData);

let checkbox = document.querySelector("input[name=mode]");

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("class", "dark");
  } else {
    document.body.removeAttribute("class");
  }
});

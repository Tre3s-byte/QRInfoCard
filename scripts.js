class CardInjector {
  constructor(containerSelector, asideSelector) {
    this.container = document.querySelector(containerSelector);
    this.aside = document.querySelector(asideSelector);
    this.themeButtons = document.querySelectorAll('input[name="theme-radio"]');
  }

  insertHTML(element, html) {
    element.insertAdjacentHTML("Beforeend", html);
  }

  injectContent(data) {
    this.insertHTML(this.aside, data.themeButtons);
    this.insertHTML(this.container, data.content);
    this.insertHTML(this.container, data.attribution);
  }

  themeSwitcher() {
    this.themeButtons.forEach((button) => {
      button.addEventListener("change", () => {
        document.body.classList.toggle("dark-theme"); // Removed the dot before "dark-theme"
      });
    });
  }
}
const contentData = {
  content: `
    <img src="./images/image-qr-code.png" alt="Generate QR code" class="card__qr" width="360" height="360"/>
    <div class="container__text-container">
      <h1 class="card-title">Improve your front-end skills by building projects</h1>
      <p class="informative-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      
    </div>
  `,
  themeButtons: ` 
    <div class="theme__container">
      <input type="radio" id="dark" class="dark-radio radio" name="theme-radio" />
      <label for="dark" class="dark-label label"><img src="./images/dark-mode.png" alt="" /></label>
    </div>
    <div class="theme__container">
      <input type="radio" id="light" class="light-radio radio" name="theme-radio" checked />
      <label for="light" class="light-label label"><img src="./images/light-mode.png" alt="" /></label>
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
cardInjector.themeSwitcher();

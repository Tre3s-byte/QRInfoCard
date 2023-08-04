const container = document.querySelector(".card");
const aside = document.querySelector(".themes-container");
// const darkTheme = document.querySelector(".theme__dark");

const contentData = {
  content: `
<img src="./images/image-qr-code.png" alt="Generate QR code" class="card__qr" width="360" height="360"/>
<div class="container__text-container">
  <h1 class="card-title">Improve your front-end skills by building projects</h1>
  <p class="informative-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
</div>
`,
  themeButtons: ` 
<fieldset class="buttons">
<input type="button" class="theme__dark button" name="theme" />
<input type="button" class="theme__light button" name="theme" />
</fieldset>
`,
  attribution: `<div class="attribution aside">
Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
<a href="https://www.linkedin.com/in/tre3s-byte/" target="_blank">tre3s-byte</a>.
</div>`,
};

function codeInjection(data) {
  aside.insertAdjacentHTML("Afterbegin", data.themeButtons);
  container.insertAdjacentHTML("Beforeend", data.content);
  container.insertAdjacentHTML("Afterend", data.attribution);
}
codeInjection(contentData);

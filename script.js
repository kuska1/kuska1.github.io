document.documentElement.lang = navigator.language || navigator.userLanguage;

console.log(
    '%cWhat are you looking here?',
    `
      margin: 30px 0px 30px 30px;
      padding: 12px 12px 12px 12px;
      font-family: 'Comic Sans MS';
      font-size: 24px;
      color: pink;
      background-color: transparent;
      border-radius: 16px;
      border: 4px solid black;
    `
)

function alertInfo() {
    let i;
    let alert_element = document.getElementsByClassName("alert-info")[0];
    alert_element.style.opacity = 100;
    setTimeout(function(){alert_element.style.opacity = 0}, 2500)
}

function copyText(varID) {
    var copyText = document.getElementById(varID);
    navigator.clipboard.writeText(copyText.textContent).then(() => {
        alertInfo();
        // alert("Successfully copied!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
function openWindow(varID) {
    var windowText = document.getElementById(varID);
    window.open(windowText.textContent, '_blank')
    // alertInfo() 
    console.log("Successfully opened!");
}
function openCustomWindow(link) {
    window.open(link, '_blank')
    // alertInfo() 
    console.log("Successfully opened!");
}

function applyTheme() {
    const buttons = document.querySelectorAll(".header-dialog-appearance-item-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const html = document.documentElement;
            const body = document.body;
            switch (button.id) {
                case "appe-light":
                    html.style.colorScheme = "light";
                    body.style.colorScheme = "light";
                    break;
                case "appe-system":
                    html.style.colorScheme = "light dark";
                    body.style.colorScheme = "light dark";
                    break;
                case "appe-dark":
                    html.style.colorScheme = "dark";
                    body.style.colorScheme = "dark";
                    break;
            }
        });
    });
}

function activateLanguageButton() {
    const currentLanguage = document.documentElement.lang;
    const activeButton = document.querySelector(`#lang-${currentLanguage}`);
    document.querySelectorAll('.header-dialog-languages-item-button').forEach(button => {
        button.classList.remove('active');
    });
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function setupLanguageSwitcher() {
    const languageButtons = document.querySelectorAll('.header-dialog-languages-item-button');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const selectedLanguage = button.id.replace('lang-', '');
            document.documentElement.lang = selectedLanguage;
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    activateLanguageButton();
    setupLanguageSwitcher();
});
document.documentElement.lang = navigator.language || navigator.userLanguage;

function copyText(varID) {
    var copyText = document.getElementById(varID);
    navigator.clipboard.writeText(copyText.textContent).then(() => {
        alert("Successfully copied!");
    }).catch(err => {
        copyText.style.display = "none";
        console.error("Failed to copy text: ", err);
    });
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
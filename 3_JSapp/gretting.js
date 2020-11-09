const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS,text);
}



function handleSubmit(event) {
    event.preventerDefalut();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}



function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}



function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}



function loadName() {
    const currentUser = localStorage.getItem();
    if(currentUser === null) {
        // ??
        askForName()
    }
    else {
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();
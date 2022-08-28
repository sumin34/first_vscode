const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form")
const h1 = document.querySelector("#greeting");

const HIDEDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const username = loginInput.value;

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDEDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //h1.innerText = "Hello "+username;
    paintGreetings(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

//onLoginSubmit(info)


function paintGreetings(username){
    h1.classList.remove(HIDEDEN_CLASSNAME);
    h1.innerText = ` ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){
    loginForm.classList.remove(HIDEDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(username);
}

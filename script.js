//bouton btn-success
const btnSuccess = document.querySelector(".btn-success");
console.log(btnSuccess);

//Dic cookies
const cookies = document.querySelector(".cookies");
console.log(cookies);

const titre = document.querySelector(".titre");
console.log(titre);

btnSuccess.addEventListener("click", ()=>{
console.log("bouton cliquer");
cookies.style.opacity = "0";
titre.style.color = "green";
})
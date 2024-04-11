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

////////////////////test///////////////////

const jour = document.querySelector(".jour");
console.log(jour);
const container = document.querySelector(".container");

jour.addEventListener("click", ()=>{
    // container.style.background = "white";
    if ( container.style.background !=  "white") {
        container.style.background = "white";
        titre.innerHTML = "JOUR";
    } else {
        container.style.background = "black";
        titre.innerHTML = "NUIT";
    }
})
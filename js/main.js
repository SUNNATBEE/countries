// Dark mode start
const elBtn = document.querySelector(".site-header__btn");

elBtn.addEventListener("click" , function(){
    document.body.classList.toggle("root");
});

// Get form elements
const elForm = document.querySelector(".form-js");
const elInput = document.querySelector(".input-search-js");
const elSelect = document.querySelector(".select-js");

// Get template elements
const countryList = document.querySelector(".countries__list");
const elTemplate = document.querySelector(".country__template").content;

// Render function
function renderCountry(arr,node){
    node.innerHTML = ""
    const elFragmet = document.createDocumentFragment();
    arr.forEach(item => {
        const elCloneTemplate = elTemplate.cloneNode(true);
        elCloneTemplate.querySelector(".countries__image").src = item.flags.png;
        elCloneTemplate.querySelector(".countries__title").textContent = item.name.common.slice(0,13) + "...";
        elCloneTemplate.querySelector(".countries__population").textContent = item.population;
        elCloneTemplate.querySelector(".countries__region").textContent = item.region;
        elCloneTemplate.querySelector(".countries__capital").textContent = item.capital;
        elFragmet.appendChild(elCloneTemplate);
    });
    node.appendChild(elFragmet);
}

// Try catch Fetch
async function GetApi(url){
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderCountry(data,countryList);
        
    } catch (error) {
        console.log(error);
    }
}
GetApi("https://restcountries.com/v3.1/all");


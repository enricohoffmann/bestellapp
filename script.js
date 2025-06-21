function onInit() {
    //Header und Footer laden
    //einen Anbieter laden
    //createProviderSection();
}


function createProviderSection() {
    let providerSection = document.getElementById('provider-select');
    providerSection.innerHTML += getProviderMainSection();
    insertCategoryHeadline("main");
    insertDishIntoContainer("main", myMainDishes);
}

function insertCategoryHeadline(category) {
    let element = document.getElementById(`${category}Dishes`);
    element.innerHTML += getCategoryHeadline(category == "main" ? "Hauptgerichte" : "Beilagen");
}

function insertDishIntoContainer(category, myDishes) {
    let element = document.getElementById(`${category}Dishes`);
    for(let d = 0; d < myDishes.length; d++){
        element.innerHTML += getDishBanner(category, myDishes[d]);
    }
}
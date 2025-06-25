let isShoppingCardVisible = false;
let deliveryOption = "pickup";

function onInit() {
    let element = document.getElementById('indexSite');
    element.innerHTML += getHeader(true);
    element.innerHTML += getContent();
    element.innerHTML += getFooter();
    createProviderSection();
}


function createProviderSection() {
    let providerSection = document.getElementById('provider-select');
    providerSection.innerHTML += getProviderSection();
    createCategorySection('main', myMainDishes, "./assets/img/french-fries.jpg", "Hauptgericht Bild");
    createCategorySection('side', mySideDishes, "./assets/img/fritten.jpg", "Beilagen Bild");

}

function createCategorySection(category, dishArr, imgSource, imgAlt) {
    let providerContainer = document.getElementsByClassName('provider-container')[0];
    providerContainer.innerHTML += getProviderCategorySection(category, imgSource, imgAlt);
    insertCategoryHeadline(category);
    insertDishIntoContainer(category, dishArr); 
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


function getShoppingCardSumary() {
    const subtotalMain = getSumCategory('main');
    const subtotalSide = getSumCategory('side');
    const subtotal = Number.parseFloat(subtotalMain.subTotalCategoryDishes.toFixed(2)) + Number.parseFloat(subtotalSide.subTotalCategoryDishes.toFixed(2));
    const deliveryPrice = Number.parseFloat(deliveryOption == "bring" ? 7.50 : 0.00, 2);
    const total = subtotal + deliveryPrice;

    return actualCardResults = {
        'amountMainDisches': subtotalMain.amountCategoryDishes,
        'amountSideDishes': subtotalSide.amountCategoryDishes,
        'subtotal': subtotal,
        'delivery': deliveryPrice,
        'total': total
    }
}

function getSumCategory(category) {
    let sumAmount = 0;
    let sumPrice = 0;

    const myArr = myShoppingCard[category];

    for(let i = 0; i < myArr.length; i++){
        sumAmount += myArr[i].amount;
        sumPrice += Number.parseFloat(myArr[i].price);
    }

    return{
        'amountCategoryDishes':sumAmount,
        'subTotalCategoryDishes':sumPrice
    };

}

function setDisplayShoppingCard(visible) {
    if(visible != isShoppingCardVisible){
        document.getElementById('shopping-card').classList.toggle('d-none');
        isShoppingCardVisible = visible;
    }

    if(!isShoppingCardVisible){
        deliveryOption = "pickup";
    }
}

function renderShoppingCard() {
    let card = document.getElementById('shopping-card');
    card.innerHTML = "";

    renderCategory(card, 'main');

    if(myShoppingCard['side'].length > 0 && myShoppingCard['main'].length > 0){
        card.innerHTML += getShoppingCardSeperator();
    }

    renderCategory(card, 'side');

    card.innerHTML += getDeliveryOptionSwitch(deliveryOption == "bring" ? 'checked' : '');
    card.innerHTML += getSumaryTable(getShoppingCardSumary());
    card.innerHTML += getOrderButton();
}

function renderCategory(card, category) {
    for(let indexCategory = 0; indexCategory < myShoppingCard[category].length; indexCategory++){
        card.innerHTML += getShoppingcardEntry(category, myShoppingCard[category][indexCategory]);
    }
}

function deliveryOnSelect() {
    let element = document.getElementById('delivery-selection');
    deliveryOption = element.checked ? "bring" : "pickup";
    renderShoppingCard();
}

function toggleRespMenu() {
    document.getElementById('resp_menu').classList.toggle("resp_menu_close");

}


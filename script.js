let isShoppingCardVisible = false;
let deliveryOption = "pickup";
let idFromElement = 'shopping-card';

function onInit() {
    let element = document.getElementById('indexSite');
    element.innerHTML += getHeader(true);
    element.innerHTML += getContent();
    element.innerHTML += getFooter();
    createProviderSection();
    loadSoppingCardData();
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
    for (let d = 0; d < myDishes.length; d++) {
        element.innerHTML += getDishBanner(category, myDishes[d]);
    }
}

function loadSoppingCardData() {
    const data = getShoppingCardFromLocalStorage();
    if (data.data != null) {
        myShoppingCard = data.data;
        deliveryOption = data.deliveryOption;
        setDisplayShoppingCard(true);
        renderShoppingCard();
    }
}

function renderShoppingCard() {

    let card = document.getElementById(idFromElement);
    card.innerHTML = "";

    renderCategory(card, 'main');

    if (myShoppingCard['side'].length > 0 && myShoppingCard['main'].length > 0) {
        card.innerHTML += getShoppingCardSeperator();
    }

    renderCategory(card, 'side');

    card.innerHTML += getDeliveryOptionSwitch(deliveryOption == "bring" ? 'checked' : '');
    card.innerHTML += getSumaryTable(getShoppingCardSumary());
    card.innerHTML += getOrderButton();
    saveShoppingCardIntoLocalStorage(myShoppingCard, deliveryOption);
}

function getShoppingCardSumary(devOption) {
    let option = devOption == null ? deliveryOption : devOption;
    const subtotalMain = getSumCategory('main');
    const subtotalSide = getSumCategory('side');
    const subtotal = Number.parseFloat(subtotalMain.subTotalCategoryDishes.toFixed(2)) + Number.parseFloat(subtotalSide.subTotalCategoryDishes.toFixed(2));
    const deliveryPrice = Number.parseFloat(option == "bring" ? 7.50 : 0.00, 2);
    const total = subtotal + deliveryPrice;

    return actualCardResults = {
        'amountMainDishes': subtotalMain.amountCategoryDishes,
        'amountSideDishes': subtotalSide.amountCategoryDishes,
        'subTotalMain': Number.parseFloat(subtotalMain.subTotalCategoryDishes.toFixed(2)),
        'subTotalSide': Number.parseFloat(subtotalSide.subTotalCategoryDishes.toFixed(2)),
        'subtotal': subtotal,
        'delivery': deliveryPrice,
        'total': total
    }
}

function getSumCategory(category) {
    let sumAmount = 0;
    let sumPrice = 0;

    const myArr = myShoppingCard[category];

    for (let i = 0; i < myArr.length; i++) {
        sumAmount += myArr[i].amount;
        sumPrice += Number.parseFloat(myArr[i].price);
    }

    return {
        'amountCategoryDishes': sumAmount,
        'subTotalCategoryDishes': sumPrice
    };

}

function setDisplayShoppingCard(visible) {
    if (visible != isShoppingCardVisible) {
        document.getElementById('shopping-card').classList.toggle('d-none');
        isShoppingCardVisible = visible;
    }

    if (!isShoppingCardVisible) {
        deliveryOption = myShoppingCard['delivery'] == 0.00 ? "pickup" : "bring";
    }
}



function renderCategory(card, category) {
    for (let indexCategory = 0; indexCategory < myShoppingCard[category].length; indexCategory++) {
        let textClass = idFromElement == 'shopping-card' ? 'entry-section-text-sm' : 'entry-section-text-lg';
        card.innerHTML += getShoppingcardEntry(category, myShoppingCard[category][indexCategory], textClass);
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


function toggleRespShoppingButton() {
    let cardButton = document.getElementById('resp-shoppingCard-button');
    if (cardButton.classList.contains('shoppingcard-button-container')) {
        cardButton.classList.replace('shoppingcard-button-container', 'd-none')
        renderRespShoppingcardContainer();
    } else {
        cardButton.classList.replace('d-none', 'shoppingcard-button-container')
        removeRespShoppingcard();
    }
}

function renderRespShoppingcardContainer() {
    removeRespShoppingcardContainer();
    let site = document.getElementById('indexSite');
    site.innerHTML += getRespShoppingcard();
    idFromElement = 'resp-shopping-container';
    if (myShoppingCard['side'].length == 0 && myShoppingCard['main'].length == 0) {
        renderRespShoppingcardEmpty();
    } else {
        renderRespShoppingCard();
    }
}

function removeRespShoppingcardContainer() {
    let container = document.getElementById('resp-shopping-container');
    if (container !== null) {
        container.remove();
    }
    let shoppingCard = document.getElementById('shopping-card');
    if (shoppingCard !== null) {
        shoppingCard.innerHTML = "";
    }
}

function renderRespShoppingcardEmpty() {
    let container = document.getElementById('resp-shopping-card');
    if (container !== null) {
        container.innerHTML += getRespShoppingcardEmpty();
    }
}

function renderRespShoppingCard() {
    let container = document.getElementById('resp-shopping-card');
    if (container !== null) {
        container.innerHTML += getRespShoppingcardWithData();
        renderShoppingCard();
    }

}

function removeRespShoppingcard() {
    let respShoppingCard = document.getElementById('resp-shopping-card');
    respShoppingCard.remove();
    idFromElement = 'shopping-card';
    renderShoppingCard();
}

function showThankYou() {
    window.open("./thankyou/index.html", "_self");
}
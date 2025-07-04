let isShoppingCartVisible = false;
let deliveryOption = "pickup";
let idFromElement = 'shopping-cart';

function onInit() {
    let element = document.getElementById('indexSite');
    element.innerHTML += getHeader(true);
    element.innerHTML += getContent();
    element.innerHTML += getFooter();
    createProviderSection();
    loadSoppingCartData();
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

function loadSoppingCartData() {
    const data = getShoppingCartFromLocalStorage();
    if (data.data != null) {
        myShoppingCard = data.data;
        deliveryOption = data.deliveryOption;
        setDisplayShoppingCart(true);
        renderShoppingCart();
    }
}

function renderShoppingCart() {

    let cart = document.getElementById(idFromElement);
    cart.innerHTML = "";
    renderCategory(cart, 'main');

    if (myShoppingCart['side'].length > 0 && myShoppingCart['main'].length > 0) {
        cart.innerHTML += getShoppingCartSeperator();
    }

    renderCategory(cart, 'side');

    cart.innerHTML += getDeliveryOptionSwitch(deliveryOption == "bring" ? 'checked' : '');
    cart.innerHTML += getSumaryTable(getShoppingCartSumary());
    insertOrderButton(cart);
    saveShoppingCartIntoLocalStorage(myShoppingCart, deliveryOption);
}

function insertOrderButton(cart) {
    let btnClass = idFromElement == 'shopping-cart' ? 'non-resp-order-btn' : '';
    cart.innerHTML += getOrderButton(btnClass);
}


function getShoppingCartSumary(devOption) {
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

    const myArr = myShoppingCart[category];

    for (let i = 0; i < myArr.length; i++) {
        sumAmount += myArr[i].amount;
        sumPrice += Number.parseFloat(myArr[i].price);
    }

    return {
        'amountCategoryDishes': sumAmount,
        'subTotalCategoryDishes': sumPrice
    };

}

function setDisplayShoppingCart(visible) {
    if (visible != isShoppingCartVisible) {
        document.getElementById('shopping-cart').classList.toggle('d-none');
        isShoppingCartVisible = visible;
    }

    if (!isShoppingCartVisible) {
        deliveryOption = myShoppingCart['delivery'] == 0.00 ? "pickup" : "bring";
    }
}



function renderCategory(cart, category) {
    for (let indexCategory = 0; indexCategory < myShoppingCart[category].length; indexCategory++) {
        let textClass = idFromElement == 'shopping-cart' ? 'entry-section-text-sm' : 'entry-section-text-lg';
        cart.innerHTML += getShoppingcartEntry(category, myShoppingCart[category][indexCategory], textClass);
    }
}


function deliveryOnSelect() {
    let element = document.getElementById('delivery-selection');
    deliveryOption = element.checked ? "bring" : "pickup";
    renderShoppingCart();
}

function toggleRespMenu() {
    document.getElementById('resp_menu').classList.toggle("resp_menu_close");
}


function toggleRespShoppingButton() {
    let cartButton = document.getElementById('resp-shoppingCart-button');
    if (cartButton.classList.contains('shoppingcart-button-container')) {
        cartButton.classList.replace('shoppingcart-button-container', 'd-none')
        renderRespShoppingcartContainer();
    } else {
        cartButton.classList.replace('d-none', 'shoppingcart-button-container')
        removeRespShoppingcart();
    }
}

function renderRespShoppingcartContainer() {
    removeRespShoppingcartContainer();
    let site = document.getElementById('indexSite');
    site.innerHTML += getRespShoppingcart();
    idFromElement = 'resp-shopping-container';
    if (myShoppingCart['side'].length == 0 && myShoppingCart['main'].length == 0) {
        renderRespShoppingcartEmpty();
    } else {
        renderRespShoppingCart();
    }
}

function removeRespShoppingcartContainer() {
    let container = document.getElementById('resp-shopping-container');
    if (container !== null) {
        container.remove();
    }
    let shoppingCart = document.getElementById('shopping-cart');
    if (shoppingCart !== null) {
        shoppingCart.innerHTML = "";
    }
}

function renderRespShoppingcartEmpty() {
    let container = document.getElementById('resp-shopping-cart');
    if (container !== null) {
        container.innerHTML += getRespShoppingcartEmpty();
    }
}

function renderRespShoppingCart() {
    let container = document.getElementById('resp-shopping-cart');
    if (container !== null) {
        container.innerHTML += getRespShoppingcartWithData();
        renderShoppingCart();
    }

}

function removeRespShoppingcart() {
    let respShoppingCart = document.getElementById('resp-shopping-cart');
    respShoppingCart.remove();
    idFromElement = 'shopping-cart';
    renderShoppingCart();
}

function showThankYou() {
    window.open("./thankyou/index.html", "_self");
}


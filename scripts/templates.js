function getProviderSection() {
    return `
    <div class="provider-img-logo-container">
        <img class="provider-top-img" src="./assets/img/burger-platte.jpg" alt="">
        <img class="provider-logo" src="./assets/img/burger-logo.jpg" alt="">
    </div>
    <div class="provider-container">

        <div class="provider-name">
            <h2>Burgermanufaktur</h2>
            <p>Bewertung (4,7 von 5 Sternen)</p>
        </div>
        <nav>
            <img src="./assets/icons/ArrowToRight.svg" alt="">
            <a href="#mainDishes">Hauptgerichte</a>
            <a href="#sideDishes"> Beilagen</a>
        </nav>

    </div>
    <div id="resp-shoppingCart-button" class="shoppingcart-button-container">
        <button class="shoppingcart-button" type="button" onclick="toggleRespShoppingButton()">Warenkorb</button>
    </div>
    `;
}

function getProviderCategorySection(category, imgSource, imgAlt) {
    return `
        <img class="provider-dish-img" src="${imgSource}" alt="${imgAlt}">

        <div id="${category}Dishes" class="dish-banner-container">
                        
        </div>
    `;
}


function getCategoryHeadline(category) {
    return `
        <h3>${category}</h3>
    `;
}

function getDishBanner(category, dish) {
    return `
        <div class="dish-container">
            <div class="dish">
                <h4>${dish['name']}</h4>
                <p>${dish['description']}</p>
                <p>${dish['price'].toFixed(2)} €</p>
            </div>
            <div>
                <button class="addButton" type="button" onclick="addDishToCart('${category}', ${dish['id']})">+</button>
            </div>
        </div>
    `;
}

function getShoppingcartEntry(category, dish, textClass) {
    return `
    <div class="shopping-cart-entry">
        <p>${dish['name']}</p>
        <div>
            <div class="entry-section">
                <button type="button" title="remove" onclick="removeDishFromCart('${category}', ${dish.id})">
                    <img src="./assets/icons/remove_32dp_FF8000.svg" alt="">
                </button>
                <p class="${textClass}">${dish['amount']}x</p>
                <button type="button" title="add" onclick="addDishToCart('${category}', ${dish.id})">
                    <img src="./assets/icons/add_32dp_FF8000.svg" alt="">
                </button>
            </div>
            <div class="entry-section">
                <p class="${textClass}">${dish['price'].toFixed(2)}€</p>
                <button type="button" title="delete" onclick="deleteDishFromCart('${category}', ${dish.id})">
                    <img src="./assets/icons/delete_32dp_FF8000.svg" alt="">
                </button>
            </div>
        </div>
    </div>
    `;
}

function getShoppingCartSeperator() {
    return `
    <div class="shopping-cart-entry">
        <hr class="category-seperator">
    </div>
    `;
}


function getShoppingCartButton(){
    return `
    
    <div class="shoppingcart-button-container">
        <button type="button">Warenkorb</button>
    </div>

    `;
}

function getDeliveryOptionSwitch(isChecked) {
    return `<div class="delivery-switch">
                Lieferung:
                <label class="switch">
                    <input id="delivery-selection" onclick="deliveryOnSelect()" ${isChecked} type="checkbox" >
                    <span class="slider round"></span>
                </label>
            </div>`;
}

function getSumaryTable(sumary) {
    return `
    <div class="sumary-table">
        <div>
            <p>Zwischensumme:</p>
            <p>${sumary['subtotal'].toFixed(2)}€</p>
        </div>
        <div>
            <p>Lieferkosten:</td>
            <p>${sumary['delivery'].toFixed(2)}€</p>
        </div>
        <div>
            <p class="sum-table-sumRow">Gesamt:</p>
            <p class="sum-table-sumRow">${sumary['total'].toFixed(2)}€</p>
        </div>
    </div>
    `;
}

function getOrderButton(btnClass) {
    return `<button id="order-button" class="order-button ${btnClass}" type="button" onclick="showThankYou()">bestellen</button>`;
}

function getHeader(isStartPage) {
    return `
        <section class="header-section">
            <header>
                <a href="${isStartPage ? './index.html' : '../index.html'}" title="Home">
                    <img src="${isStartPage ?  './assets/logo/Bestell App- Logo.svg' : '../assets/logo/Bestell App- Logo.svg'}" alt="Logo der Bestellapp">
                </a>
                <button class="menue-button" type="button" title="menue-button" onclick="toggleRespMenu()">
                    <img src="${isStartPage ? './assets/icons/burger-menu-01.svg' : '../assets/icons/burger-menu-01.svg'}" alt="">
                </button>
            </header>
            <div class="resp_menu_box resp_menu_close" id="resp_menu">
                <a href="${isStartPage ? './index.html' : '../index.html'}" title="Home" class="nav-links">Home</a>
                <a href="${isStartPage ? './impressum' : '../impressum'}" title="Impressumseite" class="nav-links">Impressum</a>
                <a href="${isStartPage ? './datenschutz' : '../datenschutz'}" title="Datenschutzseite" class="nav-links">Datenschutz</a>
            </div>
        </section>
    `;
}

function getContent() {
    return `
        <section class="content-section">
            <div id="provider-select" class="provider-section-top">
            </div>
            <div id="shopping-cart-container" class="shopping-cart-div">
                <p>Warenkorb</p>
                <div>
                    <img src="./assets/icons/shopping_bag_64dp.svg" alt="">
                    <p>Bitte treffe deine Auswahl aus der Karte.</p>
                </div>

                <div id="shopping-cart" class="shopping-cart d-none">
                </div>
            </div>
        </section>
    `;
}

function getFooter(isStartPage) {
    return `
        <section class="footer-section">
            <footer>
                <p>Enrico Hoffmann</p>
                <p>
                    <a href="${isStartPage ? './impressum/' : '../impressum/'}">Impressum</a> | <a href="${isStartPage ? './datenschutz/' : '../datenschutz/'}">Datenschutz</a>
                </p>
            </footer>
        </section>
    `;
}

function getRespShoppingcart() {
    return `
        <div id="resp-shopping-cart" class="resp-shopping-cart">
            <button class="" type="button" onclick="toggleRespShoppingButton()">Warenkorb</button>
        </div>
    `;
}

function getRespShoppingcartWithData() {
    return `
    <div id="resp-shopping-container" class="resp-shopping-container">
    </div>
    `;
}

function getRespShoppingcartEmpty() {
    return `
    <div id="resp-empty-cart" class="resp-empty-cart">
        <img src="./assets/icons/shopping_bag_64dp.svg" alt="">
        <p>Bitte treffe deine Auswahl aus der Karte.</p>
    </div>
    `;
}

function getThankYouContent(providerName) {
    return `
        <div id="thank-you-container">
            <h1>Vielen Dank für Ihre Bestellung!</h1>
            <div id="thank-you-information">
                <p>Sie haben haben folgendes bei <strong>${providerName}</strong> bestellt:</p>
            </div>
        </div>
    `;
}

function getThankYouCategory(categoryName, amount, price) {
    return `
        <p>${categoryName}: ${amount}x zu ${price.toFixed(2)}€</p> 
    `;
}

function getThankYouSummary(sumPrice) {
    return `
    <p>Der Gesamtpreis beträgt <strong>${sumPrice.toFixed(2)}€.</strong></p>
    `;
}

function getThankYouDeliveryOption(text) {
    return `
        <br>
        <p>${text}</p>
    `;
}


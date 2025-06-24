function getProviderSection() {
    return `
    <img class="provider-top-img" src="./assets/img/burger-platte.jpg" alt="">
    <img class="provider-logo" src="./assets/img/burger-logo.jpg" alt="">

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
                <button class="addButton" type="button" onclick="addDishToCard('${category}', ${dish['id']})">+</button>
            </div>
        </div>
    `;
}

function getShoppingcardEntry(category, dish) {
    return `
    <div class="shopping-card-entry">
        <p>${dish['name']}</p>
        <div>
            <button type="button" title="remove" onclick="removeDishFromCard('${category}', ${dish.id})">
                <img src="./assets/icons/remove_32dp_FF8000.svg" alt="">
            </button>
            <p>${dish['amount']}x</p>
            <button type="button" title="add" onclick="addDishToCard('${category}', ${dish.id})">
                <img src="./assets/icons/add_32dp_FF8000.svg" alt="">
            </button>
            <p>${dish['price'].toFixed(2)}€</p>
            <button type="button" title="delete" onclick="deleteDishFromCard('${category}', ${dish.id})">
                <img src="./assets/icons/delete_32dp_FF8000.svg" alt="">
            </button>
        </div>
    </div>
    `;
}

function getShoppingCardSeperator() {
    return `
    <div class="shopping-card-entry">
        <hr class="categpry-seperator">
    </div>
    `;
}

function getOrderButton() {
    return `
    <button type="button" class="order-button">Bestellen</button>
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

function getHeader(isStartPage) {
    return `
        <section class="header-section">
            <header>
                <img src="${isStartPage ?  './assets/logo/Bestell App- Logo.svg' : '../assets/logo/Bestell App- Logo.svg'}" alt="Logo der Bestellapp">
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
            <div class="shopping-card-div">
                <p>Warenkorb</p>
                <div>
                    <img src="./assets/icons/shopping_bag_64dp.svg" alt="">
                    <p>Bitte treffe deine Auswahl aus der Karte.</p>
                </div>

                <div id="shopping-card" class="shopping-card d-none">
                </div>
            </div>
        </section>
    `;
}

function getFooter() {
    return `
        <section class="footer-section">
            <footer>
                <p>Enrico Hoffmann</p>
                <p>
                    <a href="./impressum/">Impressum</a> | <a href="./datenschutz/">Datenschutz</a>
                </p>
            </footer>
        </section>
    `;
}
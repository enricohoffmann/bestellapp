function getProviderMainSection() {
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
            <a href="#">Hauptgerichte</a>
            <a href="#"> Beilagen</a>
        </nav>
        <img class="provider-dish-img" src="./assets/img/french-fries.jpg" alt="">

        <div id="mainDishes" class="dish-banner-container">
                        
        </div>

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
    <table class="sumary-table">
        <tr>
            <td class="sum-table-col-1">Zwischensumme:</td>
            <td class="sum-table-col-2">${sumary['subtotal'].toFixed(2)}€</td>
        </tr>
        <tr>
            <td class="sum-table-col-1">Lieferkosten:</td>
            <td class="sum-table-col-2">${sumary['delivery']}€</td>
        </tr>
        <tr>
            <td class="sum-table-col-1 sum-table-sumRow">Gesamt:</td>
            <td class="sum-table-col-2 sum-table-sumRow">${sumary['total'].toFixed(2)}€</td>
        </tr>
    </table>
    `;
}
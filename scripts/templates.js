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
                <p>${dish['price']} €</p>
            </div>
            <div>
                <button class="addButton" type="button" onclick="addDishToCard('${category}', ${dish['id']})">+</button>
            </div>
        </div>
    `;
}
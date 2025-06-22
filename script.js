let isShoppingCardVisible = false;
let deliveryOption = "pickup";

function onInit() {
    //Header und Footer laden
    //einen Anbieter laden
    createProviderSection();
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
}

function renderShoppingCard() {
    let card = document.getElementById('shopping-card');
    card.innerHTML = "";

    for(let indexMain = 0; indexMain < myShoppingCard['main'].length; indexMain++){
        card.innerHTML += getShoppingcardEntry('main', myShoppingCard['main'][indexMain]);
    }

    card.innerHTML += getDeliveryOptionSwitch(deliveryOption == "bring" ? 'checked' : '');

    let sum = getShoppingCardSumary();
    console.log(sum);
    

    card.innerHTML += getSumaryTable(sum);
}

function deliveryOnSelect() {
    let element = document.getElementById('delivery-selection');
    deliveryOption = element.checked ? "bring" : "pickup";
    renderShoppingCard();
}
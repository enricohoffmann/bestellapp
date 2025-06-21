function addDishToCard(category, id){
    checkContainsDish(category, getDish(category, id));

    getShoppingCard('bring');
}

function checkContainsDish(category, dish) {
    let cardResult = myShoppingCard[category].filter((d)=>d.id==dish.id);
    if(cardResult.length == 0){
        insertDishToShoppingCard(category, dish);
    }else{
        cardResult[0].amount++;
        cardResult[0].price = cardResult[0].amount * dish.price;
    }
}

function getDish(category, id){
    if(category == "main"){
        return myMainDishes.find((dish) => dish.id == id);
    }else if(category == "side"){
        return mySideDishes.find((dish) => dish.id == id);
    }
}


function insertDishToShoppingCard(category, dish) {
    myShoppingCard[category].push({
        'id':dish.id,
        'amount':1,
        'name':dish.name,
        'price':dish.price
    });
}

function getShoppingCard(delivery) {
    const subtotalMain = getSumCategory('main');
    const subtotalSide = getSumCategory('side');
    const subtotal = subtotalMain.subTotalCategoryDishes + subtotalSide.subTotalCategoryDishes;
    const deliveryPrice = delivery == "bring" ? 7.50 : 0.00;
    const total = subtotal + deliveryPrice;

    return actualCardResults = {
        'amountMainDisches': subtotalMain.amountCategoryDishes,
        'amountSideDishes': subtotalSide.amountCategoryDishes,
        'subtotal':subtotal,
        'delivery':deliveryPrice,
        'total': total
    }
}

function getSumCategory(category) {
    let sumAmount = 0;
    let sumPrice = 0;

    const myArr = myShoppingCard[category];

    for(let i = 0; i < myArr.length; i++){
        sumAmount += myArr[i].amount;
        sumPrice += myArr[i].price;
    }

    return{
        'amountCategoryDishes':sumAmount,
        'subTotalCategoryDishes':sumPrice
    };

}


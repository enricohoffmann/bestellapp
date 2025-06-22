
function addDishToCard(category, id){
    checkContainsDish(category, getDish(category, id));
    setDisplayShoppingCard(true);
    renderShoppingCard();
}

function removeDishFromCard(category, id) {
    let cardResult = myShoppingCard[category].filter((d)=>d.id==id);
    let newAmount = cardResult[0].amount -=1;
    if(newAmount == 0){
        deleteDishFromCard(category, id);
    }else{
        cardResult[0].amount = newAmount;
        cardResult[0].price = newAmount * getDish(category, id).price;
        renderShoppingCard();
    }

}

function deleteDishFromCard(category, id) {
    let dishIndex = myShoppingCard[category].map(d => d.id).indexOf(id);
    myShoppingCard[category].splice(dishIndex, 1);
    renderShoppingCard();
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




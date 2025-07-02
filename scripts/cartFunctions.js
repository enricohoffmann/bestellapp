
function addDishToCart(category, id){
    checkContainsDish(category, getDish(category, id));
    setDisplayShoppingCart(true);
    renderShoppingCart();
}

function removeDishFromCart(category, id) {
    let cardResult = myShoppingCart[category].filter((d)=>d.id==id);
    let newAmount = cardResult[0].amount -=1;
    if(newAmount == 0){
        deleteDishFromCart(category, id);
    }else{
        cardResult[0].amount = newAmount;
        cardResult[0].price = newAmount * getDish(category, id).price;
        renderShoppingCart();
    }

}

function deleteDishFromCart(category, id) {
    let dishIndex = myShoppingCart[category].map(d => d.id).indexOf(id);
    myShoppingCart[category].splice(dishIndex, 1);

    if(myShoppingCart['main'].length == 0 && myShoppingCart['side'].length == 0){
        setDisplayShoppingCart(false);
    }

    renderShoppingCart();
}

function checkContainsDish(category, dish) {
    let cartResult = myShoppingCart[category].filter((d)=>d.id==dish.id);
    if(cartResult.length == 0){
        insertDishToShoppingCart(category, dish);
    }else{
        cartResult[0].amount++;
        cartResult[0].price = cartResult[0].amount * dish.price;
    }
}

function getDish(category, id){
    if(category == "main"){
        return myMainDishes.find((dish) => dish.id == id);
    }else if(category == "side"){
        return mySideDishes.find((dish) => dish.id == id);
    }
}


function insertDishToShoppingCart(category, dish) {
    myShoppingCart[category].push({
        'id':dish.id,
        'amount':1,
        'name':dish.name,
        'price':dish.price
    });
}




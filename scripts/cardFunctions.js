function addDishToCard(category, dish){
    if(myShoppingCard[category].length == 0){
        myShoppingCard[category].push({
            'id':dish.id,
            'amount':1,
            'name':dish.name,
            'price':dish.price
        });
    }else{

    }
}

function checkContainsDish(category, dish) {
    let cardResult = myShoppingCard[category].filter((d)=>d.id==dish.id);
}
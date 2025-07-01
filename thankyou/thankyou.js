function onInitThankYou() {
    let container = document.getElementById('thankyou-content');
    container.innerHTML += getHeader(false);
    container.innerHTML += getThankYouContent("Bürgermanufaktur")
    container.innerHTML += getFooter();
    renderOrderInThankYou();
}


function renderOrderInThankYou() {
    let summary = getShoppingCardSumary();
    let information = document.getElementById('thank-you-information');
    renderCategoryOptions(information, summary);
    information.innerHTML += getThankYouSummary(summary['total']);
    renderDeliveryOptions(information, summary);
    /* myShoppingCard = {
        'main':[],
        'side':[]
    }; */
}

function renderCategoryOptions(container, summary) {
    if(summary['amountMainDisches'] > 0){
        container.innerHTML += getThankYouCategory("Hauptgerichte", summary['amountMainDisches'], summary['subTotalMain']);
    }

    if(summary['amountSideDishes'] > 0){
        container.innerHTML += getThankYouCategory("Beilagen", summary['amountSideDisches'], summary['subTotalSide']);
    }
}

function renderDeliveryOptions(container, summary) {
    if(summary['delivery'] == 0.00){
        container.innerHTML += getThankYouDeliveryOption("Das Menu wird vorbereitet und kann in ca. 30 Minuten abgeholt werden.");

    }else{
        container.innerHTML += getThankYouDeliveryOption("Das Menu wird vorbereitet. Die Lieferzeit beträgt ca. 45 Minuten.");
    }
}



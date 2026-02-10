function checkOrder(available, ordered) {
    if (ordered > available) {
        console.log("Your order is too large, we don’t have enough goods.");
        return;
    }
    if (ordered == 0){
        console.log("Your order is empty.");
        return;
    }
    console.log("Your order is accepted.")

}

checkOrder(5, 4);
checkOrder(6, 0);
checkOrder(5, 10);
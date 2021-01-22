// https://github.com/abdullaalmaruf763797/Assignment_3

/* Kilometer to Meter */
function kilometerToMeter(kilo) {
    if( 0 < kilo) {
        var result = kilo * 1000;
    }
    else if (0 > kilo) {
        var result = "An error";
    }
    return result;
}
kilometerToMeter(2);

/* Budget Calculator */
function budgetCalculator(ghori, phone, laptop) {
    if(0 < ghori, phone, laptop){
        var total = ghori * 50 + phone * 100 + laptop * 500;
    }
    return total;
}
budgetCalculator(5, 6, 2);

/* Hotel Cost */
function hotelCost(n){
    if(0 < n) {
        if(n <= 10 ){
            var cost= 100 * n;
        }
        else if( 10 < n <= 20){
            var cost = 1000+(80 * (n-10));
        }
        else if(20 < n){
            var cost = 1800+(50 * (n-20));
        }
    }
    else if(0 > n){
        var cost = "An error"
    }
    return cost;
}
hotelCost(-12);

/* Mega Friend */
function megaFriend(array) {
    var lgth = 0;
    var largerWord = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > lgth) {
            var lgth = array[i].length;
            largerWord = array[i];
        }
    }
    return largerWord;
}
megaFriend(['Mustafizur', 'Rana', 'Fokhrul', 'Tanmmoy']);
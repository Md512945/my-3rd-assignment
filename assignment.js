
// https://github.com/Md512945/my-3rd-assignment

// ----(1)---- kilometerToMeter Function start---------
    function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        return meter;
    }
// -------- kilometerToMeter Function end--------


// ----(2)---- budgetCalculator Function start--------
    function budgetCalculator(watch, mobile, laptop){
        var budgetCount = (watch*50) + (mobile*100) + (laptop*500);
        return budgetCount;
    }
// -------- budgetCalculator Function end--------


// ----(3)---- hotelCost Function start--------
    function hotelCost(coust){
        var days = 0;
        if(coust <= 10){
            days = coust * 100;
        }
        else if(coust <= 20){
            var first10Days = 10 * 100;
            var remaining = coust - 10;
            var second10Days = remaining * 80;
            days = first10Days + second10Days;
        }
        else{
            var first10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remaining = coust - 20;
            var thirdInfiniteDays = remaining * 50;
            days = first10Days + second10Days + thirdInfiniteDays;
        }
        return days;
    }
// -------- hotelCost Function end---------


// ----(4)---- megaFriend Function start--------
    function megaFriend(friendNames){
        var longestWord = friendNames[0];

        for(var i = 0; i < friendNames.length; i++){
            var element = friendNames[i];
            if(element.length > longestWord.length){
                longestWord=element;
            }
        }
        return longestWord;
    }
// -------- megaFriend Function end--------
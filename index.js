// Code your solution in this file!
const arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arrayOfDrivers) {
   
    const firstDrivers = arrayOfDrivers.slice(0,2);
    return firstDrivers;
}


const returnLastTwoDrivers = function(arrayOfDrivers) {
   
    const lastDrivers = arrayOfDrivers.slice(2,4);
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(multiplier) {
        return multiplier * fare;
    };
}

function fareDoubler(fare) {
    return createFareMultiplier(fare)(2);
}
function fareTripler(fare) {
    return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(arrayOfDrivers, functionName) {
    let theDrivers;
    if (functionName === returnFirstTwoDrivers) {
        theDrivers = returnFirstTwoDrivers(arrayOfDrivers);
    } else if (functionName === returnLastTwoDrivers) {
        theDrivers = returnLastTwoDrivers(arrayOfDrivers);
    }
    return theDrivers;
        
    }
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(number){
   return function(fare){
        return fare * number;
    }
}
const fareDoubler = function(fares) {
return createFareMultiplier(2)(fares);
}
const fareTripler = function(fares) {
    return createFareMultiplier(3)(fares);
    }
    const selectDifferentDrivers = function(drivers, typeOfFunction){
if (typeOfFunction === returnFirstTwoDrivers) {
    return drivers.slice(0,2);} 
else {
    return drivers.slice(2);
}
}
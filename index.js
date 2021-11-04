const returnFirstTwoDrivers= (array)=>{
    const a= [...array.slice(0,2)];
    return a;
}

const returnLastTwoDrivers= (array)=>{
    const b= [...array.slice(array.length-2, array.length)];
    return b;
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(cb){
    return(x) =>{
        return (x*x);
    };
}

const fareDoubler=x=>{
    return x*2};

const fareTripler=x=>{
    return x*3};

function selectDifferentDrivers(array, result){
     //array;
    return result(array);
}
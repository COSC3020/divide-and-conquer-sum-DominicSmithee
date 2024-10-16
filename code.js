function divideAndConquerSum(a) {
    return recursiveSum(a);
}

function recursiveSum(a){
    if (a.length == 0){
        return 0;
    }else if(a.length == 1){
        return a[0];
    }else if(a.length == 2){
        return a[0]+a[1];
    }else{
        var endpoint = Math.floor(a.length/3);
        var arrayTwoThirds = Math.floor((a.length/3)*2);
        const subArray1 = recursiveSum(a.slice(0, endpoint));
        //console.log(subArray1);
        const subArray2 = recursiveSum(a.slice(endpoint, arrayTwoThirds));
        //console.log(subArray2);
        const subArray3 = recursiveSum(a.slice(arrayTwoThirds));
        //console.log(subArray3);
        return subArray1 + subArray2 + subArray3;
    }
}

//function sumArray(a) {
//    if (a.length === 0) {
 //       return 0;
//    }
//    return a[0] + sumArray(a.slice(1));
//}

//testyArray = [1,2,3,4];
//testyArray2 = [-2,-1,0,1,2,3];
//testyArray3 = [1,2,3,4,5];
//console.log(divideAndConquerSum(testyArray));
//console.log(divideAndConquerSum(testyArray2));
//console.log(divideAndConquerSum(testyArray3));

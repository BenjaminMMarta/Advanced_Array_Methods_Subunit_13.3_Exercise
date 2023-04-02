//--------------------Reduce--------------------//

//extractValue//
function extractValue(array, key){
    return array.reduce(function(accumulator,value){
        accumulator.push(value[key]);
        return accumulator;
    },[]);
}

//vowelCount//
function vowelCount(string){
    const vowels = "aeiou";
    return string.split("").reduce(function(accumulator,value){
        let lowerCaseValue = value.toLowerCase()
        if(vowels.indexOf(lowerCaseValue) !== -1){
            if(accumulator[lowerCaseValue]){
                accumulator[lowerCaseValue]++;
            } else {
                accumulator[lowerCaseValue] = 1;
            }
        }
        return accumulator;
    }, {});
}

//addKeyAndValue//
function addKeyAndValue(array, key, value){
    return array.reduce(function(accumulator,nextValue,index){
        accumulator[index][key] = value;
        return accumulator;
    },array);
}

//partition//
function partition(array, callback){
    return array.reduce(function(accumulator,value){
        if(callback(value)){
            accumulator[0].push(value);
        } else {
            accumulator[1].push(value);
        }
        return accumulator;
    }, [[],[]]);
}

//--------------------End--------------------//
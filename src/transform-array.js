module.exports = function transform( arr ) {
    let newArray = [];
    if(!Array.isArray(arr)) throw new Error('Error');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '--discard-next') {
            i++;
        }
        else if(arr[i] === '--discard-prev') {
            if(newArray.length > 0) {
                newArray.pop();
            }
        }
        else if(arr[i] === '--double-next') {
            if( (i+1) < arr.length) {
                newArray.push(arr[i+1]);
            }
        }
        else if(arr[i] === '--double-prev') {
            if( i > 1){
                newArray.push(arr[i - 1]);
            }
        } else {
            newArray.push(arr[i]);
        }
        
    }
    return newArray;
};

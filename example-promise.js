function addPromise(a,b){
    return new Promise(function(resolve,reject){
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
        reject('One or more value is not number');}
    });
}

addPromise(5,4).then(function(temp){
    console.log('promise success',temp);
}, function(err){
    console.log('promise error',err);
});
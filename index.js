
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(){
  let callback = function(){
       return function name(){
         return `anonymous`;
     }
 }
 return receivesAFunction(callback);
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log(`anonymous`)
    }
}
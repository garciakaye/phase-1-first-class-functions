function receivesAFunction(callBack){
    callBack();
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}

function returnsANamedFunction(){
    return function namedFunction(){
        
    }
}
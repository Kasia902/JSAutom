function compare (a,b){
    if (a ==50){
        return true;
    }
    else if (a+b === 50){
        return true;
    }
    else if(b ==50){
        return true;
    }
    else {
     return false;
    }
};

module.exports = compare;
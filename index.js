// Your code here
function saturdayFun(act='roller-skate'){
    return `This Saturday, I want to ${act}!`
}

let mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(term = "special"){
        return `You are ${flair}${term}${flair}!`
    }
}

let Calculator = {
    add: function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }
    
}

function actionApplyer(num, array){
    let val = num
    for(let i=0; i < array.length; i++){
        val = array[i](val);
    }
    return val
}
// Your code here
function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}


function mondayWork(string = 'go to the office'){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string = "*"){
    return function result(words = "special"){
        return `You are ${string}${words}${string}!`
    }   
}


let Calculator ={
    add: (num1, num2) => {return num1+num2},
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide:(num1, num2) => num1 / num2

}


function actionApplyer(number, array){
    if(array.length === 0){
        return 0 
    }else{
        let a = number
        array.forEach(action => a = action(a) )
        return a
    }
}
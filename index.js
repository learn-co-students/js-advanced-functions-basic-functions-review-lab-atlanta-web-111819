// Your code here
let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
  } 

  let saturdayFun = function(activity = "roller-skate") {
      return `This Saturday, I want to ${activity}!`
  }

function wrapAdjective(symbol = "*") {
    return function(word = "special") {
      return `You are ${symbol}${word}${symbol}!`
    }
}

let Calculator = {
    add : function(x, y){return x + y},
    subtract : function(x, y){return x - y},
    multiply : function(x, y){return x * y},
    divide : function(x, y){return x / y}
}

function actionApplyer(int, array) {
    if (array.length > 0) {
  return (int * 2 + 1000) % 7
    } else {
        return int
    }
}

// first task
String.prototype.repeatify = function (times) {
  let str = this.toString();
  for (let i = 0; i < times - 1; i++) {
    str += this.toString();
  }
  return str;
};

// second task
function multiply(num1, num2) {
  if (!arguments[1]) {
    return function (num3) {
      return num1 * num3;
    }
  }
  return num1 * num2;
}

// third task
function after(count, cBack) {
  return function () {
    if (count == 1) {
      cBack();
    }
    else {
      --count;
    }
  };
}

let called = function () {
  console.log('hello')
};

let afterCalled = after(5, called);

afterCalled();
afterCalled();
afterCalled();
afterCalled();
afterCalled();

// fourth task (incomplete)
let assets = 0;
let profit = 0;
let stocks = [5, 4, 7, 15 ,3, 6, 2];

let average = stocks.reduce(function (a, b) { return a + b }) / stocks.length;

let subAvg = stocks.filter(x => x < average);
console.log(subAvg);

function buyStockAt(arrIndex) {
  assets = stocks[arrIndex];
  stocks = stocks.slice(arrIndex + 1);
  console.log(assets, profit);
}

function sellStockAt(arrIndex) {
  profit += (stocks[arrIndex] - assets);
  stocks = stocks.slice(arrIndex + 1);
  console.log(assets, profit);
}

buyStockAt(stocks.indexOf(subAvg[0]));
sellStockAt(stocks.indexOf(track(stocks)));
buyStockAt(stocks.indexOf(Math.min(...stocks)));
sellStockAt(stocks.indexOf(Math.max(...stocks)));

console.log(profit);

function track(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>arr[i+1]) {
      return arr[i];
    }
  }
}
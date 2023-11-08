const foodFile = require('./food.json')
//1.list all the food items
function foodItems(){
    console.log(foodFile)
}
foodItems()

//2.category vegetables
function vegCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Vegetable'))
}
vegCategory()

//3. category fruit
function fruitCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Fruit'))
}
fruitCategory()

//4.category protien
 function protienCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Protien'))
}
protienCategory()

 //5.category nuts
 function nutsCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Nuts'))
}
nutsCategory()

 //6.category grains
 function grainsCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Grains'))
}
grainsCategory()

//7.category dairy
  function dairyCategory(){
    console.log(foodFile.filter((food) => food.category=== 'Dairy'))
}
dairyCategory()

//8.calorie above 100
function above100Calorie(){
    console.log(foodFile.filter((food) => food.calorie>100))
}
above100Calorie()

//9.calorie below 100
function below100Calorie(){
    console.log(foodFile.filter((food) => food.calorie<100))
}
below100Calorie()

//10. highest protien content to lowest
 function protienContent(){
    console.log(foodFile.sort((a,b) => b.protiens- a.protiens))
 }
 protienContent()

//11. lowest cab content to highest
function carbContent(){
    console.log(foodFile.sort((a,b) => a.cab-b.cab))
 }
 carbContent()


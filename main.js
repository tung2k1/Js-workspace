// // Tạo ra một mảng fruits [4] lưu trong localStorage
// // + Thêm 1 quả 
// // + Xóa 1 quả bất kỳ
// // + Thay thế 1 quả bất kỳ
// // + Tìm quả ở vị trí đầu và cuổi
// // + Tìm quả ở vị trí giữa
// // + Tìm các loại quả chứa chữ "a"
// // + Kiểm tra xem trong mảng có Apple k0
// // + Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
// // + Sắp xếp theo A-Z và Z-A (hof: soft)
// var userInput = prompt(":  Nhập yêu cầu \n 1: Thêm 1 quả  \n 2: Xóa 1 quả bất kỳ ");

// const fruits = ["Banana", "Apple", "Orange", "Mango"];

// function save(fruits) {
//   return localStorage.setItem("fruits", JSON.stringify(fruits));
// }

// function get(fruits) {
//   return localStorage.getItem("fruits");
// }

// save(fruits)


// // + Thêm 1 quả 

// switch (userInput) {
//   case "1":
//     fruits.push("fig");
//     save(fruits)
//     console.log(get(fruits))
//     alert("Mảng đã được thêm là : " + fruits)
//     break;
// }

// // if (userInput == '1') {
// //   fruits.push("fig");
// //   save(fruits)
// //   console.log(get(fruits))
// // }


// // // + Xóa 1 quả bất kỳ
// // get(fruits)
// // fruits.splice(3, 1);
// // save(fruits)


// // //+ Thay thế 1 quả bất kỳ
// // get(fruits)
// // fruits[1] = "pineapple"
// // save(fruits)

// // // + Tìm quả ở vị trí đầu và cuổi
// // get(fruits)
// // firtFruit = fruits[0];
// // lastFruit = fruits[fruits.length - 1];
// // console.log(firtFruit)
// // console.log(lastFruit)


// // // + Tìm quả ở vị trí giữa
// // get(fruits)
// // var middle = Math.floor(fruits.length / 2);
// // var middleFruit = fruits[middle];
// // console.log(middleFruit);

// // // + Kiểm tra xem trong mảng có Apple k0
// // get(fruits)
// // var isApple = fruits.includes("apple");
// // console.log(isApple);

// // // + Gộp thêm 2 loại quả bất kỳ ở mảng khác vào mảng fruits
// // get(fruits)
// // var otherFruits = ["watermelon", "lemon"]
// // var newFruits = fruits.concat(otherFruits)
// // console.log(newFruits)


// // // + Sắp xếp theo A-Z và Z-A (hof: soft)
// // get(fruits)
// // var AZ = fruits.sort();
// // // Sắp xếp mảng theo thứ tự Z-A

// // save(fruits)

// // console.log(AZ);

var foods = ['Pizza', 'Pho Bo', 'Ramen', 'Sushi', 'Banh My'];


// 1. Sắp xếp tăng dần và giảm dần theo số lượng ký tự

var increaseFoods = foods.sort(function(a, b) {
  return a.length - b.length;
});

console.log(increaseFoods)

// 2. Biến đổi mảng sang dạng "Pizza" => "Pizza - 5"
var otherFoods = foods.map(function(food) {
  return food + ' - ' + food.length;
});

console.log(otherFoods)

// 3. Nhập vào các món bạn thích và thêm vào mảng

var favorFoods = 'My cay, My tom';
var NewFoods = favorFoods.split(', ');
foods = foods.concat(NewFoods);
console.log(foods)

// 4. Tạo một mảng mới gồm các món chứa chữ "a"
var foodsA = foods.filter(function(food) {
  return food.includes('a');
});

console.log(foodsA)

// 5. Tìm những món có đúng 5 ký tự

var foods5 = foods.filter(function(food) {
  return food.length === 5;
});

console.log(foods5)

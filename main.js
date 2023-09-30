var languages = ['Javascript', 'PHP', 'Java', 'C#'];


// 1. Thay the "PHP" bang "Python"
languages[1] = 'python';
console.log(languages);

// 2. Tim tu ngan nhat va dai nhat trong mang
var longest = '';

for (var i = 0; i < languages.length; i++) {
  if (languages[i].length > longest.length) {
    longest = languages[i];
  }
}

console.log(longest);


// 3. Tim cac tu chua chuoi "Java"
languages.filter(function (language) {
  return language.includes('Java');
});

// 4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang
languages.unshift('Dart');
languages.push('Kotlin');

// 5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]
var  LanguagesOther= ["Flutter", "Laravel", "ExpressJS", ".Net"];
var NewLanguages = languages.concat(LanguagesOther);
console.log(NewLanguages)



///tai hien filter
var cars = [
    {
      id: 1,
      name: 'Honda',
      price: 0,
    },
    {
      id: 2,
      name: 'Toyota',
      price: 1000,
    },
    {
      id: 3,
      name: 'Huyndai',
      price: 1000,
    },
    {
      id: 4,
      name: 'Jeep',
      price: 0,
    },
    {
      id: 5,
      name: 'Subaru',
      price: 3000,
    },
    {
      id: 6,
      name: 'Ford',
      price: 3000,
    },
  ]

  Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this ){
      if(this.hasOwnProperty(index)){
        var rerult = callback(this[index], index, this);
        if(rerult){
          output.push(this[index]);
        }
      }
    }
    return output;
  }

var filterCar = cars.filter2(function(car,index,array){
  return car.price > 1000;

})

console.log(filterCar)
  
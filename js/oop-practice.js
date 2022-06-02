// STEP 1
// class Cat {
//     constructor() {}
// }
// const Dog = class {
//     constructor() {}
// };

// STEP 2
// class Cat {
//     constructor() {}
// }
// const Dog = class {
//     constructor() {}
// };
// cat1 = new Cat();
// dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log("The Animal has been created");
//     }
// }
// animal3 = new Animal();

// STEP 4
// class Animal {
//     constructor(arg) {
//         console.log(arg);
//     }
// }
// animal4 = new Animal("The Animal has been created");

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log(`The Animal, ${this.color}, ${this.height} tall, ${this.length} wide, ${this.breed} ${this.type}, has been created`);
//     }
// }
// animal5 = new Animal("dog", "Australian Shepherd", "Black", "15-inch", "50-inch");

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//         console.log(`The Animal, ${this.color}, ${this.height} tall, ${this.length} wide, ${this.breed} ${this.type}, has been created`);
//     }
//     get propertyList() {return [this.type, this.breed, this.color, this.height, this.length]};
// }
// animal6 = new Animal("dog", "Australian Shepherd", "Black", "15-inch", "50-inch");
// for (i in animal4.propertyList) {
//     console.log(animal4.propertyList[i]);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }

//     get propertyList() {return [this.type, this.breed, this.color, this.height, this.length]};

//     speak = function() {
//         if (this.type == "dog") {console.log(`The ${this.color} ${this.type} is barking!`)}
//         else if (this.type == "cat") {console.log(`The ${this.color} ${this.type} is meowing!`)}
//     }
// }
// animalDog = new Animal("dog", "Australian Shepherd", "Black", "15-inch", "50-inch");
// animalDog.speak();
// animalCat = new Animal("cat", "Siamese", "White", "15-inch", "50-inch");
// animalCat.speak();

// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
    
//     let checkType = function() { 
//         if (_type == "dog")
//             return "dog";
//         else 
//             return "cat";
//     }

//     this.speak = function() {
//         console.log(`The ${checkType()} has made a noise!`)
//     }
// }
// animalDog = new Animal("dog", "Australian Shepherd", "Black", "15-inch", "50-inch");
// animalDog.speak();

// STEP 9
// var findWords = function(searchWord) {
//     let count = 0;
//     let words = this.split(' ')
//     for (const word of words) {
//         // Replace removes the comma and periods
//         if (word.replace(/(\,$)|(\.$)/, "") == searchWord) {
//             count++;
//         }
//     }
//     return count;
// };

// String.prototype.findWords = findWords;

// var sentence = "Hello this is a sentence is, is is is is."
// console.log(sentence.findWords("is"));

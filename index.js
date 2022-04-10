/*let person = {
    name: 'Shakib',
    age: 27 
};

//Dot Notation
person.name = 'Hossan';

//Bracker notation
person['name'] = 'Mary';
console.log(person.name);
*/
/*let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

function greet(name, lastName) {
    console.log('Hello ' + name +' ' + lastName);
}
//calculating a value
function square(number){
    return number*number;
}

console.log(square(2));


//Factory Function
function createCircle(radius) {
return {
      radius,
      draw: function() {
        console.log('draw');
     }
};
}

const circle = createCircle(1);



//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

Circle.call({}, 1)
Circle.apply({},[ 1, 2, 3]);

const another = new Circle(1);


let obj = { value: 10};

function increase(obj) {
    obj.value++;
    console.log(obj);
}

increase(obj);
console.log(obj);
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.location = { x: 1};

const propertyName = 'location';
circle[propertyName] = {x: 1};


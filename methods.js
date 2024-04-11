/*
    Code Along: Speaking Dog

    * Create an object, and assign it to the variable dog
    * Give dog 3 properties, a name, a color, and speak
    * name, and color will be strings
    * speak will be our method
    * When called, speak will print "Bark!" to the console.
*/

let dog = {
    name: "Lucy",
    color: "brown",
    speak: function () {
        console.log("Bark!")
    }
}

// Calling the speak method within the dog object above
dog.speak();

// We can use methods just like our regular functions and give them a paramater/argument
let dog2 = {
    name: "Lucy",
    color: "brown",
    speak: function (owner) {
        console.log(`${owner}...Bark!`)
    }
}

dog2.speak("Frank");

/*
    'this' is a magic word that means "this object I'm in right now"
*/
let human = {
    height: `5'2"`,
    armSpan: function () { return this.height }, // 'this' refers to the human object we're currently in
    noseLength: `3"`,
    earLength: function () { return this.noseLength } // use the value of noseLength that exists within this object (3")
}

console.log(human.armSpan())   // `5'2"`

let rectangle = {
    height: 10,
    width: 8,
}

rectangle.area() //=> TypeError: rectangle.area is not a function at this point

rectangle.area = function() { // adding the area function to the rectangle object
    return this.height * this.width;
}

rectangle.area() //=> 80. reactangle.area is a function at this point


/*
    EXTRA!

    We can merge objects together using two methods:

    spread operator (...)
    Object.assign
*/

let states = {
    vt: 'Vermont',
    ca: 'California',
    ma: 'Massachusetts',
    ny: 'New York'
}

let moreStates = {
    md: 'Maryland',
    de: 'Delaware',
    nj: "New Jersey",
    hi: "Hawaii"
}

let allStates = {...states, ...moreStates};
let allStates2 = Object.assign({}, states, moreStates);

/*
    EXTRA!

    Object destructuring into variables.
    We can grab the key + value into variables directly from the object
*/

// Instead of doing this:
let vt = states.vt;
let ca = states.ca;
let ma = states.ma;
let ny = states.ny;

// we can do this
let { vt, ca, ma, ny } = states;
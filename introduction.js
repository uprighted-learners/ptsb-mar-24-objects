/*
    Objects are a data structure with properties
    listed as key: value pairs
*/

let abby = {
    species: 'dog',
    color: 'brown',
    spayed: true,
    breed: 'mutt',
    weight: 40,
    'favorite Activity': 'chasing squirrels' //You can have keys with spaces as long as you define it as a string ''. Uncommon to see this but totally doable.
}

let states = {
    vt: 'Vermont',
    ca: 'California',
    ma: 'Massachusetts',
    ny: 'New York'
}

/*
    You can access a value at an existing key using:
    dot notation (.) or square brack notation ([])
*/
console.log(states.vt); // Dot notation
console.log(states["vt"]); // Square bracket notation

/*
    Advantage of using bracket notation:
    You can access a key with spaces using bracket notation.
    This will cause an error if using dot notation
*/
console.log(states['favorite Activity']) // Will work

/*
    You can make a new key and give it a value to an existing object
*/
states.wy = "Wyoming"; // dot notation
states['fl'] = "Florida"; // bracket notation

// You can replace the value of an existing key
states.vt = "The Green Mountain State";
states['vt'] = "The Green Mountain State";

/*
    Bracket notation is great for using variables to access a specific key
*/
let material = "brick"; // variable called material with the value 'brick'
let items = {
    brick: "red"
}
console.log(items[material]) // This is the same as doing: items["brick"]

/*
    You will often see objects like this where we have
    nested objects. 
*/
let alice = {
    name: "Alice Abrams",
    homeAddress: {  //homeAddress is an object within the alice object.
        street: '12 Maple St.',
        location: {
            latitude: 44.4759,
            longitude: -73.2121
        }
    },
    pets: ["Mittens", "Fido"]
}
// To access the value '12 Maple St.', I need to go within alice and from there go within homeAddress
console.log(alice.homeAddress.street);
// You can use a mix of both dot notation and bracket notatino
console.log(alice.homeAddress["street"])

/*
    Like arrays, objects have built in methods that will allow us to do a few things.
*/
let states2 = { ca: 'California', ma: 'Massachusetts', ny: 'New York' };

// keys() will get us an array of all the keys within an object.
Object.keys(states2);
// values() will get us an array of all the values within an object
Object.values(states2);

// You can delete a property from an object by deleting the key using the 'delete' keyword
delete states2.ma
// Or instead, you can keep the key by just resetting the key value to null
states2.ca = null;
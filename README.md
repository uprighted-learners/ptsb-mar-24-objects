# Software Models the World

* Data Structures allow for programmers to make models of the world in code.
* People naturally think of the world as made up of things.
* Programming languages have ways to represent things.
* JavaScript's primary way of representing a thing is an "Object".
* JavaScript objects let you describe things in any way you can imagine.
  * As long as your description is valid JavaScript :)

> All models are wrong, but some are useful. -- [George Box](https://en.wikipedia.org/wiki/All_models_are_wrong)

---

# An Object Contains Properties

```javascript
let abby = {
  species: 'dog',
  color: 'brown',
  spayed: true,
  breed: 'mutt',
  weight: 40,
  favoriteActivity: 'chasing squirrels'
};
```

* This is called **object literal** syntax since it defines the object exactly as it's **written**.
* The word on the left is called the *key*; the string on the right is called a *value*; the two together are called an *entry* or a *property*.
* JavaScript object keys are always strings, but if the key can be represented as a variable, you can omit the quotations
* `let abby = {...}` is an assignment, setting the variable `abby` to point to the object we just defined

---

# Keys are Strings

All of the keys of an object are strings. Our `abby` object has 6 keys:

- species
- color
- spayed
- breed
- weight
- favoriteActivity

As long as the keys have no spaces in them we don't need to wrap them in quotation marks, though if we wanted to make the key `favoriteActivity` two words, we could do that by wrapping it in quotation marks when we're defining the object. i.e:

```js
let abby = {
  ...,
  "favorite activity": 'chasing squirrels'
}
```

---

# An Object is a Dictionary

An object is useful for putting many similar things together.

Let's make an object that maps a state's *abbreviation* to its *full name*

```javascript
let states = {
  vt: 'Vermont',
  ca: 'California',
  ma: 'Massachusetts',
  ny: 'New York'
};
```

> When talking about objects we often reference the values as the object's name at the property name. For example we could say "states at 'vt' is the string 'Vermont'" for this object

---

# Accessing Object Values Using Properties

You can get the properties of an object with either *dots* or *square brackets*:

| With Dots   | With Brackets  | The Value         |
|-------------|----------------|-------------------|
| `states.vt` | `states['vt']` | `'Vermont'`       |
| `states.ca` | `states['ca']` | `'California'`    |
| `states.ma` | `states['ma']` | `'Massachusetts'` |
| `states.ny` | `states['ny']` | `'New York'`      |

Both syntaxes are useful in different situations and result in the same value.

```javascript
states['vt']  // 'Vermont'
states.vt     // also 'Vermont'
```

---

# Dots vs. Brackets

Dots are much more common than square brackets, but less versatile, since some keys simply cannot be represented using dot notation, and trying to use them causes syntax errors.

The bracket `[]` syntax is less common but covers more uses, and is generally only used when you are trying to access the object using a *variable*.

```javascript
let capitals = {}

capitals["New York"] = 'Albany'
capitals.New York = 'Albany'
             ^^^^
SyntaxError: Unexpected identifier
```

---

# Setting Object Properties

* You can set the properties of an object with either *dots* or *brackets* followed by a `=` (single equal sign)
* Adding properties works even after the object has been created.

```javascript
states.wy = 'Wyoming';

states['fl'] = 'Florida';
```

* Setting a property with a key that already exists *removes* the original value first
```javascript
states.vt = 'The Green Mountain State'
```

---

# Dots, Brackets, and Variables

The primary use of square bracket syntax is to use variables instead of literals to get and set properties. 
Let's imagine for a minute that represents a list of building materials. The material we want 

```js
let items = {
    brick: 'red'
}

let material = 'brick'
```

---

# An Object is a Data Structure

Objects can be used as more than a dictionary.

They allow you to design **data structures** -- tools for organizing and storing many related values.

```javascript
let alice = {
  name: 'Alice Abrams',
  homeAddress: {
    street: '12 Maple St.',
    location: {
      latitude: 44.4759,
      longitude: -73.2121
    }
  },
  pets: ['Mittens', 'Fido']
}
```

What is the value of `alice.homeAddress.street`?

---

# Accessing the Inner Objects

Given the object from the previous slide, the value of `alice.homeAddress.street` is `'12 Maple St.'`

Can you write this without using *dot syntax*?

> Note: This format is also known as [JSON](/lessons/slides/json), though there are minor differences.
> JSON is JavaScript Object Notation.

---

# Object Methods: How to Access Just the Object's Keys

`Object.keys` is a special *method*. `Object.keys()`

  * takes any object as an argument
  * so that `Object.keys` can return an array of its keys.

Example:

```js
let states = { ca: 'California', ma: 'Massachusetts', ny: 'New York' };

Object.keys(states)  //=> [ 'CA', 'MA', 'NY' ]
```

---
# Object Methods: How to Access Just the Object's Values

Just `Object.keys` gives you an array of all keys, we can use `Object.values` to give us an array of all the values.

```js
let states = { ca: 'California', ma: 'Massachusetts', ny: 'New York' };

Object.values(states)  //=> [ 'California', 'Massachusetts', 'New York' ]
```

---

# Object Keys Are Strings

* In a JavaScript object, keys are strings that need to follow the [rules for variable names](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules).

* **Beware** of using these as keys, since they get converted to strings in unexpected ways:
  * `null`
  * `undefined`
  * `''` (empty string)
  * `false` or `true`
  * `0` (or any number)

---

# Removing Key-Value Pairs From Objects With `delete`

```js
states = {
  ca: 'California',
  ma: 'Massachusetts',
  ny: 'New York'
}

delete states.ma

// states is now { ca: 'California', ny: 'New York' }
```

---

# Need to Keep the Key? An Alternative Strategy to Deleting

The preferred way of removing an object's values in JavaScript is to nullify it. We can do this by setting the value to `null`.

```js
let states = { ca: "California", ny: "New York" }
states.ca = null 
// states is now { ca: null, ny: "New York" }

let stateAbbrevs = Object.keys(states) 
// stateAbbrevs is [ 'ca', 'ny' ]

```

> Why might this be a preferred method of deletion?

---

# Extra Reading About Objects

* Eloquent JavaScript: [Chapter 4](https://eloquentjavascript.net/04_data.html)

* FreeCodeCamp:
  * From [Build JavaScript Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects)
  * to [Accessing Nested Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects)

---

# Object Instance Methods

A **method** is a *function* attached to an *object* as a *property*. 

We can use objects to represent *things* from real life, 
and we can use their methods to represent *actions* those things can do. 

For example,

```js
dog.speak()
```

---

# You've Already Used Some Methods!

Most things in JavaScript are objects, and many of them have prebuilt methods which we have been utilizing throughout this course.

* `console.log("some message")` `console` is an object, `.log` is a method
* `string.toUpperCase()` strings have a prototype object, that gives them access all the string methods
* `Math.random()` `Math` is a JavaScript class that has a *static method* `.random()`

---

# Code Along: Speaking Dog

Let's set up a simple object, with a method that prints a little message.

* Create an object, and assign it to the variable `dog`
* Give `dog` 3 properties, a `name`, a `color`, and `speak`
  * `name`, and `color` will be strings
  * `speak` will be our method
* When called, `speak` will print `"Bark!"` to the console.

---

# Syntax for Passing Arguments to Methods

Because methods are functions, we use them in the same way.

`objectName.methodName(argument)`

---

# Using Properties

We know we can access values within objects using this syntax:

`objectName.keyName`  

But what if we are still inside the object we are defining? For example,

```js
let human = {
  height: `5'2"`,
  armSpan: /* use height value here */
  noseLength: `3"`,
  earLength: /* use noseLength here */
}
```

---

# `this` Example 

`this` is a magic word that means "this object I'm in *right now*"

```js
let human = {
  height: `5'2"`,
  armSpan: function () { return this.height },
  noseLength: `3"`,
  earLength: function () { return this.noseLength }
}

console.log(human.armSpan)   // `5'2"`
```

---

# `this` Example 2

```js
let rectangle = {
  height: 10,
  width: 8,
  area: function() {
    return this.height * this.width;
  }
}

console.log( rectangle.height )   // 10
console.log( rectangle.area() )   // 80
```

---

# `this` Practice

Let's go back and edit our dog object now to use this skill:

* Where we log `"Bark!"`, change the string to say the *dog's* `name` and `color`.
* Remember to use the `this` key word instead of the object's variable name.

What's the result? Share and compare.

---

# `this` and Binding

The keyword `this` is *bound* to the context in which it is *called*.

Using dot notation to access the method from the object means the context is *that object.*

```js
dog.speak()
//^^^--------------- dog is the context
```

> Note: Arrow functions work differently.

---

# `this` and Binding Cont.

Fat arrow functions `() => { }` bind `this` to the context in which they are *defined*. This can make it easier to know what exactly you're referencing with `this`.

Also remember: "When in doubt, `console.log` it out."

```js
let dog = {
// ^^^--------------- dog is the context
  speak: function () { console.log(`Bark!`) }
}

dog.speak()
```

Understanding the nuance of `this` and binding is not expected right now.

Just be sure `console.log` what `this` is inside your method to be sure of its value.

---

# Adding to the Object After Creating It

We can add methods and properties to objects even after we've already made them.

```js
let rectangle = {
  height: 10,
  width: 8,
}

rectangle.area() //=> TypeError: rectangle.area is not a function

rectangle.area = function() {
  return this.height * this.width;
}

rectangle.area() //=> 80
```

* What is `this` in the above example?
* Does `this.height` on the *inside* of the object mean the same as `rectangle.height` on the *outside*?
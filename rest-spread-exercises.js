const filterOutOdds = (arr) => arr.filter((num) => num % 2 === 0);

const findMin = (...val) => Math.min(...val);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...vals) => [...arr, ...vals.map(v => v * 2)];



/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    return [...items.splice(0, randomIdx), ...items.slice(randomIdx + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    ({[key]:undefined, ...obj} = obj);
    return obj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]: val});
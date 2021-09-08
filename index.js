// Write your solution here!
const cats = [
 "Milo",
 "Otis",
 "Garfield"   
]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const morecats = [...cats, `${name}`];
    return morecats;
}

function prependCat(name) {
    const evenmorecats = [`${name}`, ...cats];
    return evenmorecats;
}

function removeLastCat() {
    const newcats = [
        ...cats.slice(0, cats.length -1)
    ];
    return newcats;
}

function removeFirstCat() {
    const newcats = [
        ...cats.slice(1),
    ];
    return newcats;
}
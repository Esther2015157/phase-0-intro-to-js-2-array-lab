// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
     cats.shift()
}

const newcats = ["Broom"]
function appendCat() {
    let newcats = ([...cats,"Broom"]);
    return newcats;
}

const orangecats = ["Arnold"]
function prependCat() {
    let orangecats = (["Arnold", ...cats]);
    return orangecats;
}

function removeLastCat() {
    const morecats = cats.slice(0,cats.length -1);
    return morecats;
}

function removeFirstCat() {
    const manycats = cats.slice(1)
    return manycats;
}
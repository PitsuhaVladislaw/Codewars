//True/false - на слова с (не)повторяющими элементами

function isIsogram(str) {
    let set = new Set(str);

    if (set.size != str.length) {
        return false;
    }

    return true;
}

console.log(isIsogram('aba'))
console.log(isIsogram('Fair'))
console.log(isIsogram('Mair'))
//Удаление из строки определенные символы

function disemvowel(str) {
    let vowels = ['a', 'i', 'o', 'e', 'u'];

    let sortArr = str.split('').filter(
        function(elem) {
            let founding = vowels.indexOf(elem.toLowerCase()) === -1;

            return founding;
        }
    );

    console.log(sortArr);

    let consStr = sortArr.join('');

    return consStr;
}

console.log(disemvowel("team"));
console.log(disemvowel("I'm team leader"));
console.log(disemvowel("Dick Alex"));
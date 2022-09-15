function brightest(colors) {
    let arrLightColors = [];

    for (let color of colors) {
        let elemR = parseInt(color.slice(1, 3), 16);
        let elemG = parseInt(color.slice(3, 5), 16);
        let elemB = parseInt(color.slice(5, 7), 16);

        let value = Math.max(elemR, elemG, elemB);

        arrLightColors.push(value);
    }

    console.log(arrLightColors);

    let sortColor = arrLightColors.sort(
        function(a, b) {
            return b - a;
        }
    )

    return sortColor[0];
}

function brightests(colors) {
    let arrColor = []

    for (let color of colors) {

        let elemR = parseInt(color.slice(1, 3), 16); 
        let elemG = parseInt(color.slice(3, 5), 16);
        let elemB = parseInt(color.slice(5, 7), 16);

        let value = Math.max(elemR, elemG, elemB);

        arrColor.push(value);
    }

    console.log(arrColor);

    let sortColor = arrColor.sort(function(a, b) {
        return b - a;
    })

    return sortColor[0];
}

console.log(brightest(["#001000", "#000000"], "#001000"));
console.log(brightest(["#ABCDEF", "#123456"], "#ABCDEF"));
console.log(brightest(["#00FF00", "#FFFF00"], "#00FF00"));
console.log(brightest(["#FFFFFF", "#1234FF"], "#FFFFFF"));
console.log(brightest(["#FFFFFF", "#123456", "#000000"], "#FFFFFF"));
//Присмовить числу массива количество элементов его же значения
function explode(str) {
   let arr = str.split('');

   let result = arr.map(
        function(elem) {
            return elem.repeat(+elem);
        }
   ).join('');

   return result;
}

console.log(explode('321'));
console.log(explode('9852'));
console.log(explode('10256'));
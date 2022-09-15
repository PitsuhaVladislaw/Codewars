//Проверка действительности купона по его дате и коду
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let curDate = Date.parse(currentDate);
    let expDate = Date.parse(expirationDate);

    if (enteredCode === correctCode) {
        return true;
    }

    if (curDate > expDate) {
        return false;
    }

    return false;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))
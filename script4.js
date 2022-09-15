//Подсчет количества рукопожатий фермеров, с учетом того, что оно может быть только одно
function getParticipants(handshakes) {
    let farmers = 0;

    let equation = farmers * (farmers - 1) / 2;

    while (handshakes > equation) {
        farmers++;
    }

    return farmers;
}

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
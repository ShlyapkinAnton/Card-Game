/* eslint-disable */
// Определение кол-во карт на поле и рандомизация колоды
export function start(
    numLevel: number,
    arr: string[],
    arr2: (string | number)[][],
) {
    let numCards = 6;
    if (numLevel === 1) {
        numCards = 3;
    } else if (numLevel === 2) {
        numCards = 6;
    } else if (numLevel === 3) {
        numCards = 9;
    }
    console.log("Кол-во карт :", numCards);

    arr.sort(() => Math.random() - 0.5);
    arr = arr.slice(0, numCards); // урезать массив в 2 раза
    arr.forEach((el) => arr.push(el));
    arr.sort(() => Math.random() - 0.5); // массив рандом кард 6 12 18
    arr.forEach((element, index) => {
        arr2.push([index, element]);
    });
    console.log("массив пар", arr2); //[["id","name"],["id","name"]]
}

import "./styles.css";
//import { watch } from "./watch.js";
const appEl = document.getElementById("app");

let numLevel = 1;
let score = 0;
let step = 0;
//console.log("Счет :", score);
console.log("Level :", numLevel, ";", "Счет :", score, ";", "Ход :", step);

let arr = [
    "AceSpades",
    "KingSpades",
    "QueenSpades",
    "JackSpades",
    "10Spades",
    "9Spades",
    "8Spades",
    "7Spades",
    "6Spades",
    "AceHearts",
    "KingHearts",
    "QueenHearts",
    "JackHearts",
    "10Hearts",
    "9Hearts",
    "8Hearts",
    "7Hearts",
    "6Hearts",
    "AceDiamonds",
    "KingDiamonds",
    "QueenDiamonds",
    "JackDiamonds",
    "10Diamonds",
    "9Diamonds",
    "8Diamonds",
    "7Diamonds",
    "6Diamonds",
    "AceClubs",
    "KingClubs",
    "QueenClubs",
    "JackClubs",
    "10Clubs",
    "9Clubs",
    "8Clubs",
    "7Clubs",
    "6Clubs",
];

const timerRef = document.querySelectorAll(".timerDisplay");
function displayTimer() {
    let [milliseconds, seconds, minutes] = [0, 0, 0];
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
            }
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = ` ${m}:${s} `;
}
// let int = null;

// Рендер уровня сложности + выбор уровня сложности и запуск игры
function renderLevel() {
    let levelHtml = `<div class="top center">
    <div class="window">
        <h1 class="header">Выбери сложность</h1>
        <div class="cards">
            <button data-level="1" class="card">1</button>
            <button data-level="2" class="card">2</button>
            <button data-level="3" class="card">3</button>
        </div>
        <button class="button">Старт</button>
    </div>
</div>`;
    appEl.innerHTML = levelHtml;

    const levelButtons = document.querySelectorAll(".card");
    levelButtons.forEach((levelButton) => {
        levelButton.addEventListener("click", (event) => {
            numLevel = parseInt(event.target.dataset.level);
            if (numLevel === 1) {
                let numLevel = 1;
                console.log("Level :", numLevel);
            } else if (numLevel === 2) {
                let numLevel = 2;
                console.log("Level :", numLevel);
            } else if (numLevel === 3) {
                let numLevel = 3;
                console.log("Level :", numLevel);
            }
        });
    });

    // Определение кол-во карт на поле и рандомизация колоды
    function start(numLevel) {
        let numCards = 6;
        if (numLevel === 1) {
            numCards = 6;
        } else if (numLevel === 2) {
            numCards = 12;
        } else if (numLevel === 3) {
            numCards = 18;
        }
        console.log("Кол-во карт :", numCards);

        arr = arr
            .map((i) => [Math.random(), i])
            .sort()
            .map((i) => i[1]);
        arr = arr.slice(0, numCards / 2);
        let arrB = Array.from(arr);
        let arrC = [...arr, ...arrB];
        let arrD = arrC
            .map((i) => [Math.random(), i])
            .sort()
            .map((i) => i[1]);
        arr = Object.assign({}, arrD); // объект с индексом и элеменовм внутри
        arr = Object.entries(arr); // возвращает массив пар
        console.log("массив пар", arr);
    }

    const startButton = document.querySelector(".button");
    startButton.addEventListener("click", () => {
        start(numLevel);
        renderGame(false);
        ints();
        console.log("Играть на уровне сложности :", numLevel);
    });
}
renderLevel();
//
//Рендер игрового поля и повторный запуск игры
function renderGame(isAct, isWin) {
    let cardsHtml = arr
        .map((back) => {
            //рубаки карт
            return `<div id="${back[0]}" class="back"><img class="playingFieldCard" id="${back[0]}" data-name="${back[1]}" src="./cards/back.jpg" alt=""></div>`;
        })
        .join("");
    let cardsBackHtml = arr
        .map((back) => {
            return `<div id="${back[0]}" class="back"><img class="playingFieldCard" id="${back[0]}" data-name="${back[1]}" src="./cards/${back[1]}.jpg" alt=""></div>`;
        })
        .join("");
    const gameHtml = `
    <div class="playingField center">
        <div class="playingFieldHeader">
            <div class="timeBox">
                <h1 class="time timerDisplay">00.00</h1>
            </div>
            <div>
                <button class="button returnButton">Начать заново</button>
            </div>
        </div>
        <div class="playingFieldCards">
            ${isAct ? cardsHtml : cardsBackHtml}
        </div>
        </div>
        <div class="winLose">
            <img class="imgHeader" src="./cards/${
                isWin ? "win.png" : "lose.png"
            }" alt="winORlose">
            <h1 class="headerLow">${
                isWin ? "Вы выиграли!" : "Вы проиграли!"
            }</h1>
            <h3 class="heading">Затраченное время:</h3>
            <p class="timeHeader timerDisplay">00.00</p>
            <button style="margin-bottom: 48px" class="button returnButton">Играть снова</button>
        </div>
    </div>`;
    appEl.innerHTML = gameHtml;
    document.querySelector(".winLose").style.display = "flex";

    //Кнопка повторной игры и сброс значей
    const returnGame = () => {
        const returnButtons = document.querySelectorAll(".returnButton");
        returnButtons.forEach((returnButton) => {
            returnButton.addEventListener("click", () => {
                arr = [
                    "AceSpades",
                    "KingSpades",
                    "QueenSpades",
                    "JackSpades",
                    "10Spades",
                    "9Spades",
                    "8Spades",
                    "7Spades",
                    "6Spades",
                    "AceHearts",
                    "KingHearts",
                    "QueenHearts",
                    "JackHearts",
                    "10Hearts",
                    "9Hearts",
                    "8Hearts",
                    "7Hearts",
                    "6Hearts",
                    "AceDiamonds",
                    "KingDiamonds",
                    "QueenDiamonds",
                    "JackDiamonds",
                    "10Diamonds",
                    "9Diamonds",
                    "8Diamonds",
                    "7Diamonds",
                    "6Diamonds",
                    "AceClubs",
                    "KingClubs",
                    "QueenClubs",
                    "JackClubs",
                    "10Clubs",
                    "9Clubs",
                    "8Clubs",
                    "7Clubs",
                    "6Clubs",
                ];
                numLevel = 1;
                step = 0;
                score = 0;
                renderLevel();
                console.log(
                    "Играть заново. Level :",
                    numLevel,
                    ";",
                    "Счет :",
                    score,
                    ";",
                    "Ход :",
                    step,
                );
            });
        });
    };
    returnGame();

    // Рендер результата
    // function renderWin(isWin) {
    //     //let timerRef = document.querySelector(".timerDisplay");
    //     let winHtml = `<div class="winLose">
    // <img class="imgHeader" src="./cards/${
    //     isWin ? "win.png" : "lose.png"
    // }" alt="winORlose">
    // <h1 class="headerLow">${isWin ? "Вы выиграли!" : "Вы проиграли!"}</h1>
    // <h3 class="heading">Затраченное время:</h3>
    // <p class="timeHeader timerDisplay">00.00</p>
    // <button style="margin-bottom: 48px" class="button returnButton">Играть снова</button>
    // </div>`;
    //     gameHtml.innerHTML = winHtml;

    //     watch();
    //     returnGame();
    // }

    // секурдомер
    // function watch(int) {
    //     let [milliseconds, seconds, minutes] = [0, 0, 0];
    //     const timerRefs = document.querySelectorAll(".timerDisplay");
    //     timerRefs.forEach((timerRef) => {
    //         //let int = null;

    //         if (int === true) {
    //             int = setInterval(displayTimer, 10);
    //         } else {
    //             int = clearInterval(int);
    //         }

    //         // document.getElementById("startTimer").addEventListener("click", () => {
    //         //     if (int !== null) {
    //         //         clearInterval(int);
    //         //     }
    //         //int = setInterval(displayTimer, 10);
    //         // });

    //         // document.getElementById("pauseTimer").addEventListener("click", () => {
    //         //     clearInterval(int);
    //         // });

    //         // document.getElementById("resetTimer").addEventListener("click", () => {
    //         //     clearInterval(int);
    //         //     [seconds, minutes] = [0, 0];
    //         //     timerRef.innerHTML = " 00 : 00 ";
    //         // });

    //         function displayTimer() {
    //             milliseconds += 10;
    //             if (milliseconds === 1000) {
    //                 milliseconds = 0;
    //                 seconds++;
    //                 if (seconds === 60) {
    //                     seconds = 0;
    //                     minutes++;
    //                     if (minutes === 60) {
    //                         minutes = 0;
    //                     }
    //                 }
    //             }

    //             let m = minutes < 10 ? "0" + minutes : minutes;
    //             let s = seconds < 10 ? "0" + seconds : seconds;

    //             timerRef.innerHTML = ` ${m}:${s} `;
    //         }
    //         displayTimer();
    //     });
    // }

    //Поиск пары карт
    const playingFieldCards = document.querySelectorAll(".playingFieldCard");
    let compareNameId = [];
    let compareId = [];
    playingFieldCards.forEach((playingFieldCard) => {
        playingFieldCard.addEventListener("click", (event) => {
            let nameId = event.target.dataset.name;
            let id = event.target.id;

            playingFieldCard.setAttribute("src", `/cards/${nameId}.jpg`);

            compareId.push(id);
            compareNameId.push(nameId);

            if (compareId.length === 2 && compareNameId.length === 2) {
                if (compareId[0] !== compareId[1]) {
                    if (compareNameId[0] === compareNameId[1]) {
                        score = score + 1;
                        step = ++step;
                        compareId = [];
                        compareNameId = [];
                    } else {
                        step = ++step;
                        setTimeout(() => {
                            playingFieldCards.forEach((playingFieldCard) => {
                                playingFieldCard.setAttribute(
                                    "src",
                                    "/cards/back.jpg",
                                );
                            });
                            console.log("Очистка");
                        }, 500);
                        compareId = [];
                        compareNameId = [];
                    }
                } else if (compareId[0] === compareId[1]) {
                    compareNameId.shift();
                    compareId.shift();
                }

                // Окно результата
                console.log("Счет :", score, "Ход :", step);
                if (numLevel === 1) {
                    if (step === 5 || score === 3) {
                        document.querySelector(".winLose").style.display =
                            "flex";
                        if (score === 3) {
                            //console.log(int);
                            //clearInterval(int);
                            //watch(true);
                            alert("Вы победили!");
                        } else if (score <= 3) {
                            clearInterval(displayTimer);
                            //console.log(int);
                            //clearInterval(int);
                            alert("Вы проиграли!");
                        }
                    }
                } else if (numLevel === 2) {
                    if (step === 8) {
                        if (score === 6) {
                            //renderWin(true);
                            alert("Вы победили!");
                        } else {
                            //renderWin(false);
                            alert("Вы проиграли!");
                        }
                    }
                } else if (numLevel === 3) {
                    if (step === 9) {
                        if (score === 9) {
                            //renderWin(true);
                            alert("Вы победили!");
                        } else {
                            //renderWin(false);
                            alert("Вы проиграли!");
                        }
                    }
                }
            }
        });
    });
}
// Показать и скрытие карточек через 5 сек в начале игры
function ints() {
    setTimeout(() => {
        renderGame(true);
        setInterval(displayTimer, 10);
        //watch(true);
        console.log("Старт");
    }, 3000);
}

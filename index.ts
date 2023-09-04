import "./styles.css";
import { startTimer, stopTimer } from "./watch";

const appEl = document.getElementById("app") as HTMLElement;
let numLevel = 1;
let score = 0;
let step = 0;

console.log("Level :", numLevel, ";", "Счет :", score, ";", "Ход :", step);

let arr: string[] = [
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
let arr2: (string | number)[][] = [];

// Рендер уровня сложности + выбор уровня сложности и запуск игры
function renderLevel() {
    const levelHtml = `<div class="top center">
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

    const levelButtons = document.querySelectorAll(
        ".card",
    ) as NodeListOf<Element>;
    levelButtons.forEach((levelButton: Element) => {
        levelButton.addEventListener("click", (event) => {
            if (event.target instanceof HTMLElement) {
                const dataSet: string = event.target.dataset.level || "";
                numLevel = parseInt(dataSet);
                if (numLevel === 1) {
                    const numLevel = 1;
                    console.log("Level :", numLevel);
                } else if (numLevel === 2) {
                    const numLevel = 2;
                    console.log("Level :", numLevel);
                } else if (numLevel === 3) {
                    const numLevel = 3;
                    console.log("Level :", numLevel);
                }
            }
        });
    });

    // Определение кол-во карт на поле и рандомизация колоды
    function start(numLevel: number) {
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
        arr2 = arr.map((element, index) => {
            return [index, element];
        });
        console.log("массив пар", arr2); //[["id","name"],["id","name"]]
    }

    const startButton = document.querySelector(".button") as HTMLElement;
    startButton.addEventListener("click", () => {
        start(numLevel);
        stopTimer();
        renderGame(false);
        ints();
        console.log("Играть на уровне сложности :", numLevel);
    });
}
renderLevel();

//Рендер игрового поля и повторный запуск игры
function renderGame(isAct: boolean) {
    const cardsHtml = arr2
        .map((back) => {
            //рубашки карт
            return `<div id="${back[0]}" class="back"><img class="playingFieldCard" id="${back[0]}" data-name="${back[1]}" src="./cards/back.jpg" alt=""></div>`;
        })
        .join("");
    const cardsBackHtml = arr2
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
        <div id="css" class="playingFieldCards">
            ${isAct ? cardsHtml : cardsBackHtml}
        </div>
    </div>
    <div id="addHtml" class="imgBg"></div>`;
    appEl.innerHTML = gameHtml;
    const css = document.getElementById("css") as HTMLElement;
    css.style.pointerEvents = "none";

    // Рендер результата
    function renderWin(isWin: boolean) {
        const time = document.querySelector(".timerDisplay")?.innerHTML;
        const winHtml = `
        <div class="img"></div>
        <div class="winLose center">
            <img class="imgHeader" src="./cards/${
                isWin ? "win.png" : "lose.png"
            }" alt="winORlose">
            <h1 class="headerLow">${
                isWin ? "Вы выиграли!" : "Вы проиграли!"
            }</h1>
            <h3 class="heading">Затраченное время:</h3>
            <p class="timeHeader">${time}</p>
            <button style="margin-bottom: 48px" class="button returnButton">Играть снова</button>
        </div>`;
        const addHtml = document.getElementById("addHtml") as HTMLElement;
        addHtml.innerHTML = winHtml;
        returnGame();
        stopTimer();
    }

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
                stopTimer();
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

    //Поиск пары карт
    const playingFieldCards = document.querySelectorAll(".playingFieldCard");
    let compareNameId: string[] = [];
    let compareId: string[] = [];
    playingFieldCards.forEach((playingFieldCard) => {
        playingFieldCard.addEventListener("click", (event) => {
            if (event.target instanceof HTMLElement) {
                const nameId: string = event.target.dataset.name || "";
                const id = event.target.id;

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
                                playingFieldCards.forEach(
                                    (playingFieldCard) => {
                                        playingFieldCard.setAttribute(
                                            "src",
                                            "/cards/back.jpg",
                                        );
                                    },
                                );
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
                    // записывать все пары сравнивыемых карт в общий масив, при достижение нужной длинны массива сравнить с уровнем игры и выдать результат, если при сравнение первой пары не было допусщина ошибка
                    console.log("Счет :", score, "Ход :", step);
                    if (numLevel === 1) {
                        if (step === 5 || score === 3) {
                            if (score === 3) {
                                renderWin(true);
                            } else if (score <= 3) {
                                renderWin(false);
                            }
                        }
                    } else if (numLevel === 2) {
                        if (step === 8 || score === 6) {
                            if (score === 6) {
                                renderWin(true);
                            } else {
                                renderWin(false);
                            }
                        }
                    } else if (numLevel === 3) {
                        if (step === 9 || score === 9) {
                            if (score === 9) {
                                renderWin(true);
                            } else {
                                renderWin(false);
                            }
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
        const timerRefs = document.querySelectorAll(
            ".timerDisplay",
        ) as NodeListOf<HTMLElement>;
        timerRefs.forEach((timerRef) => startTimer(timerRef));

        const css = document.getElementById("css") as HTMLElement;
        css.style.pointerEvents = "auto";
        console.log("Старт");
    }, 5000);
}

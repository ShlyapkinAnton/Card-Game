import "./styles.css";
const appEl = document.getElementById("app");

let numLevel = 1;
console.log("Level :", numLevel);

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
        <button class="button">Start</button>
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
        arr = arrC
            .map((i) => [Math.random(), i])
            .sort()
            .map((i) => i[1]);
        console.log(arr);
    }

    const startButton = document.querySelector(".button");
    startButton.addEventListener("click", () => {
        start(numLevel);
        renderGame(false);
        int();
        console.log("Играть на уровне сложности :", numLevel);
    });
}
renderLevel();
let a = [];
let score = 0;
console.log("Счет :", score);
//Рендер игрового поля и повторный запуск игры
function renderGame(isAct) {
    let cardsHtml = arr
        .map((back) => {
            //рубаки карт
            return `<div id="back" class="back"><img class="playingFieldCard" id="back" data-name="${back}" src="./cards/back.jpg" alt=""></div>`;
        })
        .join("");
    let cardsBackHtml = arr
        .map((back) => {
            return `<div id="back" class="back"><img class="playingFieldCard" id="back" data-name="${back}" src="./cards/${back}.jpg" alt=""></div>`;
        })
        .join("");
    const gameHtml = `
    <div class="playingField center">
        <div class="playingFieldHeader">
            <div class="timeBox">
                <h1 id="timeData" class="time">00.00</h1>
            </div>
            <div>
                <button class="button returnButton">Начать заново</button>
            </div>
        </div>
        <div class="playingFieldCards">
            ${isAct ? cardsHtml : cardsBackHtml}
        </div>
    </div>`;
    appEl.innerHTML = gameHtml;
    //Кнопка повторной игры и сброс значей
    const returnButton = document.querySelector(".returnButton");
    returnButton.addEventListener("click", () => {
        arr = arr = [
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
        score = 0;
        renderLevel(false);
        console.log("Играть заново");
    });

    //Поиск пары карт
    const playingFieldCard = document.querySelectorAll(".playingFieldCard");
    playingFieldCard.forEach((playingFieldCard) => {
        console.log("click");
        playingFieldCard.addEventListener("click", () => {
            //playingFieldCard.classList.add("back");
            //playingFieldCard.style.display = "none";
            let card = playingFieldCard.dataset.name;
            playingFieldCard.setAttribute("src", `/cards/${card}.jpg`);
            console.log(playingFieldCard.dataset.name);
            a.push(card);
            console.log(a);
            console.log(a.length);

            if (a.length === 2) {
                if (a[0] === a[1]) {
                    score = score + 1;
                    a = [];
                    alert("Вы победили!");
                    console.log("=", "Счет :", score, a);
                } else {
                    a = [];
                    console.log("!=", "Счет :", score, a);
                    alert("Вы проиграли!");
                }
            }
        });
    });
}
// Показать и скрытие карточек через 5 сек в начале игры
function int() {
    setTimeout(() => {
        renderGame(true);
        console.log("set");
    }, 5000);
}
//document.getElementById("timeData").textContent = "11.11";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n\nconst appEl = document.getElementById(\"app\");\nconst returnButton = document.querySelector(\".returnButton\");\n\nlet numLevel = 1;\nconsole.log(\"Level :\", numLevel);\n\nlet arr = [\n    \"AceSpades\",\n    \"KingSpades\",\n    \"QueenSpades\",\n    \"JackSpades\",\n    \"10Spades\",\n    \"9Spades\",\n    \"8Spades\",\n    \"7Spades\",\n    \"6Spades\",\n    \"AceHearts\",\n    \"KingHearts\",\n    \"QueenHearts\",\n    \"JackHearts\",\n    \"10Hearts\",\n    \"9Hearts\",\n    \"8Hearts\",\n    \"7Hearts\",\n    \"6Hearts\",\n    \"AceDiamonds\",\n    \"KingDiamonds\",\n    \"QueenDiamonds\",\n    \"JackDiamonds\",\n    \"10Diamonds\",\n    \"9Diamonds\",\n    \"8Diamonds\",\n    \"7Diamonds\",\n    \"6Diamonds\",\n    \"AceClubs\",\n    \"KingClubs\",\n    \"QueenClubs\",\n    \"JackClubs\",\n    \"10Clubs\",\n    \"9Clubs\",\n    \"8Clubs\",\n    \"7Clubs\",\n    \"6Clubs\",\n];\n\n// Рендер уровня сложности + выбор уровня сложности и запуск игры\nfunction renderLevel() {\n    let levelHtml = `<div class=\"top center\">\n    <div class=\"window\">\n        <h1 class=\"header\">Выбери сложность</h1>\n        <div class=\"cards\">\n            <button data-level=\"1\" class=\"card\">1</button>\n            <button data-level=\"2\" class=\"card\">2</button>\n            <button data-level=\"3\" class=\"card\">3</button>\n        </div>\n        <button class=\"button\">Start</button>\n    </div>\n</div>`;\n    appEl.innerHTML = levelHtml;\n\n    const levelButtons = document.querySelectorAll(\".card\");\n    levelButtons.forEach((levelButton) => {\n        levelButton.addEventListener(\"click\", (event) => {\n            numLevel = parseInt(event.target.dataset.level);\n            if (numLevel === 1) {\n                let numLevel = 1;\n                console.log(\"Level :\", numLevel);\n            } else if (numLevel === 2) {\n                let numLevel = 2;\n                console.log(\"Level :\", numLevel);\n            } else if (numLevel === 3) {\n                let numLevel = 3;\n                console.log(\"Level :\", numLevel);\n            }\n        });\n    });\n\n    // Определение кол-во карт на поле и рандомизация колоды\n    function start(numLevel) {\n        let numCards = 6;\n        if (numLevel === 1) {\n            numCards = 6;\n        } else if (numLevel === 2) {\n            numCards = 12;\n        } else if (numLevel === 3) {\n            numCards = 18;\n        }\n        console.log(\"Кол-во карт :\", numCards);\n\n        arr = arr\n            .map((i) => [Math.random(), i])\n            .sort()\n            .map((i) => i[1]);\n        arr = arr.slice(0, numCards / 2);\n        let arrB = Array.from(arr);\n        let arrC = [...arr, ...arrB];\n        let arrD = arrC\n            .map((i) => [Math.random(), i])\n            .sort()\n            .map((i) => i[1]);\n        arr = Object.assign({}, arrD); // объект с индексом и элеменовм внутри\n        arr = Object.entries(arr); // возвращает массив пар\n        console.log(\"массив пар\", arr);\n    }\n\n    const startButton = document.querySelector(\".button\");\n    startButton.addEventListener(\"click\", () => {\n        start(numLevel);\n        renderGame(false);\n        int();\n        console.log(\"Играть на уровне сложности :\", numLevel);\n    });\n}\nrenderLevel();\nlet isWin = null;\nlet score = 0;\nlet step = 0;\nconsole.log(\"Счет :\", score);\n//Рендер игрового поля и повторный запуск игры\nfunction renderGame(isAct) {\n    let cardsHtml = arr\n        .map((back) => {\n            //рубаки карт\n            return `<div id=\"${back[0]}\" class=\"back\"><img class=\"playingFieldCard\" id=\"${back[0]}\" data-name=\"${back[1]}\" src=\"./cards/back.jpg\" alt=\"\"></div>`;\n        })\n        .join(\"\");\n    let cardsBackHtml = arr\n        .map((back) => {\n            return `<div id=\"${back[0]}\" class=\"back\"><img class=\"playingFieldCard\" id=\"${back[0]}\" data-name=\"${back[1]}\" src=\"./cards/${back[1]}.jpg\" alt=\"\"></div>`;\n        })\n        .join(\"\");\n    const gameHtml = `\n    <div class=\"playingField center\">\n        <div class=\"playingFieldHeader\">\n            <div class=\"timeBox\">\n                <h1 id=\"timeData\" class=\"time\">00.00</h1>\n            </div>\n            <div>\n                <button class=\"button returnButton\">Начать заново</button>\n            </div>\n        </div>\n        <div class=\"playingFieldCards\">\n            ${isAct ? cardsHtml : cardsBackHtml}\n        </div>\n    </div>`;\n    appEl.innerHTML = gameHtml;\n\n    function renderWin() {\n        let winHtml = `<div class=\"winLose\">\n        <img class=\"imgHeader\" src=\"/cards/ ${\n            isWin ? \"lose.png\" : \"win.jpg\"\n        }\" alt=\"winORlose\">\n        <h1 class=\"headerLow\"> ${isWin ? \"Вы проиграли!\" : \"Вы выиграли!\"} </h1>\n        <h3 class=\"heading\">Затраченное время:</h3>\n        <p id=\"timeData\" class=\"timeHeader time\">01.20</p>\n        <button style=\"margin-bottom: 48px\" class=\"button returnButton\">Играть снова</button>\n    </div>`;\n        appEl.innerHTML = winHtml;\n    }\n\n    //Кнопка повторной игры и сброс значей\n    const returnButton = document.querySelector(\".returnButton\");\n    returnButton.addEventListener(\"click\", () => {\n        arr = arr = [\n            \"AceSpades\",\n            \"KingSpades\",\n            \"QueenSpades\",\n            \"JackSpades\",\n            \"10Spades\",\n            \"9Spades\",\n            \"8Spades\",\n            \"7Spades\",\n            \"6Spades\",\n            \"AceHearts\",\n            \"KingHearts\",\n            \"QueenHearts\",\n            \"JackHearts\",\n            \"10Hearts\",\n            \"9Hearts\",\n            \"8Hearts\",\n            \"7Hearts\",\n            \"6Hearts\",\n            \"AceDiamonds\",\n            \"KingDiamonds\",\n            \"QueenDiamonds\",\n            \"JackDiamonds\",\n            \"10Diamonds\",\n            \"9Diamonds\",\n            \"8Diamonds\",\n            \"7Diamonds\",\n            \"6Diamonds\",\n            \"AceClubs\",\n            \"KingClubs\",\n            \"QueenClubs\",\n            \"JackClubs\",\n            \"10Clubs\",\n            \"9Clubs\",\n            \"8Clubs\",\n            \"7Clubs\",\n            \"6Clubs\",\n        ];\n        numLevel = 1;\n        step = 0;\n        score = 0;\n        renderLevel(false);\n        console.log(\"Играть заново\");\n    });\n\n    //Поиск пары карт\n    const playingFieldCards = document.querySelectorAll(\".playingFieldCard\");\n    let compareNameId = [];\n    let compareId = [];\n    playingFieldCards.forEach((playingFieldCard) => {\n        playingFieldCard.addEventListener(\"click\", (event) => {\n            let nameId = event.target.dataset.name;\n            let id = event.target.id;\n\n            playingFieldCard.setAttribute(\"src\", `/cards/${nameId}.jpg`);\n\n            compareId.push(id);\n            compareNameId.push(nameId);\n\n            if (compareId.length === 2 && compareNameId.length === 2) {\n                if (compareId[0] !== compareId[1]) {\n                    if (compareNameId[0] === compareNameId[1]) {\n                        score = score + 1;\n                        step = ++step;\n                        compareId = [];\n                        compareNameId = [];\n                    } else {\n                        step = ++step;\n                        setTimeout(() => {\n                            playingFieldCards.forEach((playingFieldCard) => {\n                                playingFieldCard.setAttribute(\n                                    \"src\",\n                                    \"/cards/back.jpg\",\n                                );\n                            });\n                            console.log(\"Очистка\");\n                        }, 500);\n                        compareId = [];\n                        compareNameId = [];\n                    }\n                } else if (compareId[0] === compareId[1]) {\n                    compareNameId.shift();\n                    compareId.shift();\n                }\n                // Окно результата\n                console.log(\"Счет :\", score, \"Ход :\", step);\n                if (numLevel === 1) {\n                    if (step === 5 || score === 3) {\n                        if (score === 3) {\n                            renderWin(true);\n                            alert(\"Вы победили!\");\n                        }\n                    }\n                } else if (numLevel === 2) {\n                    if (step === 8) {\n                        if (score === 6) {\n                            renderWin(true);\n                            alert(\"Вы победили!\");\n                        }\n                    }\n                } else if (numLevel === 3) {\n                    if (step === 9) {\n                        if (score === 9) {\n                            renderWin(true);\n                            alert(\"Вы победили!\");\n                        }\n                    }\n                } else {\n                    renderWin(false);\n                    alert(\"Вы проиграли!\");\n                }\n            }\n        });\n    });\n}\n// Показать и скрытие карточек через 5 сек в начале игры\nfunction int() {\n    setTimeout(() => {\n        renderGame(true);\n        console.log(\"Старт\");\n    }, 5000);\n}\n//document.getElementById(\"timeData\").textContent = \"11.11\";\n\n\n//# sourceURL=webpack://card-game/./index.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://card-game/./styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
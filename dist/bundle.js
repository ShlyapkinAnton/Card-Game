(()=>{"use strict";var n=0,e=0,t=0,a=void 0;function s(){clearInterval(a),n=0,e=0,t=0}var c=document.getElementById("app"),o=1,i=0,d=0;console.log("Level :",o,";","Счет :",i,";","Ход :",d);var l=["AceSpades","KingSpades","QueenSpades","JackSpades","10Spades","9Spades","8Spades","7Spades","6Spades","AceHearts","KingHearts","QueenHearts","JackHearts","10Hearts","9Hearts","8Hearts","7Hearts","6Hearts","AceDiamonds","KingDiamonds","QueenDiamonds","JackDiamonds","10Diamonds","9Diamonds","8Diamonds","7Diamonds","6Diamonds","AceClubs","KingClubs","QueenClubs","JackClubs","10Clubs","9Clubs","8Clubs","7Clubs","6Clubs"],r=[];function u(){c.innerHTML='<div class="top center">\n    <div class="window">\n        <h1 class="header">Выбери сложность</h1>\n        <div class="cards">\n            <button data-level="1" class="card">1</button>\n            <button data-level="2" class="card">2</button>\n            <button data-level="3" class="card">3</button>\n        </div>\n        <button class="button">Старт</button>\n    </div>\n    </div>',document.querySelectorAll(".card").forEach((function(n){n.addEventListener("click",(function(n){if(n.target instanceof HTMLElement){var e=n.target.dataset.level||"";1===(o=parseInt(e))?console.log("Level :",1):2===o?console.log("Level :",2):3===o&&console.log("Level :",3)}}))})),document.querySelector(".button").addEventListener("click",(function(){(function(n,e,t){var a=6;1===n?a=3:2===n?a=6:3===n&&(a=9),console.log("Кол-во карт :",a),e.sort((function(){return Math.random()-.5})),(e=e.slice(0,a)).forEach((function(n){return e.push(n)})),e.sort((function(){return Math.random()-.5})),e.forEach((function(n,e){t.push([e,n])})),console.log("массив пар",t)})(o,l,r=[]),s(),v(!1),setTimeout((function(){v(!0),document.querySelectorAll(".timerDisplay").forEach((function(s){return c=s,void(a=setInterval((function(){1e3===(n+=10)&&(n=0,60==++e&&(e=0,60==++t&&(t=0))),c.innerHTML="".concat((t<10?"0"+t:t)+"."+(e<10?"0"+e:e))}),10));var c})),document.getElementById("css").style.pointerEvents="auto",console.log("Старт")}),5e3),console.log("Играть на уровне сложности :",o)}))}u();var m=function(){document.querySelectorAll(".returnButton").forEach((function(n){n.addEventListener("click",(function(){l=["AceSpades","KingSpades","QueenSpades","JackSpades","10Spades","9Spades","8Spades","7Spades","6Spades","AceHearts","KingHearts","QueenHearts","JackHearts","10Hearts","9Hearts","8Hearts","7Hearts","6Hearts","AceDiamonds","KingDiamonds","QueenDiamonds","JackDiamonds","10Diamonds","9Diamonds","8Diamonds","7Diamonds","6Diamonds","AceClubs","KingClubs","QueenClubs","JackClubs","10Clubs","9Clubs","8Clubs","7Clubs","6Clubs"],s(),o=1,d=0,i=0,u(),console.log("Играть заново. Level :",o,";","Счет :",i,";","Ход :",d)}))}))};function v(n){var e=r.map((function(n){return'<div id="'.concat(n[0],'"><img class="playingFieldCard back" id="').concat(n[0],'" data-name="').concat(n[1],'" src="./cards/back.jpg" alt=""></div>')})).join(""),t=r.map((function(n){return'<div id="'.concat(n[0],'"><img class="playingFieldCard back" id="').concat(n[0],'" data-name="').concat(n[1],'" src="./cards/').concat(n[1],'.jpg" alt=""></div>')})).join(""),a='\n    <div class="playingField center">\n        <div class="playingFieldHeader">\n            <div class="timeBox">\n                <div class="timeBoxHeader">\n                    <p class="timeBoxHeader">min</p>\n                    <p class="timeBoxHeader">sec</p>\n                </div>\n                <div>\n                    <h1 class="time timerDisplay">00.00</h1>\n                </div>\n            </div>\n            <div>\n                <button class="button returnButton">Начать заново</button>\n            </div>\n        </div>\n        <div id="css" class="playingFieldCards">\n            '.concat(n?e:t,'\n        </div>\n    </div>\n    <div id="addHtml" class="imgBg"></div>');function l(n){var e,t=null===(e=document.querySelector(".timerDisplay"))||void 0===e?void 0:e.innerHTML,a='\n        <div class="img"></div>\n        <div class="winLose center">\n            <img class="imgHeader" src="./cards/'.concat(n?"win.png":"lose.png",'" alt="winORlose">\n            <h1 class="headerLow">').concat(n?"Вы выиграли!":"Вы проиграли!",'</h1>\n            <h3 class="heading">Затраченное время:</h3>\n            <p class="timeHeader">').concat(t,'</p>\n            <button style="margin-bottom: 48px" class="button returnButton">Играть снова</button>\n        </div>');document.getElementById("addHtml").innerHTML=a,m(),s()}c.innerHTML=a,document.getElementById("css").style.pointerEvents="none",m();var u=document.querySelectorAll(".playingFieldCard"),v=[],p=[];u.forEach((function(n){n.addEventListener("click",(function(e){if(e.target instanceof HTMLElement){var t=e.target.dataset.name||"",a=e.target.id;n.setAttribute("src","/cards/".concat(t,".jpg")),p.push(a),v.push(t),2===p.length&&2===v.length&&(p[0]!==p[1]?v[0]===v[1]?(i+=1,d=++d,p=[],v=[]):(d=++d,setTimeout((function(){u.forEach((function(n){n.setAttribute("src","/cards/back.jpg")})),console.log("Очистка")}),500),p=[],v=[]):p[0]===p[1]&&(v.shift(),p.shift())),console.log("Счет :",i,"Ход :",d),1===o?5!==d&&3!==i||(3===i?l(!0):i<=3&&l(!1)):2===o?8!==d&&6!==i||l(6===i):3===o&&(9!==d&&9!==i||l(9===i))}}))}))}})();
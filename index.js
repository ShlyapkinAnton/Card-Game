
let numLevel = 1;
console.log("Level :",numLevel);

const levelButtons = document.querySelectorAll(".card");
levelButtons.forEach((levelButton) => {
    levelButton.addEventListener("click", (event) => {
        numLevel = parseInt(event.target.dataset.level);
        if (numLevel === 1) {
            let numLevel = 1;
            console.log("Level :", numLevel);
        } else if (numLevel === 2) {
            let numLevel = 2;
            console.log("Level :",numLevel);
        } else if (numLevel === 3) {
            let numLevel = 3;
            console.log("Level :",numLevel);
        }
    })
})

const startButton = document.querySelector(".button");
    startButton.addEventListener("click", () => {
        console.log("Играть на уровне сложности :", numLevel);
    });


// let timerRef = document.querySelector(".timerDisplay");
export const watch = () => {
    let [milliseconds, seconds, minutes] = [0, 0, 0];
    const timerRefs = document.querySelectorAll(".timerDisplay");
    timerRefs.forEach((timerRef) => {
        let int = null;

    // document.getElementById("startTimer").addEventListener("click", () => {
    //     if (int !== null) {
    //         clearInterval(int);
    //     }
    int = setInterval(displayTimer, 10);
    // });

    // document.getElementById("pauseTimer").addEventListener("click", () => {
    //     clearInterval(int);
    // });

    // document.getElementById("resetTimer").addEventListener("click", () => {
    //     clearInterval(int);
    //     [seconds, minutes] = [0, 0];
    //     timerRef.innerHTML = " 00 : 00 ";
    // });

    function displayTimer() {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                }
            }
        }

        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        timerRef.innerHTML = ` ${m}:${s} `;
    }
    displayTimer();
    })
};

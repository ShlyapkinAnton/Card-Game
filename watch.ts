let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval: any = 0
export function startTimer(html: HTMLElement) {
    interval= setInterval(() => {
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
        html.innerHTML = `${(minutes < 10 ? "0" + minutes : minutes) + "." + (seconds < 10 ? "0" + seconds : seconds)}`;
    }, 10);
}

export function stopTimer() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
}

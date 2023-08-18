import { ref } from "vue";
import { CountDownTimer } from "./countdownTimer.js";

let duration = ref(0);
let timer = new CountDownTimer(0)

export function setDuration(secs) {
    duration.value = secs
}

export function getDuration() {
    return duration
}

export function start(displayFtn, duration) {
    timer.set(duration + timer.diff)
    timer.onTick(displayFtn).start()
}

export function stop() {
    timer.stop()
    setDuration(0)
}
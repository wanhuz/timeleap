<template>
    <div class="card shadow-sm ">
        <div class="card-body">
            <div class="timer d-flex justify-content-center align-items-center m-3 text-secondary">
                {{ timerText }}
            </div>
        </div>
    </div>
</template>

<script>
import { start, getDuration } from "../Composables/useTimer.js"
import { ref, watch } from "vue";

    export default {
        setup() {
            const timerText = ref('00:00');
            const time = getDuration();

            function display(minutes, seconds) {
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                timerText.value = minutes + ':' + seconds;
            }

            watch(time, (newValue) => {
                start(display, time.value);

                if (newValue === 0)
                    display(0,0)
            })

            return {
                timerText
            }
        }
    }
</script>

<style scoped>
    .timer { font-size: 140px; }
</style>
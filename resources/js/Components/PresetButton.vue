<template>
    <button @click="setTimer(secs)" type="button" class="btn btn-preset shadow-sm px-3" >
        <span v-show="durations.hours">{{ durations.hours }} hrs </span> 
        <span v-show="durations.minutes">{{ durations.minutes }} min</span>
    </button>
</template>

<script>

import { toHoursAndMinutes } from '../Composables/useConverter.js';
import { setDuration } from '../Composables/useTimer.js'

export default {
    setup (props) {
        const minutes = props.duration;
        const secs = minutes * 60;
        const durations = toHoursAndMinutes(minutes);

        function setTimer(secs) {
            setDuration(secs)
        }

        return {
            durations,
            secs,
            setTimer
        };
    },
    props: {
        duration: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
    .btn-preset {
        background-color: white;
    }
</style>
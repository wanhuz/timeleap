<template>
    <button @click="stop" type="button" class="btn btn-preset shadow-sm">
        <i class="bi bi-stop"></i>
    </button>
</template>

<script>
import { stop } from '../Composables/useTimer.js';

export default {
    setup () {

        return {
            stop
        }
    }
}
</script>

<style scoped>
    .btn-preset {
        background-color: white;
    }
</style>
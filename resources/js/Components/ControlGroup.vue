<template>
    <div class="d-flex justify-content-end gap-3 my-3">
        <PlayButton></PlayButton>
        <ResetButton></ResetButton>
        <StopButton></StopButton>
    </div>
</template>

<script setup>
import PlayButton from './PlayButton.vue'
import ResetButton from './ResetButton.vue'
import StopButton from './StopButton.vue'
</script>
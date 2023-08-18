<script setup>
import { Head } from '@inertiajs/vue3'
import Home from '../Layouts/Home.vue'
import Timer from '../Components/Timer.vue'
import PresetGroup from '../Components/PresetGroup.vue'
import ControlGroup from '../Components/ControlGroup.vue'

defineProps({ name: Object })
</script>

<template>
    <Home>
        <ControlGroup></ControlGroup>
        <Timer></Timer>
        <PresetGroup></PresetGroup>
    </Home>
</template>

<style scoped>
</style>
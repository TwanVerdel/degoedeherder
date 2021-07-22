<template>
    <main class="page">
        <hero />
    </main>
</template>

<script>
    import Hero from '../components/Hero.vue'

    export default {
        components: {
            Hero
        },
    }
</script>

<style lang="scss" scoped>
    .page {
        min-height: 100vh;
    }
</style>
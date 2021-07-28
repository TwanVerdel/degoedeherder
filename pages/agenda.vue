<template>
    <main class="page">
        <calendar-content />
    </main>
</template>

<script>
    import CalendarContent from '../components/CalendarContent.vue'

    export default {
        components: { 
            CalendarContent 
        },

    }
</script>

<style lang="scss" scoped>
    .page { 
        display: flex;
        flex-direction: column;
    }
</style>
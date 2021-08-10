<template>
    <main>
        <catechesis-slider />
        
        <alternate-content />
    </main>
</template>

<script>
    import AlternateContent from '../components/AlternateContent.vue';
    import CatechesisSlider from '../components/CatechesisSlider.vue';

    export default {
        components: {
            CatechesisSlider,
            AlternateContent,
        },
    };
</script>

<style lang="scss" scoped>

</style>
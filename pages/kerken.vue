<template>
    <main>
        <church-overview />

        <catechesis-slider />

        <!-- TODO Werkgroepen koppelen per kerk -->
        <workgroup-slider />
    </main>
</template>

<script>
    import CatechesisSlider from '../components/CatechesisSlider.vue';
    import ChurchOverview from "../components/ChurchOverview.vue";
    import WorkgroupSlider from '../components/WorkgroupSlider.vue';

    export default {
        components: {
            ChurchOverview,
            CatechesisSlider,
            WorkgroupSlider,
        },
    };
</script>

<style lang="scss" scoped>

</style>
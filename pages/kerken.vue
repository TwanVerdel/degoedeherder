<template>
    <main>
        <church-overview :selectedIndex="selectedChurchIndex" @churchSelected="selectChurch"/>

        <!-- TODO Werkgroepen koppelen per kerk -->
        <workgroup-slider />


        <donation-banner />


        <alternate-content />
    </main>
</template>

<script>
    import AlternateContent from '../components/AlternateContent.vue';
    import ChurchOverview from "../components/ChurchOverview.vue";
    import DonationBanner from '../components/DonationBanner.vue';
    import WorkgroupSlider from '../components/WorkgroupSlider.vue';

    export default {
        data(){
            return {
                selectedChurchIndex: 0
            }
        },
        methods: {
            selectChurch(index) {
                this.selectedChurchIndex = index;
            }
        },
        components: {
            ChurchOverview,
            WorkgroupSlider,
            DonationBanner,
            AlternateContent
        },
    };
</script>

<style lang="scss" scoped>

</style>
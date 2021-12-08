<template>
    <main>
        <church-overview 
            :selectedIndex="selectedChurchIndex" 
            :churches="churches"
            :title="selectedChurch.name"
            @churchSelected="selectChurch"/>

        <!-- TODO Werkgroepen koppelen per kerk -->
        <workgroup-slider />

        <donation-banner :title="`Titel voor: ${selectedChurch.name}`"/>

        <alternate-content :title="`Titel voor: ${selectedChurch.name}`"/>
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
        computed :{
            selectedChurch() {
                return this.churches[this.selectedChurchIndex];
            },
            churches() {
                return [
                    {
                        name: "Erica",
                        url: 'https://picsum.photos/800'
                    },
                    {
                        name: "Emmerschans",
                        url: 'https://picsum.photos/900'
                    },

                    {
                        name: "Emmen",
                        url: 'https://picsum.photos/1000'
                    },
                                    {
                        name: "Barger-Oosterveld",
                        url: 'https://picsum.photos/1100'
                    },
                ];
            },
        }
    };
</script>

<style lang="scss" scoped>

</style>
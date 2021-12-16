<template>
    <main>
        <!-- TODO: deze gebruiken ipv de onderstaande -->
        <church-overview
            :selectedIndex="selectedChurchIndex"
            :churches="churchData.churches"
            @churchSelected="selectChurch"
        />

        <!-- Dummydata -->
        <!-- <church-overview
            :selectedIndex="selectedChurchIndex"
            :churches="churches"
            @churchSelected="selectChurch"
        /> -->


        <!-- Werkgroepen -->
        <workgroup-slider v-if="workgroupByChurchIndex.length > 0" :workgroups="workgroupByChurchIndex" />

        <donation-banner title="Kerkbijdrage of gift" :description="selectedChurch.contribution.html" />

        <alternate-content title="Vieringen" :description="selectedChurch.masses.html" buttonText="Bekijk alle vieringen" buttonURL="/evenementen" :openInNewTab="false" />
        <!-- Onderstaande regel moet worden toegevoegd als er een afbeelding beschikbaar is. -->
        <!-- :image="selectedChurch.massImage.url"  -->
        
        <!-- Locatieraad -->
        <donation-banner :title="selectedChurch.locationCouncilTitle" :description="selectedChurch.locationCouncil.html" :hasButton="false"/>
    </main>
</template>

<script>
import WorkgroupsByChurchData from "@/datalayers/workgroupsByChurch.js";
import ChurchData from "@/datalayers/churches.js";

import AlternateContent from "../components/AlternateContent.vue";
import ChurchOverview from "../components/ChurchOverview.vue";
import DonationBanner from "../components/DonationBanner.vue";
import WorkgroupSlider from "../components/WorkgroupSlider.vue";

export default {
    data() {
        return {
            selectedChurchIndex: 0
        };
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
    computed: {
        selectedChurch() {
            return this.churchData.churches[this.selectedChurchIndex];
        },
        workgroupByChurchIndex() {
            var location = this.churches[this.selectedChurchIndex].title;

            switch (location) {
                case "Erica":
                    return this.workgroupData.wg_erica
                    break;
                case "Emmerschans":
                    // code block
                    return this.workgroupData.wg_emmerschans
                    break;
                case "Emmen":
                    return this.workgroupData.wg_emmen
                    break;
                case "Barger-Oosterveld":
                    return this.workgroupData.wg_barger_oosterveld
                    break;
                case "Holtingerhof":
                    return this.workgroupData.wg_holtingerhof
                    break;
                default:
                    return null
            }
        },



        // Dummy data
        churches() {
            return [
                {
                    title: "Erica",
                    image: "https://picsum.photos/800"
                },
                {
                    title: "Emmerschans",
                    image: "https://picsum.photos/900"
                },

                {
                    title: "Emmen",
                    image: "https://picsum.photos/1000"
                },
                {
                    title: "Barger-Oosterveld",
                    image: "https://picsum.photos/1100"
                },
                {
                    title: "Holtingerhof",
                    image: "https://picsum.photos/1200"
                }
            ];
        },
    },
    async asyncData(ctx) {
        const churchData = await ChurchData(ctx);
        const workgroupData = await WorkgroupsByChurchData(ctx);
        
        return {
            workgroupData,
            churchData
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
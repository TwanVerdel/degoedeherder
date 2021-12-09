<template>
    <main>
        <church-overview
            :selectedIndex="selectedChurchIndex"
            :churches="churches"
            :title="selectedChurch.name"
            @churchSelected="selectChurch"
        />

        <!-- <pre>
            {{workgroupByChurchIndex}}
        </pre> -->

        <!-- TODO Werkgroepen koppelen per kerk -->
        <workgroup-slider :workgroups="workgroupByChurchIndex" />

        <donation-banner :title="`Titel voor: ${selectedChurch.name}`" />

        <alternate-content :title="`Titel voor: ${selectedChurch.name}`" />
    </main>
</template>

<script>
import WorkgroupsByChurchData from "@/datalayers/workgroupsByChurch.js";

import AlternateContent from "../components/AlternateContent.vue";
import ChurchOverview from "../components/ChurchOverview.vue";
import DonationBanner from "../components/DonationBanner.vue";
import WorkgroupSlider from "../components/WorkgroupSlider.vue";

export default {
    data() {
        return {
            selectedChurchIndex: 2
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
            return this.churches[this.selectedChurchIndex];
        },
        workgroupByChurchIndex() {
            var location = this.churches[this.selectedChurchIndex].name;

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
        churches() {
            return [
                {
                    name: "Erica",
                    url: "https://picsum.photos/800"
                },
                {
                    name: "Emmerschans",
                    url: "https://picsum.photos/900"
                },

                {
                    name: "Emmen",
                    url: "https://picsum.photos/1000"
                },
                {
                    name: "Barger-Oosterveld",
                    url: "https://picsum.photos/1100"
                },
                {
                    name: "Holtingerhof",
                    url: "https://picsum.photos/1100"
                }
            ];
        }
    },
    async asyncData(ctx) {
        const workgroupData = await WorkgroupsByChurchData(ctx);
        return {
            workgroupData
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
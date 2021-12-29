<template>
    <main class="page">
        <!-- TODO In het document 1.1 staat meer data die hier op een passende manier moeten worden weergegeven -->
        <pastors-content
            :title="pastorBanner.title"
            :description="pastorBanner.description"
            :leftPastorImage="pastorBanner.leftPastorImage.url"
            :leftPastorName="pastorBanner.leftPastorName"
            :rightPastorImage="pastorBanner.rightPastorImage.url"
            :rightPastorName="pastorBanner.rightPastorName"
        />

        <!-- Overlijden en de sacramenten -->
        <faq
            :faqs="sacraments"
            type="sacrament"
            title="De sacramenten en overlijden"
            description="Geboorte, huwelijk en overlijden zijn kernmomenten van ons bestaan en daar willen we gelovig bij stilstaan binnen onze parochie.
Dit doen wij met het sacrament van de doop (meestal aan het begin), het sacrament van het huwelijk, het sacrament van de ziekenzalving en indien gewenst een kerkelijke uitvaart aan het einde van ons leven.
"
        />

        <!-- TODO 1.3 Het bestuur en bovenlokale werkgroepen -->
        <workgroup-slider
            :workgroups="workgroupsContent"
            description="Er zijn werkgroepen in onze parochie die alle locaties bestrijken. De Algemene verordening gegevensbescherming (kortweg AVG) staat niet toe de diverse contactpersonen bij naam te noemen. Hebt u belangstelling? Dan kunt u altijd het contact leggen via een van de pastores.
"
        />

        <!-- parochieblad -->
        <CollapsableWYSIWYG>
            <h2>{{parishMagazine.title}}</h2>
            <p v-html="parishMagazine.text.html" />
        </CollapsableWYSIWYG>

        <!-- parochiële geschiedenis -->
        <alternate-content
            :title="history.title"
            :description="history.description"
            :buttonText="history.buttonText"
            :buttonURL="history.historyPDF.url"
            :image="history.image.url"
        />
    </main>
</template>

<script>
import PastorData from "@/datalayers/pastorBanner.js";
import ParishmagazineData from "@/datalayers/parishMagazine.js";
import ParishHistoryData from "@/datalayers/history.js";
import SacramentData from "@/datalayers/sacraments.js";
import WorkgroupData from "@/datalayers/regionalWorkgroups.js";

import CollapsableWYSIWYG from "../components/CollapsableWYSIWYG.vue";
import FAQ from "../components/FAQ.vue";

export default {
    components: {
        CollapsableWYSIWYG,
        FAQ
    },
    computed: {
        pastorBanner() {
            return this.pastorData.pastorBanners[0];
        },
        parishMagazine() {
            return this.magazineData?.parishMagazines?.[0];
        },
        history() {
            return this.historyData?.histories?.[0];
        },
        sacraments() {
            return this.sacramentData.sacraments;
        },
        workgroupsContent() {
            return this.workgroupData?.workgroups;
        }
    },

    async asyncData(ctx) {
        const pastorData = await PastorData(ctx);
        const magazineData = await ParishmagazineData(ctx);
        const historyData = await ParishHistoryData(ctx);
        const sacramentData = await SacramentData(ctx);
        const workgroupData = await WorkgroupData(ctx);

        return {
            pastorData,
            magazineData,
            historyData,
            sacramentData,
            workgroupData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
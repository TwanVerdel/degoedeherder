<template>
    <main class="page">
        <!-- Pastoorbanner -->
        <pastors-content
            :title="pastorBanner.title"
            :description="pastorBanner.description"
            :leftPastorImage="pastorBanner.leftPastorImage.url"
            :leftPastorImageWidth="pastorBanner.leftPastorImage.width"
            :leftPastorImageHeight="pastorBanner.leftPastorImage.height"
            :leftPastorName="pastorBanner.leftPastorName"
            :rightPastorImage="pastorBanner.rightPastorImage.url"
            :rightPastorImageHeight="pastorBanner.rightPastorImage.height"
            :rightPastorImageWidth="pastorBanner.rightPastorImage.width"
            :rightPastorName="pastorBanner.rightPastorName"
        />

        <CollapsableWYSIWYG>
            <h2>Werkverdeling</h2>
            <p v-html="pastorBanner.extraInformation.html" />
        </CollapsableWYSIWYG>

        <!-- Overlijden en de sacramenten -->
        <FAQ
            :faqs="sacraments"
            type="sacrament"
            title="De sacramenten en overlijden"
            description="Geboorte, huwelijk en overlijden zijn kernmomenten van ons bestaan en daar willen we gelovig bij stilstaan binnen onze parochie.
Dit doen wij met het sacrament van de doop (meestal aan het begin), het sacrament van het huwelijk, het sacrament van de ziekenzalving en indien gewenst een kerkelijke uitvaart aan het einde van ons leven.
"
        />

        <!-- parochiebestuur -->
        <CollapsableWYSIWYG>
            <h2>{{parishBoard.title}}</h2>
            <p v-html="parishBoard.text.html" />
        </CollapsableWYSIWYG>

        <!-- bovenlokale werkgroepen -->
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
            :imageWidth="history.image.width"
            :imageHeight="history.image.height"
        />
    </main>
</template>

<script>
import PastorData from "@/datalayers/pastorBanner.js";
import ParishmagazineData from "@/datalayers/parishMagazine.js";
import ParishHistoryData from "@/datalayers/history.js";
import SacramentData from "@/datalayers/sacraments.js";
import WorkgroupData from "@/datalayers/regionalWorkgroups.js";
import ParishBoardData from "@/datalayers/parishBoard.js";

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
        },
        parishBoard(){
            return this.parishBoardData.parishBoards[0];
        }
    },

    async asyncData(ctx) {
        const pastorData = await PastorData(ctx);
        const magazineData = await ParishmagazineData(ctx);
        const historyData = await ParishHistoryData(ctx);
        const sacramentData = await SacramentData(ctx);
        const workgroupData = await WorkgroupData(ctx);
        const parishBoardData = await ParishBoardData(ctx);

        return {
            pastorData,
            magazineData,
            historyData,
            sacramentData,
            workgroupData,
            parishBoardData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    margin-top: vw(112px);
}
</style>
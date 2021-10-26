<template>
    <main class="page">
        <pastors-content
            :title="pastorBanner.title"
            :description="pastorBanner.description"
            :leftPastorImage="pastorBanner.leftPastorImage.url"
            :leftPastorName="pastorBanner.leftPastorName"
            :rightPastorImage="pastorBanner.rightPastorImage.url"
            :rightPastorName="pastorBanner.rightPastorName"
        />
    </main>
</template>

<script>
import PastorData from "@/datalayers/pastorBanner.js";

export default {
    computed: {
        pastorBanner() {
            return this.pastorData.pastorBanners[0];
        }
    },

    async asyncData(ctx) {
        const pastorData = await PastorData(ctx);

        return {
            pastorData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
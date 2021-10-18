<template>
    <main class="page">
        <anbi-badge />
        <hero
            :title="hero.title"
            :paragraph="hero.description.html"
            :buttonUrl="'https://nu.nl'"
            :buttonText="hero.textLeftButton"
            :discoverMore="true"
            :imgUrl="hero.image.url"
            :imgAlt="'Mooi beeld'"
        />
        <article-grid showThree />
        <faq :title="'Veelgestelde vragen'" :faqs="faq" />
        <pastors-content
            :title="pastorBanner.title"
            :description="pastorBanner.description"
            :leftPastorImage="pastorBanner.leftPastorImage.url"
            :leftPastorName="pastorBanner.leftPastorName"
            :rightPastorImage="pastorBanner.rightPastorImage.url"
            :rightPastorName="pastorBanner.rightPastorName"
        />

        <history-component />
        <donation-banner
            :title="donationBanner.title"
            :description="donationBanner.description"
            :buttontext="donationBanner.buttonText"
        />
        <alternate-content />
        <board-banner :hasMembers="true" />
    </main>
</template>

<script>
import HeroComponentData from "@/datalayers/hero.js";
import PastorData from "@/datalayers/pastorBanner.js";
import FAQComponentData from "@/datalayers/FAQ.js";
import DonationBannerData from "@/datalayers/churchContributionBanner.js";

import ArticleGrid from "../components/ArticleGrid.vue";
import PastorsContent from "../components/PastorsContent.vue";
import ANBIBadge from "../components/ANBIBadge.vue";
import DonationBanner from "../components/DonationBanner.vue";
import Hero from "../components/Hero.vue";
import HistoryComponent from "../components/HistoryComponent.vue";
import BoardBanner from "../components/BoardBanner.vue";
import FAQ from "../components/FAQ.vue";

export default {
    components: {
        Hero,
        HistoryComponent,
        DonationBanner,
        ANBIBadge,
        ArticleGrid,
        BoardBanner,
        FAQ,
        PastorsContent
    },
    computed: {
        hero() {
            return this.heroData.heroes[0];
        },
        pastorBanner() {
            return this.pastorData.pastorBanners[0];
        },
        faq() {
            return this.FAQData.fAQs;
        },
        donationBanner() {
            return this.donationData.churchContributionBanners[0];
        }
    },
    layout: "hero",

    async asyncData(ctx) {
        const heroData = await HeroComponentData(ctx);
        const pastorData = await PastorData(ctx);
        const FAQData = await FAQComponentData(ctx);
        const donationData = await DonationBannerData(ctx);

        return {
            heroData,
            pastorData,
            FAQData,
            donationData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
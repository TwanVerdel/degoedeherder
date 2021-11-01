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
        <article-grid showThree type="nieuws" :articles="news" />
        <article-grid showThree :title="'Pastoorblogs'" :articles="blogs"/>
        <!-- <faq :title="'Veelgestelde vragen'" :faqs="faq" /> -->
       

        <!-- <donation-banner
            :title="donationBanner.title"
            :description="donationBanner.description"
            :buttonText="donationBanner.buttonText"
        /> -->
        <alternate-content title="Bisdomnieuws" description="De parochies van Erica, Barger-Oosterveld, Emmerschans en Emmen maken deel uit van het bisdom Groningen-Leeuwarden. Klik hieronder voor het laatste nieuws." buttonText="Bisdomnieuws" buttonURL="https://bisdomgl.nl/categorie/nieuws/"/>
        <!-- <board-banner :hasMembers="true" /> -->
    </main>
</template>

<script>
import HeroComponentData from "@/datalayers/hero.js";
import NewsData from "@/datalayers/newsMessages.js";
import BlogData from "@/datalayers/blogThumbnails.js";
// import FAQComponentData from "@/datalayers/FAQ.js";
// import DonationBannerData from "@/datalayers/churchContributionBanner.js";

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
        news() {
            return this.newsData.newsMessages;
        },
        blogs() {
            return this.blogData.pastorBlogs;
        }
    },
    layout: "hero",

    async asyncData(ctx) {
        const heroData = await HeroComponentData(ctx);
        const newsData = await NewsData(ctx);
        const blogData = await BlogData(ctx);

        return {
            heroData,
            newsData,
            blogData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
<template>
    <main class="page">
        
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
        <article-grid showThree :title="'Pastoorblogs'" :articles="blogs" />

        <alternate-content
            :title="bisdomnieuws.title"
            :description="bisdomnieuws.description"
            :buttonText="bisdomnieuws.buttonText"
            :buttonURL="bisdomnieuws.buttonURL"
            :image="bisdomnieuws.image.url"
        />

        
    </main>
</template>

<script>
import HeroComponentData from "@/datalayers/hero.js";
import NewsData from "@/datalayers/newsMessages.js";
import DioceseData from "@/datalayers/dioceseNews.js";
import BlogData from "@/datalayers/blogThumbnails.js";

import ArticleGrid from "../components/ArticleGrid.vue";
import ANBIBadge from "../components/ANBIBadge.vue";
import Hero from "../components/Hero.vue";
import CollapsableWYSIWYG from "../components/CollapsableWYSIWYG.vue";

export default {
    components: {
        Hero,
        ANBIBadge,
        ArticleGrid,
        CollapsableWYSIWYG,
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
        },
        bisdomnieuws(){
            return this.dioceseData.dioceseNewsBanners?.[0];
        }
    },
    layout: "hero",

    async asyncData(ctx) {
        const heroData = await HeroComponentData(ctx);
        const newsData = await NewsData(ctx);
        const dioceseData = await DioceseData(ctx);
        const blogData = await BlogData(ctx);

        return {
            heroData,
            newsData,
            blogData,
            dioceseData
        };
    },
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
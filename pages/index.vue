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
        <article-grid showThree :title="'Pastoorblogs'" :articles="blogs" />

        <alternate-content
            title="Bisdomnieuws"
            description="De parochies van Erica, Barger-Oosterveld, Emmerschans en Emmen maken deel uit van het bisdom Groningen-Leeuwarden. Klik hieronder voor het laatste nieuws."
            buttonText="Bisdomnieuws"
            buttonURL="https://bisdomgl.nl/categorie/nieuws/"
        />
        <!-- <board-banner :hasMembers="true" /> -->

        <collapsable-wysiwyg>
            <h2>Weekendvieringen.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sodales vitae mi viverra eleifend. Etiam non viverra
                tellus. Nulla sit amet maximus sapien, a volutpat justo. Donec
                blandit fringilla dictum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas tortor risus, fermentum
                vitae quam elementum, hendrerit semper augue. Morbi eget enim
                eros. Cras in massa molestie est imperdiet sollicitudin. Nullam
                pulvinar leo ipsum, ac scelerisque justo congue sit amet. Cras
                eget lacinia tellus. Nullam laoreet euismod nisi, ac molestie
                sem auctor et. Cras sed metus velit. Sed laoreet neque erat,
                eget dictum nibh volutpat vitae. Etiam vel magna commodo,
                convallis libero et, hendrerit eros.
            </p>
            <p>
                Ut urna odio, commodo non iaculis a, finibus eget nisi. Aenean
                vehicula mollis urna, id mattis massa aliquam at. Proin
                malesuada augue nec blandit dignissim. Maecenas molestie ligula
                augue, id eleifend felis ultricies quis. Nam dictum tempus
                ultricies. Nunc interdum varius tincidunt. Nam purus mi, dapibus
                vel eleifend vitae, cursus et est. Praesent id molestie mi,
                ullamcorper lobortis massa. Morbi fermentum augue ac arcu
                placerat, ac aliquet nisi tristique. Sed et eros blandit,
                dignissim urna accumsan, bibendum tortor. Donec faucibus turpis
                vitae diam feugiat, mollis semper lectus pulvinar. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Integer mollis
                diam felis, eu accumsan magna tristique eget.
            </p>

            <img src="https://picsum.photos/900/500" />

            <h2>Weekendvieringen.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sodales vitae mi viverra eleifend. Etiam non viverra
                tellus. Nulla sit amet maximus sapien, a volutpat justo. Donec
                blandit fringilla dictum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas tortor risus, fermentum
                vitae quam elementum, hendrerit semper augue. Morbi eget enim
                eros. Cras in massa molestie est imperdiet sollicitudin. Nullam
                pulvinar leo ipsum, ac scelerisque justo congue sit amet. Cras
                eget lacinia tellus. Nullam laoreet euismod nisi, ac molestie
                sem auctor et. Cras sed metus velit. Sed laoreet neque erat,
                eget dictum nibh volutpat vitae. Etiam vel magna commodo,
                convallis libero et, hendrerit eros.
            </p>
            <h3>Weekendvieringen.</h3>
            <p>
                Ut urna odio, commodo non iaculis a, finibus eget nisi. Aenean
                vehicula mollis urna, id mattis massa aliquam at. Proin
                malesuada augue nec blandit dignissim. Maecenas molestie ligula
                augue, id eleifend felis ultricies quis. Nam dictum tempus
                ultricies. Nunc interdum varius tincidunt. Nam purus mi, dapibus
                vel eleifend vitae, cursus et est. Praesent id molestie mi,
                ullamcorper lobortis massa. Morbi fermentum augue ac arcu
                placerat, ac aliquet nisi tristique. Sed et eros blandit,
                dignissim urna accumsan, bibendum tortor. Donec faucibus turpis
                vitae diam feugiat, mollis semper lectus pulvinar. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Integer mollis
                diam felis, eu accumsan magna tristique eget.
            </p>
        </collapsable-wysiwyg>
    </main>
</template>

<script>
import HeroComponentData from "@/datalayers/hero.js";
import NewsData from "@/datalayers/newsMessages.js";
import BlogData from "@/datalayers/blogThumbnails.js";
// import FAQComponentData from "@/datalayers/FAQ.js";
// import DonationBannerData from "@/datalayers/churchContributionBanner.js";

//TODO imports bijwerken
import ArticleGrid from "../components/ArticleGrid.vue";
// import PastorsContent from "../components/PastorsContent.vue";
import ANBIBadge from "../components/ANBIBadge.vue";
import Hero from "../components/Hero.vue";
import CollapsableWYSIWYG from "../components/CollapsableWYSIWYG.vue";
// import HistoryComponent from "../components/HistoryComponent.vue";
// import BoardBanner from "../components/BoardBanner.vue";

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
    },
    layout: "hero",

    async asyncData(ctx) {
        const heroData = await HeroComponentData(ctx);
        const newsData = await NewsData(ctx);
        const blogData = await BlogData(ctx);

        return {
            heroData,
            newsData,
            blogData,
        };
    },
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
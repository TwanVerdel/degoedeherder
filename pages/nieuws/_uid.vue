<template>
    <main class="page">
        <main-article :title="title" :imageSrc="image" :text="text" />
    </main>
</template>

<script>
import NewsData from "@/datalayers/newsArticle.js";

import MainArticle from "@/components/MainArticle.vue";

export default {
    components: {
        MainArticle
    },
    computed: {
        title() {
            return this.newsContent.newsMessage.title;
        },
        image() {
            return this.newsContent.newsMessage.thumbnail.url;
        },
        text() {
            return this.newsContent.newsMessage.text.html;
        }
    },

    async asyncData(ctx) {

        const {params, redirect} = ctx

        const newsContent = await NewsData(ctx, ctx.params);

        if (newsContent.newsMessage === null) {

            //TODO redirect naar /nieuws
            redirect("/blogs")
            ctx.redirect("/blogs")

        }

        return {
            newsContent
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
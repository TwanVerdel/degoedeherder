<template>
    <main class="page">
        <template v-if="newsContent.newsMessage">
            <main-article :title="title" :imageSrc="image" :text="text" />
        </template>
    </main>
</template>

<script>
import NewsData from "@/datalayers/newsArticle.js";

import MainArticle from "@/components/MainArticle.vue";

export default {
    components: {
        MainArticle
    },
    mounted() {
        if (!this.newsContent.newsMessage) {
            window.location.replace("/nieuws");
        }
    },
    computed: {
        title() {
            return this.newsContent?.newsMessage.title;
        },
        image() {
            return this.newsContent?.newsMessage.thumbnail.url;
        },
        text() {
            return this.newsContent?.newsMessage.text.html;
        }
    },

    async asyncData(ctx) {
        const { params, redirect } = ctx;

        const newsContent = await NewsData(ctx, ctx.params);

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
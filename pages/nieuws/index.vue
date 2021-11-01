<template>
    <main class="page">
        <article-grid :articles="articles" type="nieuws" />
    </main>
</template>

<script>
import ArticlesData from "@/datalayers/newsMessages.js";

import ArticleGrid from "@/components/ArticleGrid.vue";

export default {
    components: {
        ArticleGrid
    },
    computed: {
        articles() {
            return this.newsArticles.newsMessages;
        }
    },

    async asyncData(ctx) {
        const newsArticles = await ArticlesData(ctx);

        return {
            newsArticles
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
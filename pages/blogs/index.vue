<template>
    <main class="page">
        <article-grid title="Pastoorsblogs" :articles="thumbnails"/>
    </main>
</template>

<script>
    import BlogThumbnailsData from "@/datalayers/blogThumbnails.js";

    import ArticleGrid from "@/components/ArticleGrid.vue";

    export default {
        components: {
            ArticleGrid
        },
        computed:{
            thumbnails(){
                return this.blogThumbnails.pastorBlogs;
            }
        },

        async asyncData(ctx) {
        const blogThumbnails = await BlogThumbnailsData(ctx);

        return {
            blogThumbnails
        };
    }
    }
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
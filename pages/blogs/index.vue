<template>
    <main class="page">
        <article-grid />
    </main>
</template>

<script>
    import ArticleGrid from "@/components/ArticleGrid.vue";

    export default {
        components: {
            ArticleGrid
        }
    }
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
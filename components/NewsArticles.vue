<template>
    <section>
        <h2>Nieuws uit de parochie</h2>
        <div class="article-container">
            <article>
                <article-thumbnail />
            </article>
            <article><article-thumbnail /></article>
            <article><article-thumbnail /></article>
        </div>
    </section>
</template>

<script>
import ArticleThumbnail from "../components/ArticleThumbnail.vue";
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
section {
    @include Outer(88px, 64px);

    .article-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 24px;
        max-width: 100vw;
        margin-top: 48px;

         @media($phone) {
                    grid-template-columns: 1fr;
                }
    }
}
</style>
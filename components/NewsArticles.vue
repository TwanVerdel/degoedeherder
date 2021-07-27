<template>
    <section>
        <h2>Nieuws uit de parochie</h2>
        <div class="article-container">
            <article v-for="article in articles.slice(0,amountOfArticles)" :key="article">
                <article-thumbnail :title="article.title" :date="article.date" />
            </article>
        </div>
    </section>
</template>

<script>
import ArticleThumbnail from "../components/ArticleThumbnail.vue";
export default {
    data() {
        return {
            articles: [
                {
                    title: "Dit zijn de werkgroepen voor 2022",
                    date: "27 juli 2021"
                },
                {
                    title: "Een hele ontzettend lange titel van een artikel die niet op de regel past",
                    date: "27 juli 2021"
                },
                {
                    title: "Titel 3",
                    date: "27 juli 2021"
                },
                {
                    title: "Titel 4",
                    date: "27 juli 2021"
                }
            ]
        };
    },
    props:{
        amountOfArticles:{
            type: String,
            default: 3
        }
    }
};
</script>

<style lang="scss" scoped>
section {
    @include Outer(88px, 64px);

    // @media ($phone) {
    //     grid-template-columns: 1fr;
    // }

    @media ($tablet-portrait) {
        @include Outer(0px, 24px);
        padding-bottom: 0px;
    }

    .article-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
        max-width: 100vw;
        margin-top: desktop-vw(48px);

        @media ($phone) {
            grid-template-columns: 1fr;
            margin-top: phone-vw(48px);
        }

        @media ($tablet-portrait) {
            grid-template-columns: 1fr;
            justify-content: center;
            margin-top: tablet-vw(48px);
        }
    }
}
</style>
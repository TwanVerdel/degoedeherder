<template>
    <main class="page">
        <template v-if="parishInfoData.parishIntroduction">
            <main-article :title="title" :text="text" :imageSrc="banner" :showFooter="false" />
        </template>
    </main>
</template>

<script>
import ParishInfoData from "@/datalayers/parishInfo.js";

import MainArticle from "@/components/MainArticle.vue";

export default {
    components: {
        MainArticle
    },
    mounted() {

        // TODO de redirect fixen bij een niet bestaande taal
        // TODO styling toevoegen aan de afbeeldingen in de tekst

        if (!this.parishInfoData) {
            console.log("data");
            window.location.replace("/");
        }
    },
    computed: {
        title() {
            return this.parishInfoData?.parishIntroduction?.title;
        },
        text() {
            return this.parishInfoData?.parishIntroduction?.text?.html;
        },
        banner(){
            return this.parishInfoData?.parishIntroduction?.banner?.url
        }
    },

    async asyncData(ctx) {
        const { params, redirect } = ctx;

        const parishInfoData = await ParishInfoData(ctx, ctx.params);

        return {
            parishInfoData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
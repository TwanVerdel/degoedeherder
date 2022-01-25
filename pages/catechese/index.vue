<template>
    <main class="page">
        <catechesis-slider :catecheses="catecheses" />
    </main>
</template>

<script>
import CatechesesData from "@/datalayers/catecheses.js";

import CatechesisSlider from "../../components/CatechesisSlider.vue";

export default {
    components: {
        CatechesisSlider
    },
    computed: {
        catecheses() {
            return this.catechesesContent.catecheses;
        }
    },

    async asyncData(ctx) {
        const catechesesContent = await CatechesesData(ctx);

        return {
            catechesesContent
        };
    }
};
</script>

<style lang="scss" scoped>
.page{
    min-height: 100vh;
    margin-top: vw(112px);

    @media($tablet-portrait) {
        margin-top: vw(72px);
    }

}
</style>
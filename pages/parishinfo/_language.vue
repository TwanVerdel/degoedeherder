<template>
    <main class="page">
        <template v-if="parishInfoData">
            <main-article v-if="parishInfoData.parishIntroduction" :title="title" :text="text" :class="{ arabic: language === 'arabic' }" :imageSrc="banner"  :showFooter="false" />
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
    computed: {
        title() {
            return this.parishInfoData?.parishIntroduction?.title;
        },
        text() {
            return this.parishInfoData?.parishIntroduction?.text?.html;
        },
        banner(){
            return this.parishInfoData?.parishIntroduction?.banner?.url
        },
        language(){
            return this.parishInfoData?.parishIntroduction?.language
        }
    },

    async asyncData(ctx) {
        const { params, redirect } = ctx;

        try 
        {
            const parishInfoData = await ParishInfoData(ctx, params);

            if(!parishInfoData) redirect('/')

            return {
                parishInfoData
            };
        } 
        catch(e) 
        {
            redirect('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;

    .arabic{
        direction: rtl;
    }
}
</style>
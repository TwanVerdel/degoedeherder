<template>
    <main class="page">
        <FAQ
            :faqs="FAQ"
            title="Veelgestelde vragen"
            description="Hier vindt u de antwoorden op de meest gestelde vragen over onze parochie."
        />
    </main>
</template>

<script>
import faqData from "@/datalayers/FAQ.js";


export default {
    components: {},

    computed: {
        FAQ() {
            return this.FAQData.fAQS;
        }
    },

    async asyncData(ctx) {
        const FAQData = await faqData(ctx);

        return {
            FAQData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ::v-deep .text > p {
        margin-bottom: vw(24px);
    }

    
}
</style>
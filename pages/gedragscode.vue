<template>
    <main class="page">
        <h1>{{codeOfConduct.title}}</h1>
        <p v-html="codeOfConduct.codeOfConduct.html" />
        <p>
            Een melding maken kan op
            <a
                :href="'https://' + codeOfConduct.hotlineUrl"
            >www.meldpuntgrensoverschrijdendgedragrkk.nl/</a>
        </p>
    </main>
</template>

<script>
import codeOfConductData from "@/datalayers/codeOfConduct.js";

export default {
    components: {},

    computed: {
        codeOfConduct() {
            return this.cocData.codeOfConducts[0];
        }
    },

    async asyncData(ctx) {
        const cocData = await codeOfConductData(ctx);

        return {
            cocData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    @include Outer;
    display: flex;
    flex-direction: column;

    h1 {
        @include Outer;
        margin: 0 auto;
        font-size: desktop-vw(64px);
        margin-bottom: desktop-vw(88px);
        max-width: desktop-vw(920px);
        text-align: center;
        margin-top: desktop-vw(88px);

        @media ($tablet-portrait) {
            font-size: tablet-vw(40px);
            margin-bottom: tablet-vw(56px);
            margin-top: tablet-vw(64px);
            max-width: tablet-vw(520px);
        }

        @media ($phone) {
            font-size: phone-vw(28px);
            margin-bottom: phone-vw(56px);
            margin-top: phone-vw(64px);
            max-width: phone-vw(744px);
        }
    }

    p {
        margin-top: vw(24px);
        @media ($tablet-portrait) {
            max-width: vw(584px);
        }

        @media ($phone) {
            
            max-width: phone-vw(744px);
        }
    }
}
</style>
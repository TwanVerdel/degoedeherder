<template>
    <main class="page">
        <h1>{{title}}</h1>
        <p class="text" v-html="text" />
    </main>
</template>

<script>
import PCIData from "@/datalayers/PCI.js";

export default {
    computed: {
        title() {
            return this.PCIcontent.pcis[0].title;
        },
        text() {
            return this.PCIcontent.pcis[0].text.html;
        }
    },

    async asyncData(ctx) {
        const PCIcontent = await PCIData(ctx);

        return {
            PCIcontent
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
    margin-top: vw(112px);

    ::v-deep .text > p {
        margin-bottom: vw(24px);
    }

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
        @include Outer;
        margin-bottom: vw(48px);
        word-wrap: break-word;
        width: 100%;
    }
}
</style>
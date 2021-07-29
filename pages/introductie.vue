<template>
    <main class="page">
        <div class="header">
            <h1>
                Introduction to the
                <br />parish of Emmen.
            </h1>
        </div>
        <div class="banner">
            <img src="https://picsum.photos/1000" alt="placeholder" />
        </div>
        <div class="grid">
            <introduction-text-block :hasButton="true" />
            <introduction-text-block :hasButton="true" />
            <introduction-text-block :hasButton="false" />
            <introduction-text-block :hasButton="false" />
        </div>
    </main>
</template>

<script>
import IntroductionTextBlock from "../components/IntroductionTextBlock";

export default {
    components: { IntroductionTextBlock }
};
</script>

<style lang="scss" scoped>
.page {
    @include Outer(112px, 112px);
    display: flex;
    flex-direction: column;
    width: 100%;

     @media($tablet-portrait) {
        height: auto;
        padding-top: vw(88px);
        padding-bottom: vw(88px);
        // margin-top: vw(72px);
    }

    @media($phone) {
        padding-top: vw(56px);
        padding-bottom: vw(72px);
    }

    .header {
        text-align: center;
        margin-bottom: vw(96px);
        margin-top: vw(64px);
    }

    .banner {
        position: relative;
        height: vw(368px);
        margin-bottom: vw(80px);

        img {
            position: absolute;
            left: calc(var(--outer) * -1);
            width: 100vw;
            max-height: vw(368px);
            object-fit: cover;
        }
    }

    .grid {
        display: grid;
        gap: vw(32px);
        grid-template-columns: 1fr 1fr;
        width: 100%;

        @media ($phone) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
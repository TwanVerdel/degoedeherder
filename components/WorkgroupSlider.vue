<template>
    <section class="container">
        <h1>Werkgroepen voor Diakonie.</h1>
        <carousel>
            <div
                class="slide"
                v-for="(e, index) in 6"
                :key="`container-${index}`"
            >
                <img src="https://picsum.photos/1000" />

                <div class="text-container">
                    <h2>Ouderenzorg | Erica</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin facilisis lectus sed nisi iaculis auctor. Donec eu
                        nibh rhoncus, pulvinar massa eget, gravida purus. Aenean
                        lobortis sem ex, vel fermentum eros egestas quis.
                    </p>

                    <span>Aanmelden</span>
                    <a href="mailto:bram@swebble.com"> bram@swebble.com </a>
                </div>
            </div>
        </carousel>
    </section>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
    components: {
        Carousel,
    },
};
</script>

<style lang="scss" scoped>
.container {
    padding: vw(64px) 0;

    h1 {
        @include Outer;
        margin-bottom: vw(40px);
        text-align: center;
        font-size: vw(48px);

        @media ($tablet-portrait) {
            font-size: vw(40px);
        }

        @media ($phone) {
            font-size: vw(32px);
            margin-bottom: vw(24px);
        }
    }

    .slide {
        width: 100%;
        background: $white;
        box-shadow: 0 0 vw(16px) rgba($black, 0.2);

        @media ($tablet-portrait) {
            min-width: vw(440px);
        }

        @media ($phone) {
            min-width: vw(288px);
        }

        img {
            width: 100%;
            height: vw(240px);
            object-fit: cover;

            @media ($phone) {
                height: vw(200px);
            }
        }

        .text-container {
            display: flex;
            flex-direction: column;
            padding: vw(40px);
            padding-bottom: vw(48px);

            @media ($tablet-portrait) {
                padding: vw(32px);
            }

            @media ($phone) {
                padding: vw(24px);
                padding-bottom: vw(40px);
            }

            h2 {
                font-weight: bold;
                font-size: vw(28px);
                line-height: 150%;
            }

            span {
                display: block;
                font-size: vw(14px);
                font-weight: bold;
                opacity: 0.6;
                line-height: 150%;
            }

            p {
                margin-top: vw(16px);
                margin-bottom: vw(16px);
            }

            a {
                font-weight: bold;
                line-height: 150%;
            }

            > * {
                text-align: center;
            }
        }
    }
}
</style>
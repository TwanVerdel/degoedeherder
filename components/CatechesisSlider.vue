<template>
    <section class="container">
        <h2>Catecheses.</h2>
        <carousel>
            <div
                class="slide"
                v-for="(e, index) in 6"
                :key="`container-${index}`"
            >
                <img src="https://picsum.photos/1000" />

                <div class="text-container">
                    <span>Vanaf 15 april 2021</span>
                    <h3>Kindercatechese</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin facilisis lectus sed nisi iaculis auctor. Donec eu
                        nibh rhoncus, pulvinar massa eget, gravida purus.
                    </p>

                    <span> Aanmelden/contact </span>

                    <a href="mailto:bram@swebble.com"> bram@swebble.com </a>
                </div>
            </div>
        </carousel>
    </section>
</template>

<script>
    import Carousel from './Carousel.vue'
    export default {
        components: { 
            Carousel 
        },
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: vw(64px) 0;

        h2 {
            @include Outer;
            margin-bottom: vw(24px);

            @media($tablet-portrait) {
                margin-bottom: vw(8px);
            }

            @media($phone) {
                margin-bottom: 0;
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

                h3 {
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
                    text-align: left;
                    margin-top: vw(16px);
                    margin-bottom: vw(16px);
                }

                a {
                    font-weight: bold;
                    line-height: 150%;
                }
            }
        }
    }
</style>
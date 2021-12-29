<template>
    <section class="article-page">
        <h1>{{title}}</h1>

        <article>
            <img
                class="banner-image"
                :src="imageSrc"
                alt="Header afbeelding voor een blog van de Goede Herder Parochie"
            />

            <!-- TODO plaatjes centreren -->
            <div class="content" v-html="text" />
        </article>

        <div v-if="showFooter" class="pre-footer">
            <h2>Nog meer artikelen ontdekken?</h2>

            <div class="btn-row">
                <a class="btn" href="/nieuws">Meer nieuws</a>

                <a class="scd" href="/blogs">Blogs lezen</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        imageSrc: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        showFooter:{
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang="scss" scoped>
.article-page {
    margin: desktop-vw(200px) 0 desktop-vw(160px) 0;

    @media ($tablet-portrait) {
        margin: tablet-vw(144px) 0 tablet-vw(56px) 0;
    }

    @media ($phone) {
        margin: phone-vw(128px) 0 phone-vw(56px) 0;
    }

    h1 {
        max-width: desktop-vw(744px);
        text-align: center;
        font-size: desktop-vw(64px);
        margin: 0 auto 0 auto;

        @media ($tablet-portrait) {
            @include Outer;

            max-width: tablet-vw(560px);
            font-size: tablet-vw(40px);
        }

        @media ($phone) {
            max-width: unset;
            font-size: phone-vw(24px);
        }
    }

    article {
        width: desktop-vw(1000px);
        margin: desktop-vw(104px) auto 0 auto;
        border-radius: desktop-vw(8px);
        overflow: hidden;
        box-shadow: 0 0 desktop-vw(24px) rgba($black, 0.2);

        @media ($tablet-portrait) {
            width: 100vw;
            margin: tablet-vw(64px) auto 0 auto;
            box-shadow: none;
            border-radius: none;
        }

        @media ($phone) {
            margin: phone-vw(40px) auto 0 auto;
        }

        .banner-image {
            width: 100%;
            height: desktop-vw(360px);
            object-fit: cover;

            @media ($tablet-portrait) {
                height: tablet-vw(240px);
            }

            @media ($phone) {
                height: phone-vw(180px);
            }
        }

        .content {
            padding: desktop-vw(104px) desktop-vw(120px) desktop-vw(112px)
                desktop-vw(120px);

            @media ($tablet-portrait) {
                @include Outer(32px, 0px);
                width: 100%;
            }

            h2 {
                font-size: desktop-vw(40px);
                margin-bottom: desktop-vw(24px);

                @media ($tablet-portrait) {
                    font-size: tablet-vw(32px);
                    margin-bottom: tablet-vw(16px);
                }

                @media ($phone) {
                    font-size: phone-vw(24px);
                    margin-bottom: phone-vw(8px);
                }
            }

            h3 {
                font-family: Roboto;
                font-size: desktop-vw(28px);
                margin-bottom: desktop-vw(16px);

                @media ($tablet-portrait) {
                    font-size: tablet-vw(28px);
                    margin-bottom: tablet-vw(8px);
                }

                @media ($phone) {
                    font-size: phone-vw(22px);
                    margin-bottom: phone-vw(8px);
                }
            }

            p {
                margin-bottom: desktop-vw(40px);

                @media ($tablet-portrait) {
                    margin-bottom: tablet-vw(40px);
                }

                @media ($phone) {
                    margin-bottom: phone-vw(40px);
                }
            }

            ::v-deep p {
                margin-bottom: vw(16px);
            }
            
            ::v-deep img {
                height: vw(320px);
                width: 100%;
                object-fit: contain;
                margin: vw(24px) 0;
            }

            > *:last-child {
                margin-bottom: 0;
            }
        }
    }

    .pre-footer {
        width: desktop-vw(1000px);
        margin: desktop-vw(48px) auto 0 auto;
        padding: desktop-vw(80px) desktop-vw(120px);

        background: $tertiary;
        border-radius: desktop-vw(8px);
        box-shadow: 0 0 desktop-vw(24px) rgba($black, 0.2);

        @media ($tablet-portrait) {
            width: calc(100vw - var(--outer) - var(--outer));
            margin: 0 var(--outer);
            margin-top: tablet-vw(64px);

            padding: tablet-vw(64px) tablet-vw(64px);
        }

        @media ($phone) {
            @include Outer(56px);
            width: 100%;
            margin: unset;
            margin-top: phone-vw(48px);
        }

        h2 {
            max-width: desktop-vw(488px);
            font-size: desktop-vw(48px);
            color: $white;

            @media ($tablet-portrait) {
                max-width: tablet-vw(480px);
                font-size: tablet-vw(36px);
            }

            @media ($phone) {
                max-width: 100%;
                text-align: center;
                font-size: phone-vw(24px);
            }
        }

        .btn-row {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: max-content;
            gap: desktop-vw(32px);
            width: max-content;
            place-items: center;
            margin-top: desktop-vw(40px);

            @media ($tablet-portrait) {
                margin-top: tablet-vw(40px);
                gap: tablet-vw(32px);
            }

            @media ($phone) {
                width: 100%;
                margin-top: phone-vw(40px);
                display: grid;

                grid-auto-columns: unset;
                grid-template-columns: 1fr 1fr;

                gap: none;
            }

            a {
                color: $white;
                font-weight: bold;

                &.btn {
                    @media ($phone) {
                        padding: 0;
                        width: 100%;
                    }
                }

                &.scd {
                    opacity: 0.8;
                    transition: opacity 0.2s;

                    &:hover {
                        opacity: 0.4;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
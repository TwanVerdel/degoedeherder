<template>
    <section :class="{ 'showThree' : showThree }">
        <template v-if="showThree">
            <h2>{{title}}</h2>
        </template>
        <template v-else>
            <h1>{{title}}</h1>
        </template>

        <div class="article-container">
            <a
                v-for="(article, index) in allArticle"
                :key="`article-cell-${index}`"
                class="thumbnail"
                :href="type + '/' + article.id"
            >
                <img :src="article.thumbnail.url" alt="Placeholder" />
                <div class="text">
                    <div class="date">{{ getDateString(article.date) }}</div>
                    <h3 class="title">{{article.title}}</h3>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        allArticle() {
            const articles = this.articles || [];
            return this.showThree ? articles.slice(0, 3) : articles;
        }
    },
    methods: {
        getDateString(dateString) {
            var timestamp = Date.parse(dateString);
            var dateObject = new Date(timestamp);
            var month = new Intl.DateTimeFormat("nl-NL", {
                month: "long"
            }).format(dateObject);

            return (
                dateObject.getDate() +
                " " +
                month +
                " " +
                dateObject.getFullYear()
            );
        }
    },
    props: {
        showThree: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "Nieuws vanuit de parochie."
        },
        articles: {
            type: Array,
            default: []
        },
        type: {
            type: String,
            default: "blogs"
        }
    }
};
</script>

<style lang="scss" scoped>
section {
    padding-bottom: desktop-vw(144px);
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

    h2 {
        @include Outer;
        margin-bottom: desktop-vw(48px);
        margin-top: desktop-vw(128px);
        width: desktop-vw(640px);
        box-sizing: content-box;

        @media ($tablet-portrait) {
            margin-bottom: tablet-vw(32px);
            margin-top: tablet-vw(80px);
            width: tablet-vw(480px);
        }

        @media ($phone) {
            margin-bottom: phone-vw(32px);
            margin-top: phone-vw(48px);
            width: phone-vw(280px);
        }
    }

    .article-container {
        @include Outer;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: desktop-vw(24px);
        max-width: 100vw;

        @media ($tablet-portrait) {
            padding: 0;
            grid-template-columns: unset;
            grid-auto-columns: max-content;
            grid-auto-flow: column;
            gap: tablet-vw(24px);

            overflow-x: scroll;
            scroll-snap-type: x mandatory;
        }

        @media ($phone) {
            grid-template-columns: 1fr;
            gap: phone-vw(16px);
        }

        // Slider spacings
        &::before,
        &::after {
            @media ($tablet-portrait) {
                content: "";
                width: calc(var(--outer) - #{tablet-vw(24px)});
            }

            @media ($phone) {
                width: calc(var(--outer) - #{phone-vw(16px)});
            }
        }

        .thumbnail {
            display: inline-block;
            position: relative;
            height: desktop-vw(320px);
            overflow: hidden;
            scroll-snap-align: center;

            @media ($tablet-portrait) {
                width: tablet-vw(480px);
                height: tablet-vw(320px);
            }

            @media ($phone) {
                height: phone-vw(200px);
                width: phone-vw(280px);
            }

            &::before {
                content: "";

                position: absolute;
                z-index: 2;
                display: block;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;

                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.2) 0%,
                    rgba(0, 0, 0, 0.75) 100%
                );
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.2s;
            }

            .text {
                position: absolute;
                color: $white;
                bottom: 0;
                padding: desktop-vw(24px) desktop-vw(32px);
                z-index: 3;

                @media ($tablet-portrait) {
                    padding: tablet-vw(16px) tablet-vw(24px);
                }

                @media ($phone) {
                    padding: phone-vw(16px);
                }

                .date {
                    color: $white;
                    font-weight: 500;
                    font-size: desktop-vw(16px);
                    line-height: 120%;
                    margin-bottom: desktop-vw(8px);
                    opacity: 0.8;
                    width: 100%;

                    @media ($tablet-portrait) {
                        font-size: tablet-vw(16px);
                        margin-bottom: tablet-vw(8px);
                    }

                    @media ($phone) {
                        font-size: phone-vw(12px);
                        margin-bottom: phone-vw(8px);
                    }
                }

                .title {
                    color: $white;
                    font-weight: 700;
                    font-size: desktop-vw(28px);
                    line-height: 140%;
                    width: desktop-vw(368px);
                    font-family: Roboto;

                    @media ($tablet-portrait) {
                        font-size: tablet-vw(24px);
                        width: 90%;
                    }

                    @media ($phone) {
                        font-size: phone-vw(20px);
                    }
                }
            }
        }

        .thumbnail:hover {
            img {
                transform: scale(1.05);
            }
        }
    }
}

// Showing all articles

section:not(.showThree) {
    .article-container {
        @include Outer;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 100vw;
        overflow: hidden;

        @media ($tablet-portrait) {
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: unset;
            gap: tablet-vw(16px);
        }

        @media ($phone) {
            grid-template-columns: 1fr;
            gap: phone-vw(24px);
        }

        &::before,
        &::after {
            content: unset;
        }

        .thumbnail {
            width: auto;

            @media ($tablet-portrait) {
                height: tablet-vw(240px);
            }

            @media ($phone) {
                height: phone-vw(208px);
            }
        }
    }
}
</style>
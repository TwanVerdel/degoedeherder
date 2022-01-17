<template>
    <section class="faq">
        <h2 class="underline">{{ title }}</h2>
        <p class="description" v-if="description !== ''">{{description}}</p>
        <div class="collaps-items">
            <div
                v-for="(question, index) in faqs"
                :key="index"
                class="collaps-item"
                @click="toggle(index)"
            >
                <div class="collaps-item-title">
                    <div v-if="type == 'faq'">
                        <h3>{{ question.question }}</h3>
                    </div>
                    <div v-if="type == 'sacrament'">
                        <h3>{{ question.sacrament }}</h3>
                    </div>

                    <svg
                        :class="{ active: activeIdx === index }"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                            fill="#F4F4F4"
                        />
                    </svg>
                </div>
                <collapse-s-s-r :open="activeIdx === index" :height="'400px'">
                    <div class="collapse" v-if="type == 'faq'">
                        <p class="answer">{{ question.answer }}</p>
                    </div>
                    <div class="collapse" v-if="type == 'sacrament'">
                        <p class="answer" v-html="question.description.html" />
                    </div>
                </collapse-s-s-r>
            </div>
        </div>
    </section>
</template>

<script>
import CollapseSSR from "@/components/CollapseSSR";

export default {
    data: function() {
        return {
            activeIdx: null
        };
    },
    props: {
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false,
            default: ""
        },
        faqs: {
            type: Array,
            default: _ => [
                {
                    question: "Mag ik mijn hond meenemen?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl. "
                },
                {
                    question:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl. "
                },
                {
                    question: "Mag ik mijn hond meenemen?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl."
                }
            ]
        },
        type: {
            type: String,
            default: "faq"
        }
    },
    components: {
        CollapseSSR
    },
    methods: {
        toggle(index) {
            if (this.activeIdx === index) {
                this.activeIdx = false;
                return;
            }
            this.activeIdx = index;
        }
    }
};
</script>

<style lang="scss" scoped>
.faq {
    @include Outer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: desktop-vw(80px);
    padding-bottom: desktop-vw(88px);

    background-color: $secondary;

    .description {
        margin-top: vw(24px);
        max-width: 75%;

        @media ($tablet-portrait) {
            max-width: 80%;
        }

        @media ($phone) {
            max-width: 100%;
        }
    }

    @media ($tablet-portrait) {
        padding-top: tablet-vw(80px);
        padding-bottom: tablet-vw(80px);
    }

    @media ($phone) {
        padding-top: phone-vw(80px);
        padding-bottom: phone-vw(80px);
    }

    .collaps-items {
        margin-top: desktop-vw(88px);

        @media ($tablet-portrait) {
            margin-top: tablet-vw(64px);
        }

        @media ($phone) {
            margin-top: phone-vw(56px);
        }

        .collaps-item {
            display: block;
            padding: desktop-vw(24px) desktop-vw(16px);
            cursor: pointer;

            &:not(:last-of-type) {
                border-bottom: 1px solid rgba($black, 0.4);
            }

            @media ($tablet-portrait) {
                padding: tablet-vw(24px) tablet-vw(16px);
            }

            @media ($phone) {
                padding: phone-vw(24px) phone-vw(16px);
            }

            .collaps-item-title {
                display: flex;
                align-items: center;
                width: 100%;

                h3 {
                    font-size: vw(24px);

                    max-width: vw(800px);
                    line-height: 140%;

                    @media ($tablet-portrait) {
                        font-size: tablet-vw(20px);
                        max-width: 80%;
                    }

                    @media ($phone) {
                        font-size: phone-vw(20px);
                    }
                }

                svg {
                    margin-left: auto;
                    width: desktop-vw(32px);
                    height: desktop-vw(32px);
                    transition: transform 0.2s ease-out;
                    object-fit: contain;
                    background: $black;
                    padding: desktop-vw(4px);
                    border-radius: desktop-vw(32px);
                    transition: transform 0.2s;
                    transform: rotate(180deg);

                    &.active {
                        transform: rotate(0);
                    }

                    @media ($tablet-portrait) {
                        width: tablet-vw(40px);
                        height: tablet-vw(40px);
                        border-radius: tablet-vw(40px);
                        padding: tablet-vw(8px);
                    }

                    @media ($phone) {
                        width: phone-vw(40px);
                        height: phone-vw(40px);
                        border-radius: phone-vw(40px);
                        padding: phone-vw(8px);
                    }
                }
            }

            .collapse {
                display: block;
                width: 100%;
                padding-right: desktop-vw(32px);
                padding-top: desktop-vw(24px);

                @media ($tablet-portrait) {
                    padding-right: tablet-vw(32px);
                    padding-top: tablet-vw(24px);
                }

                @media ($phone) {
                    padding-right: phone-vw(32px);
                    padding-top: phone-vw(24px);
                }

                .answer {
                    opacity: 0.9;
                    max-width: 50%;

                    @media ($tablet-portrait) {
                        max-width: 80%;
                    }

                    @media ($phone) {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
</style>

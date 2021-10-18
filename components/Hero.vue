<template>
    <header class="hero" ref="hero">
        <div class="text-container">
            <h1 v-text="title" />
            <p v-html="paragraph" />
            <div class="btn-row">
                <a v-if="buttonUrl && buttonText"
                    class="btn" 
                    :href="buttonUrl"
                >
                    {{ buttonText }}
                </a>
                <button class="discover" @click="scrollToNext()">
                    Ontdek meer
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0001 4.5H13.0001V16.5L18.5001 11L19.9201 12.42L12.0001 20.34L4.08008 12.42L5.50008 11L11.0001 16.5V4.5Z" fill="#1F2326"/>
                    </svg>
                </button>
            </div>
        </div>
        <picture>
            <img :src="imgUrl" 
                 :alt="imgAlt"
                 loading="lazy"/>
        </picture>
    </header>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            paragraph: {
                type: String,
                default: ''
            },
            buttonText: {
                type: String,
                default: ''
            },
            buttonUrl: {
                type: String,
                default: ''
            },
            discoverMore: {
                type: Boolean,
                default: false
            },
            imgUrl: {
                type: String,
                default: ''
            },
            imgAlt: {
                type: String,
                default: 'Dit is een afbeelding op de site van de Goede Herder Parochie Emmen'
            },
        },
        methods: {
            scrollToNext() {
                var dist = this.$refs.hero.offsetHeight

                window.scrollTo({
                    top: dist,
                    behavior: 'smooth'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero {
        position: relative;
        height: desktop-vw(980px);
        display: flex;
        align-items: center;        

        @media($tablet-portrait) {
            height: auto;
            flex-direction: column-reverse;
            margin-bottom: tablet-vw(32px);
        }

        @media($phone) {
            margin-bottom: phone-vw(32px);
        }

        .text-container {
            @include Left;
            position: absolute;
            z-index: 2;
            width: 50vw;

            @media($tablet-portrait) {
                @include Outer;
                position: static;
                width: 100vw;
                transform: translateY(tablet-vw(-40px));
            }

            @media($phone) {
                transform: translateY(phone-vw(-20px));
            }

            h1 {
                @include fadeUpAnimation(0.4s);
                max-width: desktop-vw(808px);

                @media($tablet-portrait) {
                    max-width: unset;
                }

                @media($phone) {
                    max-width: unset;
                }
            }

            p {
                @include fadeUpAnimation(0.4s, 0.2s);
                margin-top: desktop-vw(40px);
                max-width: desktop-vw(544px);

                @media($tablet-portrait) {
                    max-width: tablet-vw(544px);
                    margin-top: tablet-vw(16px);
                }

                @media($phone) {
                    max-width: unset;
                    margin-top: phone-vw(16px);
                }
            }

            .btn-row {
                @include fadeUpAnimation(0.4s, 0.4s);
                display: grid;
                grid-auto-flow: column;
                grid-auto-rows: max-content;
                width: max-content;
                margin-top: desktop-vw(32px);
                gap: desktop-vw(24px);

                @media($tablet-portrait) {
                    margin-top: tablet-vw(32px);
                    gap: tablet-vw(24px);
                }

                @media($phone) {
                    margin-top: phone-vw(32px);
                    gap: phone-vw(24px);
                }

                .discover {
                    display: grid;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                    place-items: center;
                    font-weight: bold;
                    background: transparent;
                    opacity: 0.8;
                    cursor: pointer;
                    gap: desktop-vw(8px);
                    font-size: desktop-vw(18px);

                    @media($tablet-portrait) {
                        font-size: tablet-vw(18px);
                        gap: tablet-vw(8px);
                    }

                    @media($phone) {
                        font-size: phone-vw(18px);
                        gap: phone-vw(8px);
                    }

                    svg {
                        transition: transform 0.2s;
                        height: desktop-vw(24px);
                        aspect-ratio: 1 / 1;

                        @media($tablet-portrait) {
                            height: tablet-vw(24px);
                        }

                        @media($phone) {
                            height: phone-vw(24px);
                        }
                    }

                    &:hover {
                        svg {
                            transform: translateY(0.4em);
                        }
                    }
                }
            }
        }

        picture {
            position: relative;
            width: 60%;
            height: 100%;
            margin-left: auto;

            @media($tablet-portrait) {
                width: 100%;
                height: tablet-vw(400px);
            }

            @media($phone) {
                height: phone-vw(240px);
            }

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }

            &::before {
                content: '';
                position: absolute;

                left: 0;
                top: 0;

                height: 100%;
                width: 100%;

                background: linear-gradient(180deg, rgba(0, 82, 129, 0.6) -10.23%, rgba(184, 137, 95, 0.2) 89.77%);
            }
        }
    }
</style>
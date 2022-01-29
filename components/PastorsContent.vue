<template>
    <main class="main" ref="main">
        <div class="text-container" ref="textcontainer">
            <h2 class="title">{{title}}</h2>
            <p class="text" v-html="description.html"/>
            <button class="discover" @click="scrollToNext()">
                Ontdek meer
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.0001 4.5H13.0001V16.5L18.5001 11L19.9201 12.42L12.0001 20.34L4.08008 12.42L5.50008 11L11.0001 16.5V4.5Z"
                        fill="#1F2326"
                    />
                </svg>
            </button>
        </div>
        <div class="pastors-container">
            <div class="pastors-content">
                <div class="pastor margin-top">
                    <img :src="leftPastorImage"
                        :height="leftPastorImageHeight" 
                        :width="leftPastorImageWidth" 
                        alt="Pastoor" 
                        v-lazy-load/>
                    <h3>{{leftPastorName}}</h3>
                    <p class="desc">Pastoor</p>
                </div>
                <div class="pastor">
                    <img :src="rightPastorImage" 
                        :height="rightPastorImageHeight" 
                        :width="rightPastorImageWidth" 
                        alt="Pastoor" 
                        v-lazy-load/>
                    <h3>{{rightPastorName}}</h3>
                    <p class="desc">Pastor</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: "De Goede Herder Parochie"
        },
        description:{
            type: Object,
            default: ""
        },
        leftPastorName:{
             type: String,
            default: ""
        },
        leftPastorImage:{
             type: String,
            default: ""
        },
        leftPastorImageHeight:{
            type: Number,
            default: 200
        },
        leftPastorImageWidth:{
            type: Number,
            default: 200
        },

        rightPastorName:{
             type: String,
            default: ""
        },
        rightPastorImage:{
             type: String,
            default: ""
        },
        rightPastorImageHeight:{
            type: Number,
            default: 200
        },
        rightPastorImageWidth:{
            type: Number,
            default: 200
        },
    },
    methods: {
        scrollToNext() {
            var top = this.$refs.textcontainer.offsetTop;
            var dist = this.$refs.textcontainer.offsetHeight;

            window.scrollTo({
                top: dist + top,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    justify-content: left;
    align-items: center;

    @media ($tablet-portrait) {
        flex-direction: column;
    }

    @include Outer(160px, 204px);

    @media ($tablet-portrait) {
        @include Outer(64px, 64px);
        flex-direction: column-reverse;
    }

    @media ($phone) {
        @include Outer(104px, 120px);
    }

    .text-container {
        width: 50%;

        @media ($tablet-portrait) {
            width: 100%;
            margin-top: vw(40px);
        }

        @media ($phone) {
            margin-top: 0;
        }

        .title {
            max-width: vw(480px);

            @media ($tablet-portrait) {
                max-width: vw(400px);
            }

            @media ($phone) {
                max-width: unset;
            }
        }

        .text {
            padding-top: vw(24px);
            padding-bottom: vw(24px);
            max-width: vw(568px);
            word-break: break-all;
            
            @media ($phone) {
                max-width: unset;
            }
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

            @media ($tablet-portrait) {
                font-size: tablet-vw(18px);
                gap: tablet-vw(8px);
            }

            @media ($phone) {
                font-size: phone-vw(18px);
                gap: phone-vw(8px);
            }

            svg {
                transition: transform 0.2s;
                height: desktop-vw(24px);
                aspect-ratio: 1 / 1;

                @media ($tablet-portrait) {
                    height: tablet-vw(24px);
                }

                @media ($phone) {
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

    .pastors-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;

        @media ($phone) {
            width: 100%;
        }

        .pastors-content {
            display: flex;

            @media ($phone) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: vw(16px);
                margin-bottom: vw(56px);
            }

            .pastor {
                display: flex;
                flex-direction: column;
                height: 100%;

                margin: vw(32px);

                @media ($phone) {
                    margin: unset;
                }

                img {
                    width: vw(240px);
                    height: vw(320px);
                    box-shadow: 0 0 vw(16px) rgba($black, 0.2);
                    object-fit: cover;

                    @media ($phone) {
                        width: 100%;
                        height: vw(224px);
                        aspect-ratio: 9 / 12;
                    }
                }

                h3 {
                    font-weight: bold;
                    font-size: vw(28px);
                    padding-top: vw(16px);
                    padding-bottom: vw(4px);
                    padding-left: vw(8px);

                    @media ($phone) {
                        font-size: vw(16px);
                    }
                }

                .desc {
                    font-family: Roboto Slab;
                    font-weight: bold;
                    opacity: 0.6;
                    padding-left: vw(8px);
                    font-size: vw(16px);
                }
            }
            .margin-top {
                margin-top: vw(72px);

                @media ($phone) {
                    margin-top: vw(36px);
                }
            }
        }
    }
}
</style>
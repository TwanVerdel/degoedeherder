<template>
    <section class="church-overview">
        <h1>Ontdek de Emmense kerken.</h1>
        <ul class="church-list">
            <li
                class="church-icon"
                :class="{ selected: index === selectedIndex }"
                v-for="(church, index) in churches"
                :key="`church-${index}`"
                @click="selectChurch(index)"
            >
                <picture v-if="index % 4 === 1">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 2.99805H13V4.99805H15V6.99805H13V10.398L22 13.998V15.998L20 15.198V22.998H14V17.998C14 17.4676 13.7893 16.9589 13.4142 16.5838C13.0391 16.2088 12.5304 15.998 12 15.998C11.4696 15.998 10.9609 16.2088 10.5858 16.5838C10.2107 16.9589 10 17.4676 10 17.998V22.998H4V15.198L2 15.998V13.998L11 10.398V6.99805H9V4.99805H11V2.99805ZM6 20.998H8V15.998L7 14.998L6 15.998V20.998ZM16 20.998H18V15.998L17 14.998L16 15.998V20.998Z"
                            fill="#1F2326"
                        />
                    </svg>
                </picture>
                <picture v-if="index % 4 === 2">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.0001 3.99805L20.0001 9.99805V21.998H15.0001V14.998H9.00012V21.998H4.00012V9.99805L12.0001 3.99805Z"
                            fill="#1F2326"
                        />
                    </svg>
                </picture>
                <picture v-if="index % 4 === 3">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.00012 11.502H4.00012H6.00012H8.00012H10.0001H12.0001H14.0001V8.50195L18.0001 4.50195L22.0001 8.50195V20.502H11.0001V17.502C11.0001 16.9715 10.7894 16.4628 10.4143 16.0877C10.0393 15.7127 9.53056 15.502 9.00012 15.502C8.46969 15.502 7.96098 15.7127 7.58591 16.0877C7.21084 16.4628 7.00012 16.9715 7.00012 17.502V20.502H2.00012V11.502ZM18.0001 8.50195C17.4501 8.50195 17.0001 9.04195 17.0001 9.70195V11.502H19.0001V9.70195C19.0001 9.04195 18.5501 8.50195 18.0001 8.50195Z"
                            fill="#1F2326"
                        />
                    </svg>
                </picture>
                <picture v-if="index % 4 === 0">
                    <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.0001 3.99805L3.00012 9.19805V21.998H9.00012L11.9001 18.998L15.0001 21.998H21.0001V9.19805L12.0001 3.99805ZM7.90012 20.998V14.998L10.9001 17.998L7.90012 20.998ZM8.90012 13.998H14.9001L11.9001 16.998L8.90012 13.998ZM15.9001 20.998L12.9001 17.998L15.9001 14.998V20.998ZM15.0001 11.998H8.80012V9.99805H15.0001V11.998Z"
                            fill="#1F2326"
                        />
                    </svg>
                </picture>

                <span>{{ church.title }}</span>
            </li>
        </ul>

        <div class="church-info">
            <div
                class="church-details"
                :class="{ 'selected' : index === selectedIndex }"
                v-for="(church, index) in churches"
                :key="`church-info-${index}`"
            >
                <img :src="church.image.url" alt="De Goede Herder" v-lazy-load/>
                <div class="text-container">
                    <h2>{{ church.title }}</h2>

                    <div class="church-info-rows">
                        <div v-if="church.address !=null">
                            <div
                                class="name"
                                v-html="'Locatie'"                                    
                            />
                            <div
                                class="value"
                                v-html="church.address.html"
                            />
                        </div>
                        <div v-if="church.openingHours !=null">
                            <div
                                class="name"
                                v-html="'Openingstijden'"                                    
                            />
                            <div
                                class="value"
                                v-html="church.openingHours.html"
                            />
                        </div>
                        <div v-if="church.verger !=null">
                            <div
                                class="name"
                                v-html="'Kosteres'"                                    
                            />
                            <div
                                class="value"
                                v-html="church.verger"
                            />
                        </div>
                        <div v-if="church.secretariat !=null">
                            <div
                                class="name"
                                v-html="'Secretariaat'"                                    
                            />
                            <div
                                class="value"
                                v-html="church.secretariat.html"
                            />
                        </div>
                        <div v-if="church.inauguration !=null">
                            <div
                                class="name"
                                v-html="'Kerkwijding'"                                    
                            />
                            <div
                                class="value"
                                v-html="church.inauguration.html"
                            />
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    props: {
        selectedIndex: {
            type: Number,
            required: true
        },
        churches: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        selectChurch(index) {
            this.$emit("churchSelected", index);
        }
    },
};
</script>

<style lang="scss" scoped>
.church-overview {
    @include Outer(88px, 104px);

    display: flex;
    flex-direction: column;
    align-items: center;
    height: vw(868px);
    margin-top: vw(112px);

    @media ($tablet-portrait) {
        height: auto;
        padding-top: vw(88px);
        padding-bottom: vw(88px);
        margin-top: vw(72px);
    }

    @media ($phone) {
        padding-top: vw(56px);
        padding-bottom: vw(72px);
    }

    h1 {
        text-align: center;
        font-size: vw(48px);
        margin-bottom: vw(48px);

        @media ($tablet-portrait) {
            font-size: vw(32px);
            margin-bottom: vw(64px);
        }

        @media ($phone) {
            width: 100%;
            font-size: vw(28px);
            margin-bottom: vw(48px);
        }
    }

    .church-list {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: vw(394px);

        @media ($phone) {
            width: 100%;
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: vw(4px);
            background: repeating-linear-gradient(
                to right,
                $white,
                $white vw(8px),
                $primary vw(8px),
                $primary vw(16px)
            );
            top: vw(22px);
            z-index: -1;

            @media ($phone) {
                background: repeating-linear-gradient(
                    to right,
                    $white,
                    $white vw(4px),
                    $primary vw(4px),
                    $primary vw(8px)
                );
            }
        }

        .church-icon {
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;

            picture {
                display: flex;
                align-items: center;
                justify-content: center;
                height: vw(48px);
                width: vw(48px);
                border-radius: vw(48px);
                border: vw(4px) solid $primary;
                background: $white;
                transition: background-color 0.2s;

                svg {
                    height: vw(24px);
                    width: vw(24px);

                    path {
                        fill: $black;
                        transition: fill 0.2s;
                    }
                }
            }

            span {
                position: absolute;
                text-align: center;
                top: 100%;

                font-size: vw(14px);
                font-weight: bold;
                opacity: 0.8;
                padding-top: vw(8px);
                word-break: keep-all;
            }

            @media ($phone) {
                span{
                    font-size: vw(10px);
                }
            }
        }

        .church-icon:hover {
            picture {
                background: lighten($primary, 50);
            }
        }

        .church-icon.selected {
            picture {
                background: $primary;

                svg path {
                    fill: $white;
                }
            }
        }
    }

    .church-info {
        position: relative;
        height: vw(400px);
        width: 100%;

        @media ($tablet-portrait) {
            height: auto;
        }

        .church-details {
            position: absolute;
            height: max-content;
            width: 100%;
            top: 0;
            left: 0;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: vw(80px);
            margin-top: vw(112px);

            opacity: 0;
            transform: translateY(vw(32px));
            pointer-events: none;

            transition: opacity 0.4s, transform 0.6s;

            @media ($tablet-portrait) {
                gap: vw(48px);
                margin-top: vw(88px);
            }

            @media ($phone) {
                grid-template-columns: 100%;
                grid-auto-flow: row;
                grid-auto-rows: max-content;
                margin-top: vw(96px);
            }

            &.selected {
                opacity: 1;
                transform: none;
                pointer-events: all;
                position: static;
            }

            img {
                width: 100%;
                height: vw(400px);
                object-fit: cover;
                margin: auto 0;

                box-shadow: 0 0 vw(16px) rgba($black, 0.2);

                background: #666666;

                @media ($phone) {
                    height: vw(200px);
                    margin-bottom: vw(24px);
                }
            }

            .text-container {
                display: flex;
                flex-direction: column;
                margin: auto 0;

                h2 {
                    margin-bottom: vw(24px);
                    font-size: vw(40px);
                    max-width: vw(360px);

                    @media ($tablet-portrait) {
                        font-size: vw(32px);
                        margin-bottom: vw(16px);
                    }

                    @media ($phone) {
                        font-size: vw(28px);
                    }
                }

                .church-info-rows {
                    display: grid;
                    grid-template-rows: max-content 1fr;
                    column-gap: vw(40px);
                    row-gap: vw(16px);

                    .name,
                    .value {
                        font-size: vw(16px);
                        line-height: 140%;
                        word-break: break-all;
                    }

                    .name {
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
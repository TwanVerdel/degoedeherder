<template>
    <section class="history-component">
        <div class="title-wrapper">
            <h2>
                Geschiedenis
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6665 6.66675H43.3332V13.3334H49.9998V20.0001H43.3332V31.3334L73.3332 43.3334V50.0001L66.6665 47.3334V73.3334H46.6665V56.6668C46.6665 54.8986 45.9641 53.2029 44.7139 51.9527C43.4636 50.7025 41.7679 50.0001 39.9998 50.0001C38.2317 50.0001 36.536 50.7025 35.2858 51.9527C34.0356 53.2029 33.3332 54.8986 33.3332 56.6668V73.3334H13.3332V47.3334L6.6665 50.0001V43.3334L36.6665 31.3334V20.0001H29.9998V13.3334H36.6665V6.66675ZM19.9998 66.6668H26.6665V50.0001L23.3332 46.6667L19.9998 50.0001V66.6668ZM53.3332 66.6668H59.9998V50.0001L56.6665 46.6667L53.3332 50.0001V66.6668Z" fill="#1F2326"/>
                </svg>
            </h2>
        </div>
        <article>
            <div class="content-row" 
                v-for="(row, idx) in rows" 
                :key="`history-row-${idx}`"
                :class="{ 'lr' : idx % 2 == 1 }"
            >               
                <img src="https://picsum.photos/800">
                <div class="text-container">
                    <h3>Het onstaan van de kerk.</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies efficitur lacus. 
                        Etiam tincidunt magna diam, porta dignissim sapien suscipit quis. 
                        Vestibulum pharetra finibus dolor, at malesuada mauris varius nec. 
                        Aenean facilisis metus sem, ut luctus lectus imperdiet in. Integer feugiat erat felis.
                    </p>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        computed: {
            rows() {
                return [0,0,0,0,0]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .history-component {
        @include Outer(180px);
        display: grid;
        grid-template-columns: desktop-vw(104px) 1fr;
        gap: desktop-vw(144px);

        @media($tablet-portrait) {
            gap: tablet-vw(32px);
            padding-top: tablet-vw(64px);
            padding-bottom: tablet-vw(64px);
        }

        @media($phone) {
            gap: phone-vw(32px);
            padding-top: phone-vw(64px);
            padding-bottom: phone-vw(64px);
        }


        .title-wrapper {
            position: sticky;
            top: desktop-vw(184px);
            width: desktop-vw(104px);
            display: flex;
            align-items: center;
            justify-content: center;
            height: desktop-vw(704px);
            overflow: hidden;

            @media($tablet-portrait) {
                height: tablet-vw(224px);
                top: tablet-vw(104px);
                width: tablet-vw(32px);
            }

            @media($phone) {
                height: phone-vw(176px);
                top: phone-vw(104px);
                width: phone-vw(24px);
            }

            h2 {
                position: absolute;

                display: grid;
                grid-auto-flow: column;
                grid-auto-rows: max-content;
                gap: desktop-vw(48px);
                width: max-content;
                font-size: desktop-vw(80px);
                place-items: center;
                transform: rotate(-90deg);

                font-weight: normal;
                opacity: 0.8;

                text-transform: uppercase;

                @media($tablet-portrait) {
                    font-size: tablet-vw(24px);
                    gap: tablet-vw(16px);
                }

                @media($phone) {
                    font-size: phone-vw(18px);
                    gap: phone-vw(16px);
                }

                svg {
                    transform: rotate(90deg);
                    height: desktop-vw(80px);
                    width: desktop-vw(80px);

                    @media($tablet-portrait) {
                        height: tablet-vw(32px);
                        width: tablet-vw(32px);
                    }

                    @media($phone) {
                        height: phone-vw(24px);
                        width: phone-vw(24px);
                    }
                }
            }
        }

        article {
            display: grid;
            grid-auto-rows: desktop-vw(400px);
            gap: desktop-vw(56px);
            
                            

            @media($tablet-portrait) {
                gap: tablet-vw(48px);
                grid-auto-rows: max-content;
                grid-auto-flow: row;
            }

            @media($phone) {
                gap: phone-vw(48px);
            }

            .content-row:not(.lr) {
                img {
                    margin: 0 desktop-vw(36px) 0 0;

                    @media($tablet-portrait) {
                        margin: 0;
                    }
                }

                .text-container {
                    margin: 0 0 0 desktop-vw(36px);

                    @media($tablet-portrait) {
                        margin: 0;
                    }
                }
            }

            .content-row.lr {
                flex-direction: row-reverse;

                @media($tablet-portrait) {
                    flex-direction: column;
                }

                img {
                    margin: 0 0 0 desktop-vw(36px);

                    @media($tablet-portrait) {
                        margin: 0;
                    }
                }

                .text-container {
                    margin: 0 desktop-vw(36px) 0 0;

                    @media($tablet-portrait) {
                        margin: 0;
                    }
                }
            }


            .content-row {
                display: flex;

                @media($tablet-portrait) {
                    flex-direction: column;
                }

                img {
                    width: 50%;
                    height: desktop-vw(400px);
                    object-fit: cover;

                    @media($tablet-portrait) {
                        width: 100%;
                        height: tablet-vw(240px);
                    }

                    @media($phone) {
                        height: phone-vw(160px);
                    }
                }

                .text-container {
                    width: 50%;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: desktop-vw(24px) desktop-vw(40px) desktop-vw(64px) desktop-vw(40px);

                    @media($tablet-portrait) {
                        width: 100%;
                        padding: tablet-vw(24px) 0 0 0;
                    }

                    @media($phone) {
                        padding: phone-vw(24px) 0 0 0;
                    }

                    p {
                        margin-top: desktop-vw(24px);

                        @media($tablet-portrait) {
                            margin-top: tablet-vw(16px);
                        }

                        @media($phone) {
                            margin-top: phone-vw(16px);
                        }
                    }
                }
            }

            
        }
    }
</style>
<template>
    <main class="main">
        <div class="text-container">
            <h2 class="title">De Goede Herder Parochie in Emmen</h2>
            <p
                class="text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor sit amet nibh egestas vehicula. Morbi id nibh id lorem tristique bibendum. Donec vel lectus placerat, efficitur neque ut, efficitur nisl.</p>

            <div class="discover-container">
                <p>Ontdek meer</p>
                <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.00008 0.5H9.00008V12.5L14.5001 7L15.9201 8.42L8.00008 16.34L0.0800781 8.42L1.50008 7L7.00008 12.5V0.5Z"
                        fill="#1F2326"
                        fill-opacity="0.8"
                    />
                </svg>
            </div>
        </div>
        <div class="pastors-container">
            <div class="pastors-content">
                <div class="pastor margin-top">
                    <img src="https://picsum.photos/1000" alt="Pastoor" />
                    <h3>P. Stiekema</h3>
                    <p class="desc">Pastoor</p>
                </div>
                <div class="pastor">
                    <img src="https://picsum.photos/1000" alt="Pastoor" />
                    <h3>P. Stiekema</h3>
                    <p class="desc">Pastoor</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {};
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
        @include Outer(104px, 152px);
    }

    @media ($phone) {
        @include Outer(104px, 120px);
    }

    .text-container {
        width: 50%;

        @media ($tablet-portrait) {
            width: 100%;
        }

        .title {
            max-width: vw(480px);

            @media ($tablet-portrait) {
                max-width: unset;
            }
        }

        .text {
            padding-top: vw(24px);
            padding-bottom: vw(24px);
            max-width: vw(568px);

            @media ($tablet-portrait) {
                max-width: unset;
            }
        }

        .discover-container {
            display: flex;
            align-items: center;

            font-weight: bold;
            font-size: vw(18px);

            p {
                margin-right: vw(8px);
            }

            svg {
                width: vw(16px);
                height: vw(16px);
            }
        }
    }

    .pastors-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;

        @media ($tablet-portrait) {
            width: 100%;
        }

        .pastors-content {
            display: flex;

            @media ($phone) {
                flex-direction: column;
            }

            .pastor {
                display: flex;
                flex-direction: column;
                height: 100%;

                margin: vw(32px);

                img {
                    width: vw(240px);
                    height: vw(320px);
                    box-shadow: 0 0 vw(16px) rgba($black, 0.2);
                }

                h3 {
                    font-weight: bold;
                    font-size: vw(28px);
                    padding-top: vw(16px);
                    padding-bottom: vw(4px);
                    padding-left: vw(8px);
                }

                .desc {
                    font-weight: bold;
                    font-size: 16px;
                    opacity: 0.6;
                    padding-left: vw(8px);
                }
            }
            .margin-top {
                margin-top: vw(72px);
            }
        }
    }
}
</style>
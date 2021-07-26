<template>
    <div class="thumbnail">
        <div class="gradient">
            <img src="../assets/images/placeholder-img.png" alt="Placeholder" />
            <div class="text">
                <div class="date">15 december 2021</div>
                <div class="title">Dit zijn de werkgroepen voor het jaar 2022</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            props: {
                date: {
                    type: String,
                    default: ""
                },
                title: {
                    type: String,
                    default: ""
                }
            }
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.thumbnail {
    display: inline-block;
    position: relative;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.72) 0%,
        rgba(0, 0, 0, 0.5158438375350141) 100%
    );

    img {
        position: relative;
        z-index: -1;
        display: block;

        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }

    @media ($phone) {
        width: 100%;
    }

    .text {
        position: absolute;
        color: $white;
        bottom: 0;
        padding: 16px;

        .date {
            color: $white;
            font-weight: 500;
            font-size: desktop-vw(20px);
            line-height: 120%;
            margin-bottom: 8px;
            opacity: 0.8;

            @media ($tablet-portrait) {
                font-size: tablet-vw(64px);
            }

            @media ($phone) {
                font-size: phone-vw(28px);
            }
        }

        .title {
            color: $white;
            font-weight: 700;
            font-size: desktop-vw(28px);
            line-height: 140%;

            

            @media ($tablet-portrait) {
                font-size: tablet-vw(64px);
            }

            @media ($phone) {
                font-size: phone-vw(28px);
            }
        }
    }
}
</style>
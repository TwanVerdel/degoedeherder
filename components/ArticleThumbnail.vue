<template>
    <div class="thumbnail">
        <img src="../assets/images/placeholder-img.png" alt="Placeholder" />
        <div class="text">
            <div class="date">{{date}}</div>
            <div class="title">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        date: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        }
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
    max-height: desktop-vw(320px);

    @media ($tablet-portrait) {
        width: 100%;
        max-height: phone-vw(320px);
    }

    @media ($phone) {
        width: 100%;
        max-height: tablet-vw(320px);
    }

    img {
        position: relative;
        z-index: -1;
        display: block;

        width: 100%;
        height: auto;
        object-fit: cover;

        // 
    }

    .text {
        position: absolute;
        color: $white;
        bottom: 0;
        padding: 16px;
        max-height: 75%;
        overflow: hidden;

        .date {
            color: $white;
            font-weight: 500;
            font-size: desktop-vw(20px);
            line-height: 120%;
            margin-bottom: desktop-vw(8px);
            opacity: 0.8;

            @media ($tablet-portrait) {
                font-size: tablet-vw(24px);
                margin-bottom: tablet-vw(8px);
            }

            @media ($phone) {
                font-size: phone-vw(16px);
                margin-bottom: phone-vw(8px);
            }
        }

        .title {
            color: $white;
            font-weight: 700;
            font-size: desktop-vw(28px);
            line-height: 140%;

            @media ($tablet-portrait) {
                font-size: tablet-vw(24px);
            }

            @media ($phone) {
                font-size: phone-vw(28px);
            }
        }
    }
}
</style>
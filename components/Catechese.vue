<template>
    <div class="container">
        <img :src="imgPath" alt="Placeholder" />
        <div class="text">
            <div class="dateText">{{dateText}}</div>
            <div class="title">{{title}}</div>
            <div class="description">{{description}}</div>
            <div class="contact-header">Aanmelden/contact</div>
            <div class="contact-text">{{contact}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: "https://picsum.photos/1000"
        },
        dateText: {
            type: String,
            default: "Vanaf 15 april 2021"
        },
        title: {
            type: String,
            default: "Kindercatechese"
        },
        description: {
            type: String,
            default:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis lectus sed nisi iaculis auctor. Donec eu nibh rhoncus, pulvinar massa eget, gravida purus."
        },
        contact: {
            type: String,
            default: "bram@swebble.com"
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    height: vw(600px);
    width: vw(496px);

    margin: 0 0 desktop-vw(80px) 0;

    box-shadow: 0 0 vw(16px) rgba($black, 0.2);
    flex-grow: 5;

    img {
        width: 100%;
        height: vw(240px);
        object-fit: cover;
    }

    .text {

        padding: vw(40px);

        .dateText {
            font-weight: bold;
            opacity: 0.6;
            line-height: 150%;
            font-size: vw(14px);
        }

        .title {
            font-weight: bold;
            font-size: vw(28px);
            line-height: 150%;
            margin-bottom: vw(16px);
        }

        .description {
            font-size: vw(18px);
            line-height: 150%;
            margin-bottom: vw(16px);
        }

        .contact-header {
            opacity: 0.6;
            font-weight: bold;
            font-size: vw(14px);
            line-height: 150%;
        }

        .contact-text {
            font-weight: bold;
            font-size: vw(18px);
            line-height: 150%;
        }
    }
}
</style>
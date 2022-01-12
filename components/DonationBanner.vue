<!-- Html -->

<template>
    <section class="donation-banner">
        <h2>{{title}}</h2>
        <p v-html="description" />
        <a :href="buttonURL" target="_blank">
            <button v-if="hasButton" class="btn">{{buttonText}}</button>
        </a>
    </section>
</template>

<!-- JavaScript -->

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Kerkbijdrage"
        },
        description: {
            type: String,
            default: "Iets over de kerkbijdrage"
        },
        hasButton: {
            type: Boolean,
            default: true
        },
        buttonText: {
            type: String,
            default: "Doneren"
        },
        buttonURL:{
            type: String,
            default: ""
        }
    }
};
</script>

<!-- Scss -->

<style lang="scss" scoped>
.donation-banner {
    @include Outer;
    display: flex;
    flex-direction: column;
    align-items: center;

    /*Variables*/
    background: $secondary;
    width: 100%;

    /*Padding*/
    padding-top: desktop-vw(80px);
    padding-bottom: desktop-vw(72px);

    @media ($tablet-portrait) {
        padding-top: tablet-vw(80px);
        padding-bottom: tablet-vw(72px);
    }

    @media ($phone) {
        padding-top: phone-vw(80px);
        padding-bottom: phone-vw(72px);
    }

    p {
        text-align: center;

        /*Margin + Width*/
        margin-top: desktop-vw(24px);
        margin-bottom: desktop-vw(32px);
        max-width: desktop-vw(664px);

        @media ($tablet-portrait) {
            margin-top: tablet-vw(24px);
            margin-bottom: tablet-vw(32px);
            max-width: tablet-vw(664px);            
        }

        @media ($phone) {
            margin-top: phone-vw(24px);
            margin-bottom: phone-vw(32px);
            max-width: phone-vw(664px);
            word-break: break-all;
            
        }
    }
}
</style>
<!-- Html -->

<template>
    <section class="alternate-content">
        <div class="container">
            <h2>{{title}}</h2>
            <p v-html="description"/>
            <button class="btn">
                <a v-if="openInNewTab == true"  target="_blank" :href="buttonURL" >{{buttonText}}</a>
                <a v-else  :href="buttonURL">{{buttonText}}</a>
            </button>
        </div>
        <!-- Er moet hier een plaatje -->
        <div class="container image">
            <img
                :src="image"
                :width="imageWidth"
                :height="imageHeight"
                alt="Detailfoto De Goede Herder"
                v-lazy-load
            />
        </div>
    </section>
</template>

<!-- JavaScript -->

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Nieuws vanuit de parochie."
        },
        description: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default:
                "assets/images/01 detailfoto Maria, OLV Onbevlekt Ontvangen.jpg"
        },
        imageHeight: {
            type: Number,
            default: 200
        },
        imageWidth: {
            type: Number,
            default: 200
        },

        buttonText: {
            type: String,
            default: ""
        },
        buttonURL: {
            type: String,
            default: ""
        },

        openInNewTab:{
            type: Boolean,
            default: true
        }
    }
};
</script>

<!-- Scss -->

<style lang="scss" scoped>
.alternate-content {
    @include Outer(152px);

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media ($tablet-portrait) {
        padding-top: vw(104px);
        padding-bottom: vw(104px);

        gap: vw(48px);
    }

    @media ($phone) {
        grid-template-areas:
            "top"
            "bottom";
        grid-template-columns: 100%;
        grid-template-rows: max-content max-content;
        gap: vw(24px);
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;

        ::v-deep p {
                margin-bottom: vw(32px);
            }

        h2 {
            @media ($phone) {
                margin-top: phone-vw(24px);
                max-width: phone-vw(664px);
            }
        }

        p {
            text-align: left;
            margin-top: vw(24px);
            margin-bottom: vw(40px);
            max-width: vw(664px);
        }

        img {
            display: block;
            margin: auto;

            height: vw(320px);
            width: vw(480px);
            object-fit: cover;

            @media ($tablet-portrait) {
                width: 100%;
                height: vw(240px);
            }
        }

        a,
        a:visited,
        a:hover,
        a:active {
            color: white;
        }
    }

    .container.image {
        @media ($phone) {
            grid-area: top;
        }
    }
}
</style>
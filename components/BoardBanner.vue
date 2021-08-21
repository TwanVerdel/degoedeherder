<!-- Html -->

<template>
    <section class="board-banner">
        <div class="info-container">
            <h2>Ontdek het geloof</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies efficitur lacus. Etiam tincidunt magna diam, porta dignissim sapien suscipit quis. Vestibulum pharetra finibus dolor, at malesuada mauris varius nec. Aenean facilisis metus sem, ut luctus lectus imperdiet in. Integer feugiat erat felis.</p>
        </div>

        <div v-if="hasMembers" class="member-container">
            <div class="members">
                <img src="~assets/images/double-quote.svg" alt="Quote" />
                <div v-for="member in members" :key="member" class="boxed">{{member}}</div>
            </div>
        </div>
        <div v-if="!hasMembers" class="member-container">
            <img src="~assets/images/double-quote.svg" alt="Quote" />
            <div class="text">
                <p>
                    <span>{{text}}</span>
                </p>
            </div>
        </div>
    </section>
</template>

<!-- JavaScript -->

<script>
export default {
    props: {
        hasMembers: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis lectus sed nisi iaculis auctor. Donec eu nibh rhoncus. "
        }
    },
    data() {
        return {
            members: [
                "J. Brans",
                "B. Gerrits",
                "T. Verdel",
                "J. Brans",
                "B. Gerrits"
            ]
        };
    }
};
</script>

<!-- Scss -->

<style lang="scss" scoped>
.board-banner {
    @include Outer;
    display: flex;
    flex-direction: row;

    @media ($tablet-portrait) {
        flex-direction: column;
    }

    /*Variables*/
    background: $tertiary;
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
        text-align: left;

        /*Margin + Width*/
        margin-top: desktop-vw(24px);
        margin-bottom: desktop-vw(32px);
        max-width: desktop-vw(664px);

        @media ($tablet-portrait) {
            text-align: center;

            margin-top: tablet-vw(24px);
            margin-bottom: tablet-vw(32px);
            max-width: tablet-vw(664px);
        }

        @media ($phone) {
            margin-top: phone-vw(24px);
            margin-bottom: phone-vw(32px);
            max-width: phone-vw(664px);
        }
    }

    .info-container {
        width: 50%;

        @media ($tablet-portrait) {
            width: 100%;
        }

        p,
        h2 {
            color: $white;

            @media ($tablet-portrait) {
                text-align: center;
            }
        }
    }

    .member-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;

        width: 50%;
        flex-wrap: wrap;
        padding-left: 5%;
        padding-right: 5%;

        @media ($tablet-portrait) {
            width: 100%;
            padding-left: 0%;
            padding-right: 0%;
        }

        .members {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: vw(300px);
        }

        img {
            display: flex;
            width: vw(16px);
            height: vw(16px);
        }

        .boxed {
            background-color: $white;
            padding: vw(8px);
            height: min-content;
            margin: vw(4px);

            min-width: min-content;

            font-style: italic;

            p {
                font-weight: 400px;
                font-size: vw(24px);
            }
        }

        .text {
            p {
                margin-bottom: vw(8px);
                text-align: center;
            }

            p span {
                background-color: $white;
                padding: 0 vw(8px);
            }
        }
    }
}
</style>
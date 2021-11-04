<template>
    <main>
        <section class="costs-list">
            <div class="content">
                <h2>{{financeInfo.headerRateGroups}}</h2>
                <p>{{financeInfo.description}}</p>
                <p v-html="financeInfo.explanationPrayerIntention.html" />
            </div>
            <div
                class="costs-description"
                v-for="(rate, index) in churchRates"
                :key="`costs-${index}`"
            >
                <h3>Tariefgroep {{rate.rateGroup}}</h3>

                <p>{{rate.description}}</p>

                <h4>Tarieven algemeen</h4>

                <ul class="costs">
                    <li class="cost">
                        <span>Huwelijk:</span>
                        <span>{{rate.marriageCosts}}</span>
                    </li>
                    <li class="cost">
                        <span>Doop:</span>
                        <span>{{rate.baptismCosts}}</span>
                    </li>
                    <li class="cost">
                        <span>Gebedsintentie:</span>
                        <span>{{rate.prayerIntentionCosts}}</span>
                    </li>
                </ul>

                <h4>Tarieven uitvaart</h4>

                <ul class="costs">
                    <li class="cost">
                        <span>Gebedsdienst in aula/crematorium:</span>
                        <span>{{rate.prayerServiceCosts}}</span>
                    </li>
                    <li class="cost">
                        <span>Uitvaartliturgie in parochiekerk:</span>
                        <span>{{rate.funeralLiturgyCosts}}</span>
                    </li>
                    <li class="cost">
                        <span>Liturgie in crematorium na kerkdienst:</span>
                        <span>{{rate.crematoriumLiturgyCosts}}</span>
                    </li>
                </ul>
            </div>

            <div
                v-for="(rate, index) in churchRates"
                :key="`costs-mobile-${index}`"
                class="costs-description mobile"
                :class="{ 'selected' : index === selected }"
            >
                <h3>Tariefgroep {{rate.rateGroup}}</h3>

                <p>{{rate.description}}</p>

                <collapse-ssr :open="selected === index" class="collapse-container">
                    <h4>Tarieven algemeen</h4>

                    <ul class="costs">
                        <li class="cost">
                            <span>Huwelijk:</span>
                            <span>{{rate.marriageCosts}}</span>
                        </li>
                        <li class="cost">
                            <span>Doop:</span>
                            <span>{{rate.baptismCosts}}</span>
                        </li>
                        <li class="cost">
                            <span>Gebedsintentie:</span>
                            <span>{{rate.prayerIntentionCosts}}</span>
                        </li>
                    </ul>

                    <h4>Tarieven uitvaart</h4>

                    <ul class="costs">
                        <li class="cost">
                            <span>Gebedsdienst in aula/crematorium:</span>
                            <span>{{rate.prayerServiceCosts}}</span>
                        </li>
                        <li class="cost">
                            <span>Uitvaartliturgie in parochiekerk:</span>
                            <span>{{rate.funeralLiturgyCosts}}</span>
                        </li>
                        <li class="cost">
                            <span>Liturgie in crematorium na kerkdienst:</span>
                            <span>{{rate.crematoriumLiturgyCosts}}</span>
                        </li>
                    </ul>
                </collapse-ssr>

                <svg
                    class="open-icon"
                    @click="open(index)"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                        fill="#F4F4F4"
                    />
                </svg>
            </div>
        </section>
        
    </main>
</template>

<script>
import CollapseSSR from "./CollapseSSR.vue";

export default {
    components: {
        CollapseSSR
    },

    data() {
        return {
            selected: 1
        };
    },
    props: {
        churchRates: {
            type: Array,
            default: []
        },
        financeInfo: {
            type: Object,
            default: {}
        }
    },
    computed: {
        costs() {
            return [0, 0, 0];
        }
    },
    methods: {
        open(index) {
            if (this.selected === index) {
                this.selected = undefined;
            } else {
                this.selected = index;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.costs-list {
    @include Outer(144px);
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: vw(32px);
    place-items: center;
    // width: 100%;

    @media ($tablet-portrait) {
        padding-top: vw(120px);
        padding-bottom: vw(120px);
        grid-auto-flow: row;
        grid-auto-rows: max-content;
    }

    .content {
        p {
            max-width: vw(320px);
            margin-top: vw(24px);
        }

        ::v-deep p{
            max-width: vw(320px);
            margin-top: vw(24px);
        }
    }

    

    .costs-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;
        background: $secondary;
        border-radius: vw(16px);
        padding: vw(48px);
        padding-bottom: vw(72px);

        @media ($tablet-portrait) {
            max-width: vw(360px);
        }

        h3 {
            font-size: vw(28px);
            text-align: center;
            margin-bottom: vw(24px);
        }

        h4 {
            font-size: vw(14px);
            font-family: roboto;
            opacity: 0.5;
            margin-bottom: vw(8px);

            &:not(:first-of-type) {
                margin-top: vw(40px);
            }
        }

        p {
            width: 100%;
            text-align: center;
            font-size: vw(14px);
            font-weight: bold;
            opacity: 0.8;
            margin-bottom: vw(48px);
        }

        .costs {
            display: grid;
            grid-auto-flow: row;
            grid-auto-rows: max-content;
            gap: vw(16px);
            width: 100%;

            .cost {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    font-weight: bold;
                }
            }
        }

        .collapse-container {
            width: 100%;
        }
    }

    .costs-description.mobile {
        min-height: vw(200px);

        display: none;

        @media ($tablet-portrait) {
            display: flex;
        }

        .open-icon {
            position: absolute;
            height: vw(40px);
            width: vw(40px);
            padding: vw(8px);
            border-radius: vw(40px);
            background: $tertiary;

            // left: 50%;
            bottom: vw(16px);
            transition: transform 0.2s;
            transform-origin: center;
        }
    }

    .costs-description.mobile.selected {
        .open-icon {
            transform: rotate(180deg);
        }
    }

    .costs-description:not(.mobile) {
        display: block;

        @media ($tablet-portrait) {
            display: none;
        }
    }
}

</style>
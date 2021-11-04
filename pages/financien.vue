<template>
    <main class="page">
        <anbi-badge />
        <section>
            <finances-list :churchRates="rateGroups" :financeInfo="financeInfo" />
        </section>
        <section>
            <collapsable-wysiwyg>
                <h3>{{financeInfo.graveyardHeader}}</h3>
            <p v-html="financeInfo.graveyardRateInfo.html" />
            </collapsable-wysiwyg>
            <collapsable-wysiwyg>
                <h2>{{churchContributions.title}}</h2>

                <p v-html="churchContributions.text.html" />
            </collapsable-wysiwyg>
            <collapsable-wysiwyg>
                <h2>{{financialStatements.title}}</h2>

                <p v-html="financialStatements.text.html" />
                <div
                    class="statements"
                    v-for="(statement, index) in financialStatements.financialStatements"
                    :key="`statement-${index}`"
                >
                    <a :href="statement.url">{{statement.fileName}}</a>
                </div>
            </collapsable-wysiwyg>
            <collapsable-wysiwyg>
                <h2>{{donatingInfo.title}}</h2>

                <p v-html="donatingInfo.text.html" />
            </collapsable-wysiwyg>
        </section>
    </main>
</template>

<script>
import FinancesData from "@/datalayers/finances.js";

import FinancesList from "../components/FinancesList.vue";
import CollapsableWYSIWYG from "../components/CollapsableWYSIWYG.vue";
import ANBIBadge from "../components/ANBIBadge.vue";

export default {
    components: {
        FinancesList,
        CollapsableWYSIWYG,
        ANBIBadge
    },
    computed: {
        rateGroups() {
            console.log(typeof this.financesData.churchRates);
            return this.financesData.churchRates;
        },
        financeInfo() {
            return this.financesData.financePages?.[0];
        },
        churchContributions() {
            return this.financesData.churchContributions?.[0];
        },
        financialStatements() {
            return this.financesData.aNBI_FinancialStatements?.[0];
        },
        donatingInfo(){
            return this.financesData.donatingInfoTexts?.[0];
        }
    },
    async asyncData(ctx) {
        const financesData = await FinancesData(ctx);

        return {
            financesData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;

    .statements {
        a,
        a:visited,
        a:hover,
        a:active {
            font-weight: bold;
        }
    }
}
</style>
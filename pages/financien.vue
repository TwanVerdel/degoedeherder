<template>
    <main class="page">
        <section>
            <finances-list :churchRates="rateGroups" :financeInfo="financeInfo" />
        </section>
    </main>
</template>

<script>
import FinancesData from "@/datalayers/finances.js";

import FinancesList from "../components/FinancesList.vue";

export default {
    components: {
        FinancesList
    },
    computed:{
        rateGroups(){
            console.log(typeof this.financesData.churchRates)
            return this.financesData.churchRates
        },
        financeInfo(){
            console.log(this.financesData.financespages?.[0])
            return this.financesData.financePages?.[0]
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
}
</style>
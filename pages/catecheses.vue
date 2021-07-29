<template>
    <main class="page">
        <h2>Catecheses.</h2>
        <div class="slider">
            <div v-for="slide in catecheses" :key="slide">
                <catechese />
            </div>
            
            <!-- Hier kunnen de buttons komen -->
            <div class="btn-left"></div>
            <div class="btn-right"></div>
        </div>
    </main>
</template>

<script>
import Catechese from "../components/Catechese.vue";

export default {
    components: {
        Catechese
    },
    data() {
        return {
            catecheses: [
                {
                    title: "Catechese 1",
                    date: "27 juli 2021"
                },
                {
                    title: "Catechese 2",
                    date: "27 juli 2021"
                },
                {
                    title: "Catechese 3",
                    date: "27 juli 2021"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;

    margin-top: vw(112px);
    min-height: vw(808px);
    @include Outer;

    h2 {
        margin-top: vw(64px);
        margin-bottom: vw(64px);
    }

    .slider {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        // gap: vw(32px);

        .btn-left{

        }

        .btn-right{}
    }
}
</style>
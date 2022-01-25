<template>
    <main class="page">
        <workgroup-slider :workgroups="workgroupsContent" />
    </main>
</template>

<script>
import WorkgroupData from "@/datalayers/workgroups.js";

import WorkgroupSlider from "../components/WorkgroupSlider.vue";

export default {
    components: {
        WorkgroupSlider
    },
    computed:{
        workgroupsContent(){
            return this.workgroups.workgroups;
        }
    },

    async asyncData(ctx) {
        const workgroups = await WorkgroupData(ctx);

        return {
            workgroups
        };
    }
};
</script>

<style lang="scss" scoped>
.page{
    min-height: 100vh;
    margin-top: vw(112px);

    @media($tablet-portrait) {
        margin-top: vw(72px);
    }
}
</style>
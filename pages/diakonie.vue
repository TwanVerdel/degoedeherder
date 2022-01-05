<template>
    <main>
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
</style>
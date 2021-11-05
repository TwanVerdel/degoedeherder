<template>
    <main>
        <hero
            :title="'Vindplaats voor het christelijk geloof.'"
            :paragraph="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis lectus sed nisi iaculis auctor. Donec eu nibh rhoncus, pulvinar massa eget, gravida purus. Aenean lobortis sem ex, vel fermentum eros egestas quis. '"
            :buttonUrl="'https://nu.nl'"
            :buttonText="'Meld je aan'"
            :discoverMore="true"
            :imgUrl="'/images/beeld.png'"
            :imgAlt="'Mooi beeld'"
        /><workgroup-slider :workgroups="workgroupsContent" />
    </main>
</template>

<script>
import WorkgroupData from "@/datalayers/workgroups.js";

import WorkgroupSlider from "../components/WorkgroupSlider.vue";

export default {
    components: {
        WorkgroupSlider
    },
    layout: "hero",
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
<template>
    <main class="page">
        <!-- TODO Titel van de pagina misschien veranderen? -->

        <!-- 2.01 Liturgisch rooster -->
        <alternate-content
            :title="title"
            :description="description"
            :buttonText="buttonText"
            :buttonURL="schedule"
            :image="image"
        />

        <!-- 2.02 Gerardus- en Mariaprocessie -->
        <CollapsableWYSIWYG>
            <h2>{{procession.title}}</h2>
            <p v-html="procession.text.html"/>
        </CollapsableWYSIWYG>
    </main>
</template>

<script>
import ScheduleData from "@/datalayers/schedule.js";

import CollapsableWYSIWYG from "../../components/CollapsableWYSIWYG.vue";

export default {
    components: {
        CollapsableWYSIWYG
    },
    computed:{
        title(){
            return this.scheduleData.activitiesSchedules[0]?.title
        },
        description(){
            return this.scheduleData.activitiesSchedules[0]?.description?.html
        },
        schedule(){
            return this.scheduleData.activitiesSchedules[0]?.schedule?.url
        },
        buttonText(){
            return this.scheduleData.activitiesSchedules[0]?.buttonText
        },
        image(){
            return this.scheduleData.activitiesSchedules[0]?.image?.url
        },
        procession(){
            return this.scheduleData.processions?.[0]
        }

    },

    async asyncData(ctx) {
        const scheduleData = await ScheduleData(ctx);

        return {
            scheduleData
        };
    }
};
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
}
</style>
<template>
    <main class="page">
        <!-- TODO Titel van de pagina misschien veranderen? -->

        <!-- TODO 2.01 Liturgisch rooster -->
        <alternate-content
            :title="title"
            :description="description"
            :buttonText="buttonText"
            :buttonURL="schedule"
            :image="image"
        />

        <!-- TODO 2.02 Gerardus- en Mariaprocessie -->
    </main>
</template>

<script>
import ScheduleData from "@/datalayers/schedule.js";

export default {
    components: {},
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
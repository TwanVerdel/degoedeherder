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
        />
        <workgroup-slider />
    </main>
</template>

<script>
    import WorkgroupSlider from '../components/WorkgroupSlider.vue';

    export default {
        components: {
            WorkgroupSlider,
        },
        layout: 'hero',
    };
</script>

<style lang="scss" scoped>

</style>
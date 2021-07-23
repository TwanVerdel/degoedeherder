<template>
    <main class="page">
        <hero 
            :title="'Vindplaats voor het christelijk geloof.'"
            :paragraph="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis lectus sed nisi iaculis auctor. Donec eu nibh rhoncus, pulvinar massa eget, gravida purus. Aenean lobortis sem ex, vel fermentum eros egestas quis. '"
            :buttonUrl="'https://nu.nl'"
            :buttonText="'Meld je aan'"
            :discoverMore="true"
            :imgUrl="'/images/beeld.png'"
            :imgAlt="'Mooi beeld'"
        />

        <donation-banner/>
        <alternate-content/>
    </main>
</template>

<script>
import DonationBanner from '../components/DonationBanner.vue'
    import Hero from '../components/Hero.vue'

    export default {
        components: {
            Hero,
                DonationBanner
        },
    }
</script>

<style lang="scss" scoped>
    .page {
        min-height: 100vh;
    }
</style>
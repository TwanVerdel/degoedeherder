<template>
    <div class="page">
        <main-navigation :neverTransparent="true"/>
        <Nuxt/>
        <main-footer/>
        <post-footer />
    </div>
</template>

<script>
    import MainFooter from "../components/MainFooter.vue";
    import MainNavigation from '../components/MainNavigation.vue';
    import PostFooter from '../components/PostFooter.vue';

    export default{
        components: { 
            MainFooter,
            PostFooter,
            MainNavigation,
        }, 
    }
</script>

<style lang="scss">
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .page {
        margin-top: vw(112px);
    }
</style>
<template>
    <div class="page">
        <main-navigation :neverTransparent="true"/>
        <Nuxt/>
        <main-footer/>
        <post-footer />
    </div>
</template>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NEWPZTLRD6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NEWPZTLRD6');
</script>

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
</style>

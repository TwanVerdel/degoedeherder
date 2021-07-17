<template>
    <nav class="nav" 
        :class="{ 
            'scrolledPast' : scroll < 64,
            'scrolledUp' : scroll < 64 || scrolledUp
        }">
        <ul></ul>
        <a class="logo" href="/">
            Plaats hier uw logo test test
        </a>

        <nuxt-link class="language-select" 
                   v-text="'NL'"
                   to="/" />
    </nav>
</template>

<script>
    export default {
        name: 'MainNavigation',
        data() {
            return {
                scroll: 0,
                scrolledUp: false
            }
        },
        mounted() {
            window.onscroll = () => {
                var scroll = window.scrollY

                this.scrolledUp = scroll < this.scroll
                this.scroll = scroll
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav {
        @include Outer;

        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        position: fixed;
        top: 0;
        z-index: 4;
        height: desktop-vw(80px);
        width: 100%;
        place-items: center;        
        background: rgba($black, 0.6);
        transition: background-color 0.2s, transform 0.2s;

        @media($tablet-portrait){         
            height: tablet-vw(88px);
        }

        @media($phone){
            height: phone-vw(88px);
        }

        &.scrolledPast {
            background: transparent;
        }

        &:not(.scrolledUp) {
            transform: translateY(-100%);
        }

        a.logo {
            cursor: pointer;
            height: desktop-vw(32px);
            transition: opacity 0.2s;

            @media($tablet-portrait) {
                height: tablet-vw(32px);
            }

            @media($phone){
                height: phone-vw(32px);
            }

            &:hover {
                opacity: 0.6;
            }

            img {
                height: desktop-vw(32px);
                transform: translateY(5%);
                width: auto;
                margin: auto;

                @media($tablet-portrait) {
                    height: tablet-vw(32px);
                }

                @media($phone){
                    height: phone-vw(32px);
                }
            }
        }

        .language-select {
            color: $white;
            text-transform: uppercase;

            margin-left: auto;
            font-size: desktop-vw(18px);
            font-weight: bold;

            transition: opacity 0.2s;

            @media($tablet-portrait) {
                font-size: tablet-vw(20px);
            }

            @media($phone) {
                font-size: phone-vw(20px);
            }

            &:hover {
                opacity: 0.6;
            }
        }
    }
</style>
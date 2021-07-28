<template>
    <div class="post-footer">
        <button class="button" @click="scrollToTop"> Terug naar boven </button>
    </div>
</template>

<script>
    export default {
        name: 'PostFooter',
        methods: {
            scrollToTop() {
                window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth'
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .post-footer {
        display: flex;
        height: vw(40px);
        background: $black;

        button {
            margin: auto;

            font-size: vw(16px);
            line-height: 150%;
            background: transparent;
            color: $white;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(vw(-8px))
            }
        }
    }
</style>
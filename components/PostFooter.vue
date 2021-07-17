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
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        background: linear-gradient(180deg, rgba(0,0,0,2) 0%, rgba(0,0,0,0.4) 100%), 
                    linear-gradient(90deg, rgba(180,122,35,1) 0%, rgba(27,134,168,1) 50%, rgba(160,20,130,1) 100%);

        &::before {
            content: '';
            position: absolute;
            top: 0px;
            height: calc(100% - #{desktop-vw(4px)});
            width: 100%;
            background: transparent;

            @media($tablet-portrait) {
                height: calc(100% - #{phone-vw(4px)});
            }
        }

        button.button {
            margin: 0 auto;
            height: 100%;
            text-align: center;
            color: white;
            z-index: 2;
            padding-bottom: desktop-vw(24px);
            font-size: desktop-vw(16px);
            background: transparent;
            transition: transform 0.2s;
            cursor: pointer;

            @media($tablet-portrait) {
                padding-bottom: tablet-vw(24px);
                font-size: tablet-vw(16px);
            }

            @media($phone) {
                padding-bottom: phone-vw(24px);
                font-size: phone-vw(16px);
            }

            &:hover {
                transform: translateY(-4px);
            }
        }
    }
</style>
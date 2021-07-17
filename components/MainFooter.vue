<template>
    <div class="footer">
        <div class="list type-1">
            <a class="logo-link clickable" href=".">
                <!-- <img class="logo" src="@/assets/images/logo-white.svg" alt="Custom Rigs" height="32" width="164"/> -->
            </a>
            
            <div class="socials">
                <!-- <a class="social clickable" href="https://nl-nl.facebook.com/">
                    <img src="@/assets/images/facebook.svg" alt="Facebook" height="24" width="24"/>
                </a>
                <a class="social clickable" href="https://twitter.com/?lang=nl">
                    <img src="@/assets/images/twitter.svg" alt="Facebook" height="24" width="24"/>
                </a>
                <a class="social clickable" href="https://www.youtube.com/?gl=NL">
                    <img src="@/assets/images/youtube.svg" alt="Facebook" height="24" width="24"/>
                </a>
                <a class="social clickable" href="https://discord.com/">
                    <img src="@/assets/images/discord.svg" alt="Facebook" height="24" width="24"/>
                </a> -->
            </div>
        </div>
        <div class="list type-1">
            <div class="option-list">
                <a href="mailto:support@swebble.com" class="item clickable"> support@swebble.com </a>
                <a href="tel:+0631325365" class="item clickable"> 0631325365 </a>
                <span class="item"> KVK: 12345678 </span>
                <span class="item"> Custom Rigs {{ new Date().getFullYear() }} &#169;</span>
            </div>
            <div class="option-list">
                <a href="https://nl.trustpilot.com/" class="item clickable"> Bekijken op trustpilot </a>
                <a href="https://swebble.com" class="item clickable"> Website by Swebble </a>
            </div>
        </div>

        <div class="CTA">
            <p>
                Neem contact op!
            </p>
            <button class="btn white-border" 
                    v-text="'verzenden'"
                    @click="buttonClick()"/>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            buttonClick() {
                this.$nuxt.$emit('showForm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        @include Outer(88px, 64px);
        display: grid;
        grid-template-columns: auto auto 1fr;
        gap: desktop-vw(136px);
        background: #000000;

        @media($tablet-portrait) {
            @include Outer(88px);
            grid-template-columns: 1fr;
            gap: phone-vw(48px);
        }

        @media($phone) {
            grid-template-columns: 1fr;
        }

        .list {
            &.type-1 {
                display: grid;
                grid-template-rows: 1fr auto;
                min-height: desktop-vw(240px);

                @media($tablet-portrait) {
                    min-height: unset;
                    gap: tablet-vw(40px);
                }

                @media($phone) {
                    min-height: unset;
                    gap: phone-vw(40px);
                }
            }

            >*, a {
                color: white;
            }

            .clickable {
                cursor: pointer;
                transition: opacity 0.2s;

                &:hover {
                    opacity: 0.5;
                }
            }

            .option-list {
                display: grid;
                grid-auto-rows: min-content;
                gap: desktop-vw(8px);

                @media($tablet-portrait){
                    gap: tablet-vw(8px);
                }

                @media($phone){
                    gap: phone-vw(8px);
                }
            }

            .socials{
                display: grid;
                gap: desktop-vw(16px);
                grid-auto-flow: column;
                grid-auto-columns: min-content;

                @media ($tablet-portrait) {
                    gap: tablet-vw(16px);
                }

                @media ($phone) {
                    gap: phone-vw(16px);
                }

                a.social {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: auto;
                    height: auto;

                    img {
                        width: desktop-vw(24px);
                        height: desktop-vw(24px);

                        @media ($tablet-portrait) {
                            width: tablet-vw(24px);
                            height: tablet-vw(24px);
                        }

                        @media ($phone) {
                            width: phone-vw(24px);
                            height: phone-vw(24px);
                        }
                    }
                }
            }

            .logo-link {
                height: auto;
                width: max-content;
                margin-bottom: auto;

                .logo {
                    height: desktop-vw(32px);
                    width: auto;

                    @media ($tablet-portrait) {
                        height: tablet-vw(40px);
                    }

                    @media ($phone) {
                        height: phone-vw(40px);
                    }
                }
            }
        }

        .CTA {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin-left: auto;

            @media($tablet-portrait) {
                margin-left: unset;
            }

            p {
                max-width: desktop-vw(360px);
                text-align: right;
                color: $white;
                margin-bottom: desktop-vw(32px);
                
                @media($tablet-portrait) {
                    margin-bottom: tablet-vw(32px);
                    max-width: tablet-vw(440px);
                    text-align: left;
                }

                @media($phone) {
                    max-width: phone-vw(320px);
                    margin-bottom: phone-vw(32px);
                }
            }

            .btn {
                margin-left: auto;

                @media($tablet-portrait) {
                    margin-left: unset;
                }
            }
        }
    }
</style>
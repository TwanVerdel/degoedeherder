<template>
    <section class="menu" 
            :class="{ 'open' : isOpen }">
        <div class="close-btn" @click="close()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" fill="#F4F4F4"/>
            </svg>
        </div>
        <h2>
            Algemeen
        </h2>

        <ul class="main">
            <li>
                <a href="/parochie">Parochie</a>
            </li>
            <li>
                <a href="/kerken">Kerken</a>
            </li>
            <li>
                <a href="/blogs">Blogs</a>
            </li>
            <li>
                <a href="/nieuws">Nieuws</a>
            </li>
            <li>
                <a href="/vieringen">Vieringen</a>
            </li>
        </ul>


        <ul class="other">
            <li>
                <a href="/gedragscode">Gedragscode</a>
            </li>
            <li>
                <a href="/pci">PCI</a>
            </li>
            <li>
                <a href="/diakonie">Diakonie</a>
            </li>
            <li>
                <a href="/catechese">Catechese</a>
            </li>
            <li>
                <a href="/financien">Financiën</a>
            </li>
            <li>
                <a href="/faq">FAQ</a>
            </li>
        </ul>

        <ul class="languages">
            <li>
                <a href="/parishinfo/arabic" dir="ltr" class="arabic">عربى</a>
            </li>
            <li>
                <a href="/parishinfo/francais">Français</a>
            </li>
            <li>
                <a href="/parishinfo/english">English</a>
            </li>
            <li>
                <a href="/parishinfo/polska">Polska</a>
            </li>
            <li>
                    <a href="/parishinfo/ukrainian">український</a>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
            }
        },
        methods: {
            open() {
                this.isOpen = true
            },
            close() {
                this.isOpen = false

                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background: $tertiary;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;

        display: flex;
        flex-direction: column;

        &.open {
            @media($tablet-portrait) {
                opacity: 1;
                pointer-events: all;
            }
        }

        .close-btn {
            position: absolute;
            left: var(--outer);
            top: tablet-vw(24px);
            height: tablet-vw(24px);
            background: transparent;

            @media($phone) {
                left: phone-vw(24px);
                top: phone-vw(24px);
                height: phone-vw(24px);
            }

            svg {
                height: tablet-vw(24px);
                aspect-ratio: 1 / 1;

                @media($phone) {
                    height: phone-vw(24px);
                }
            }
        }

        h2 {
            margin-top: tablet-vw(120px);
            text-align: center;
            color: $white;
            font-size: tablet-vw(28px);

            @media($phone) {
                margin-top: phone-vw(120px);
                font-size: phone-vw(28px);
            }
        }

        ul {
            list-style: none;
            opacity: 0.8;
        }

        .main {
            display: grid;
            grid-auto-flow: row;
            grid-auto-rows: max-content;
            gap: tablet-vw(4px);
            place-items: center;
            margin-top: tablet-vw(16px);

            @media($phone) {
                gap: phone-vw(4px);
                margin-top: phone-vw(16px);
            }

            a {
                font-size: tablet-vw(20px);
                line-height: 150%;
                color: $white;

                @media($phone) {
                    font-size: phone-vw(20px);
                }
            }
        }

        .other {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            max-width: tablet-vw(240px);
            margin: auto auto 0 auto; 

            @media($phone) {
                max-width: phone-vw(240px);
            }

            li {
                margin: tablet-vw(4px) tablet-vw(6px);

                @media($phone) {
                    margin: phone-vw(6px);
                }

                a {
                    font-size: tablet-vw(12px);
                    color: $white;

                    @media($phone) {
                        font-size: phone-vw(12px);
                    }
                }
            }
        }

        .languages {
            display: grid;
            grid-auto-flow: column;
            grid-auto-rows: max-content;
            gap: tablet-vw(24px);
            width: max-content;
            margin: tablet-vw(24px) auto tablet-vw(16px) auto;
            
            @media($phone) {
                gap: phone-vw(24px);
                margin: phone-vw(24px) auto phone-vw(16px) auto;
            }

            a {
                font-size: tablet-vw(12px);
                color: $white;

                @media($phone) {
                    font-size: phone-vw(12px);
                }
            }
        }
    }
</style>
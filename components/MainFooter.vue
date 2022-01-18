<template>
    <footer>
        <a href="/" class="logo">
            <img src="../assets/images/logo.svg" 
                alt="Logo" />
        </a>
        <div class="lists-container">
            <div class="list">
                <ul aria-label="Initiatieven">
                    <li class="heading">
                        Initiatieven
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
                </ul>
            </div>
            <div class="list">
                <ul aria-label="Overige informatie">
                    <li class="heading">
                        Overig
                    </li>
                    <li>
                        <a href="/gedragscode">Gedragscode</a>
                    </li>
                    <li>
                        <a href="/financien">Financiën</a>
                    </li>
                    <li>
                        <a href="/faq">FAQ</a>
                    </li>
                </ul>
            </div>
            <div class="list">
                <ul aria-label="De parochie">
                    <li class="heading">
                        De parochie
                    </li>
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
                        <a href="/vieringen">Vieringen</a> <!--Veranderd naar vieringen, aangezien dit beter past bij de inhoud -->
                    </li>
                </ul>
            </div>
            <div class="list">
                <ul aria-label="Introductie">
                    <li class="heading">
                        Introductie
                    </li>
                    <li>
                        <a class="arabic" href="/parishinfo/arabic">عربى</a>
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
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        buttonClick() {
            this.$nuxt.$emit("showForm");
        }
    }
};
</script>

<style lang="scss" scoped>
footer {
    @include Outer(88px, 64px);
    display: flex;
    flex-direction: column;
    background: #000000;

    @media ($tablet-portrait) {
        padding-top: vw(88px);
        padding-bottom: vw(64px);
    }

    .logo {
        margin-bottom: vw(40px);
        width: max-content;
        transition: opacity 0.2s;

        @media ($tablet-portrait) {
            margin-bottom: vw(48px);
        }

        @media ($phone) {
            margin-bottom: vw(64px);
        }

        &:hover {
            opacity: 0.6;
        }

        img {
            height: vw(48px);
        }
    }

    .lists-container {
        display: grid;
        width: max-content;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
        gap: vw(40px);

        @media ($tablet-portrait) {
            width: 100%;
            row-gap: vw(24px);
        }

        @media ($phone) {
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: row;
        }

        .list {
            color: $white;
            margin-bottom: 32px;

            ul {
                li {
                    list-style-type: none;
                    font-size: vw(16px);
                    line-height: 150%;

                    font-size: vw(16px);
                    margin-bottom: vw(8px);
                    opacity: 0.8;
                    transition: opacity 0.2s;

                    &:last-child {
                        margin-bottom: none;
                    }

                    &.heading {
                        margin-bottom: vw(16px);
                        font-size: vw(18px);
                        color: $white;
                        font-weight: bold;
                        opacity: 1;
                    }

                    &:not(.heading) {
                        &:hover {
                            opacity: 0.4;
                        }
                    }

                    a {
                        color: $white;
                    }
                }

            }


        }
    }
}
</style>
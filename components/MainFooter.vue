<template>
    <footer>
        <div class="logo">
            <img src="../assets/images/logo.svg" alt="Logo" />
        </div>
        <div class="lists-container">
            <div class="list">
                <ul aria-label="Initiatieven">
                    <li>
                        <a href="#">PCI</a>
                    </li>
                    <li>
                        <a href="#">Diakonie</a>
                    </li>
                    <li>
                        <a href="#">Catecheses</a>
                    </li>
                </ul>
            </div>
            <div class="list">
                <ul aria-label="Overige informatie">
                    <li>
                        <a href="#">Gedragscode</a>
                    </li>
                    <li>
                        <a href="#">Financiën</a>
                    </li>
                </ul>
            </div>
            <div class="list">
                <ul aria-label="De parochie">
                    <li>
                        <a href="#">Over ons</a>
                    </li>
                    <li>
                        <a href="#">Kerken</a>
                    </li>
                    <li>
                        <a href="#">Blogs</a>
                    </li>
                    <li>
                        <a href="#">Nieuws</a>
                    </li>
                    <li>
                        <a href="#">Evenementen</a>
                    </li>
                </ul>
            </div>
            <div class="list">
                <ul aria-label="Introductie">
                    <li>
                        <a href="#">عربى</a>
                    </li>
                    <li>
                        <a href="#">Français</a>
                    </li>
                    <li>
                        <a href="#">English</a>
                    </li>
                    <li>
                        <a href="#">Polska</a>
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

    .logo {
        height: desktop-vw(32px);
        margin-bottom: 40px;
        width: auto;

        @media ($tablet-portrait) {
            height: tablet-vw(40px);
        }

        @media ($phone) {
            height: phone-vw(40px);
        }
    }

    .lists-container {
        display: grid;
        width: 50%;
        // justify-content: space-between;
        // flex-wrap: wrap;
        grid-template-columns: repeat(4, minmax(min-content, max-content));
        column-gap: 40px;

        @media ($tablet-portrait) {
            width: 100%;
        }

        @media ($phone) {
            width: 100%;
            grid-template-columns: repeat(2, minmax(min-content, 1fr));

            // justify-content: flex-start;
        }

        .list {
            color: $white;
            margin-bottom: 32px;

            ul:before {
                content: attr(aria-label);
                font-weight: bold;
                width: 25%;                
            }

            li {
                list-style-type: none;
                margin-top: 8px;
            }
        }
    }
}
</style>
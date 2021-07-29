<!-- Html -->

<template>
    <section class="alternate-content">
        <div class="container">
            <h2>De parochie agenda</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies efficitur lacus. Etiam tincidunt magna diam, porta dignissim sapien suscipit quis. Vestibulum pharetra finibus dolor, at malesuada mauris varius nec. Aenean facilisis metus sem, ut luctus lectus imperdiet in. Integer feugiat erat felis.</p>
            <button class="btn">Agenda bekijken</button>
        </div>
        <!-- Er moet hier een plaatje -->
        <div class="container">
            <picture>
                <img
                    src="~/assets/images/01 detailfoto Maria, OLV Onbevlekt Ontvangen.jpg"
                    alt="Detailfoto Maria"
                    loading="lazy"
                />
            </picture>
        </div>
    </section>
</template>

<!-- JavaScript -->

<script>
</script>

<!-- Scss -->

<style lang="scss" scoped>
.alternate-content {
    @include Outer;

    display: flex;

    @media ($tablet-portrait) {
        flex-direction: column;
    }

    @media ($phone) {
        flex-direction: column;
    }

    .container {
        width: 50%;

        img {
            display: block;
            margin: auto;
            max-width: 100%;
        }

        @media ($tablet-portrait) {
            margin-top: vw(24px);
            width: 100%;
        }

        @media ($phone) {
            margin-top: vw(24px);
            width: 100%;
        }
    }

    /*Padding*/
    padding-top: vw(152px);
    padding-bottom: vw(152px);

    @media ($tablet-portrait) {
        padding-top: vw(152px);
        padding-bottom: vw(152px);
    }

    @media ($phone) {
        padding-top: vw(152px);
        padding-bottom: vw(152px);
    }

    h2 {
        /*Margin + Width*/
        margin-top: desktop-vw(24px);
        max-width: desktop-vw(
            664px
        ); /* Anders komt de titel over het plaatje te staan?*/

        @media ($tablet-portrait) {
            margin-top: tablet-vw(24px);
            max-width: tablet-vw(664px);
        }

        @media ($phone) {
            margin-top: phone-vw(24px);
            max-width: phone-vw(664px);
        }
    }

    p {
        text-align: left;

        /*Margin + Width*/
        margin-top: vw(24px);
        margin-bottom: vw(40px);
        max-width: vw(664px);

        @media ($tablet-portrait) {
            margin-top: vw(24px);
            margin-bottom: vw(40px);
            max-width: vw(664px);
        }

        @media ($phone) {
            margin-top: vw(24px);
            margin-bottom: vw(40px);
            max-width: vw(664px);
        }
    }
}
</style>
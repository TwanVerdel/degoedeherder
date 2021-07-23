<!-- Html -->

<template>
  <section class="alternate-content">
      <h2>De parochie agenda</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies efficitur lacus. Etiam tincidunt magna diam, porta dignissim sapien suscipit quis. Vestibulum pharetra finibus dolor, at malesuada mauris varius nec. Aenean facilisis metus sem, ut luctus lectus imperdiet in. Integer feugiat erat felis.</p>
      <button class="btn">Agenda bekijken</button>
      <!-- Er moet hier een plaatje -->
      <picture>
          
      </picture>
  </section>
</template>

<!-- JavaScript -->

<script>
export default {

}
</script>

<!-- Scss -->

<style lang="scss" scoped>
    .alternate-content{
        @include Outer;

        /*Variables*/
        background: $white;
        width: 100%;

        /*Padding*/
        padding-top: desktop-vw(152px);
        padding-bottom: desktop-vw(152px);

        @media($tablet-portrait){
            padding-top: tablet-vw(152px);
            padding-bottom: tablet-vw(152px);
        }

        @media($phone){
            padding-top: phone-vw(152px);
            padding-bottom: phone-vw(152px);
        }

        h2{
            /*Margin + Width*/
            margin-top: desktop-vw(24px);
            max-width: desktop-vw(664px); /* Anders komt de titel over het plaatje te staan?*/

            @media($tablet-portrait){
                margin-top: tablet-vw(24px);
                max-width: tablet-vw(664px);
            }

            @media($phone){
                margin-top: phone-vw(24px);
                max-width: phone-vw(664px);
            }
        }

        p{
            text-align: left;

            /*Margin + Width*/
            margin-top: desktop-vw(24px);
            margin-bottom: desktop-vw(40px);
            max-width: desktop-vw(664px);

            @media($tablet-portrait){
                margin-top: tablet-vw(24px);
                margin-bottom: tablet-vw(40px);
                max-width: tablet-vw(664px);
            }

            @media($phone){
                margin-top: phone-vw(24px);
                margin-bottom: phone-vw(40px);
                max-width: phone-vw(664px);
            }
        }
    }
</style>
<!-- Html -->

<template>
  <section class="donation-banner">
      <h2>Kerkbijdrage</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies efficitur lacus. Etiam tincidunt magna diam, porta dignissim sapien suscipit quis. Vestibulum pharetra finibus dolor, at malesuada mauris varius nec. Aenean facilisis metus sem, ut luctus lectus imperdiet in. Integer feugiat erat felis.</p>
      <button class="btn">Nu doneren</button>
  </section>
</template>

<!-- JavaScript -->

<script>
export default {

}
</script>

<!-- Scss -->

<style lang="scss" scoped>
    .donation-banner{
        @include Outer;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: $secondary;
        width: 100%;
        padding-top: desktop-vw(80px);
        padding-bottom: desktop-vw(72px);

        @media($tablet-portrait){
            padding-top: tablet-vw(80px);
            padding-bottom: tablet-vw(72px);
        }

        @media($phone){
            padding-top: phone-vw(80px);
            padding-bottom: phone-vw(72px);
        }
        
        p{
            margin-top: desktop-vw(24px);
            margin-bottom: desktop-vw(32px);
            max-width: desktop-vw(664px);
            text-align: center;

            @media($tablet-portrait){
                margin-top: tablet-vw(24px);
                margin-bottom: tablet-vw(32px);
                max-width: tablet-vw(664px);
            }

            @media($phone){
                margin-top: phone-vw(24px);
                margin-bottom: phone-vw(32px);
                max-width: phone-vw(664px);
            }
        }
    }
</style>
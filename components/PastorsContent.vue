<template>
  <section class="pastors-content">
    <h2>De Goede Herder Parochie in Emmen</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies
      efficitur lacus. Etiam tincidunt magna diam, porta dignissim sapien
      suscipit quis. Vestibulum pharetra finibus dolor, at malesuada mauris
      varius nec. Aenean facilisis metus sem, ut luctus lectus imperdiet in.
      Integer feugiat erat felis.
    </p>
    <button class="discover" @click="scrollToNext()">
      Ontdek meer
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0001 4.5H13.0001V16.5L18.5001 11L19.9201 12.42L12.0001 20.34L4.08008 12.42L5.50008 11L11.0001 16.5V4.5Z"
          fill="#1F2326"
        />
      </svg>
    </button>
    <picture>
      <img
        src="~/assets/images/01 detailfoto Maria, OLV Onbevlekt Ontvangen.jpg"
        alt="Detailfoto Maria"
        loading="lazy"
      />
    </picture>

    <picture>
      <img
        src="~/assets/images/01 detailfoto Maria, OLV Onbevlekt Ontvangen.jpg"
        alt="Detailfoto Maria"
        loading="lazy"
      />
    </picture>
  </section>
</template>

<script>
export default {
    methods: {
            scrollToNext() {
                var dist = this.$refs.hero.offsetHeight

                window.scrollTo({
                    top: dist,
                    behavior: 'smooth'
                });
            }
        }
};
</script>

<style lang="scss" scoped>
.discover {
                    display: grid;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                    place-items: center;
                    font-weight: bold;
                    background: transparent;
                    opacity: 0.8;
                    cursor: pointer;
                    gap: desktop-vw(8px);
                    font-size: desktop-vw(18px);

                    @media($tablet-portrait) {
                        font-size: tablet-vw(18px);
                        gap: tablet-vw(8px);
                    }

                    @media($phone) {
                        font-size: phone-vw(18px);
                        gap: phone-vw(8px);
                    }
}
</style>
<template>
  <section class="homepage">
    <div class="left">
      <div class="img">
        <img src="img/teeloni.png" alt="Teeloni">
      </div>
      <div class="text">
        <hr>
        <p class="bold">
          Experience <br>
          <span class="sub-header">The Pride and Joy of Giving The Perfect Gift</span>
        </p>
        <p class="regular">
          Enjoy a stress free, time-saving and
           bespoke approach to giving gifts that
            WOW the recipient and gives you the feeling
             of joy and satisfaction.
        </p>
        <nuxt-link to="/experience" class="homepage-btn">
          Show Me How
        </nuxt-link>
      </div>
    </div>
    <div class="right">
      <Socials/>
      <div class="img">
        <img src="img/rack.png" alt="Rack">
      </div>
    </div>
  </section>
</template>

<script>
import Socials from '~/components/Socials.vue'

export default {
  layout: 'app',
  components: {
    Socials
  },
  mounted() {
    const nav = document.querySelector('.main-nav');
    nav.classList.remove('text-primary');
  }
}
</script>

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
      <div class="icons">
        <div class="search">
          <i class="fas fa-search"></i>
        </div>
        <div class="social">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
      <div class="img">
        <img src="img/rack.png" alt="Rack">
      </div>
      <div class="message">
        <img src="img/msg.jpg" alt="message icon">
        <p>Talk to us</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'app',
  mounted() {
    const nav = document.querySelector('.main-nav');
    nav.classList.remove('text-primary');
  }
}
</script>

<template>
  <section class="experience">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="text">
        <p class="title">
        Experience Us
        </p>
        <p>Welcome to the beautiful world of Thoughtful Gifting.</p>
        <p>We are on a mission to help you build, strengthen
         and restore your relationships through the art of thoughtful expressions.</p>
        <p>We do this by helping you give unique and quality gifts that are 
        beautifully packaged and show your recipient that you care enough to give them a WOW experience!</p>
        <p>For 10 years- we have helped to build a community of thoughtful 
        gift givers- and we invite you to be one!</p>
        <p>Become a gifting hero/superstar- not only because you give the perfect
         gift, but also because you create joyful and happy memories for your recipient.</p>
      </div>
      <div class="links">
          <nuxt-link to="/how-it-works" class="link" tag="div">
              <div class="icon">
                  <i class="fas fa-cogs"></i>
              </div>
              <p>How It Works</p>
          </nuxt-link>
          <nuxt-link to="/gift-diary" class="link" tag="div">
              <div class="icon">
                  <i class="fas fa-gifts"></i>
              </div>
              <p>Manage My Gift Diary</p>
          </nuxt-link>
          <nuxt-link to="/say-hello" class="link" tag="div">
              <div class="icon">
                  <i class="fas fa-phone-square"></i>
              </div>
              <p>Say Hello</p>
          </nuxt-link>
      </div>
      <Socials/>
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
    nav.classList.add('text-primary');
  }
}
</script>
<template>
  <section class="say-hello">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="flex">
        <div class="text">
          <p class="title">
            Say Hello
          </p>
          <p class="write-up sub-title">
            Your beautiful story of thoughtful gifting starts with saying HELLO.
          </p>
          <form>
            <input type="email" id="email" name="email" placeholder="EMAIL">
            <textarea name="preference" id="preference" placeholder="EXPERIENCE PREFERENCE"></textarea>
            <input type="submit" value="ENTER" disabled>
          </form>
        </div>
        <div class="contact">
          <div class="info">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <p>hello@teelonis.com</p>
          </div>
          <div class="info">
            <div class="icon">
              <i class="fas fa-phone-volume"></i>
            </div>
            <p>
              Nigeria - +234 (0) 809 670 8888
              <br>
              UK - +447 549 00 5150
            </p>
          </div>
        </div>
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
<template>
  <div>
    <nav class="main-nav">
      <nuxt-link to="/" tag="div" class="logo">
        <img src="img/Logo.png" alt="Teelonis logo">
      </nuxt-link>
      <ul>
        <nuxt-link tag="li" to="/about" exact-active-class="active-link">Our Story</nuxt-link>
        <nuxt-link tag="li" to="/stories" exact-active-class="active-link">Shared Stories</nuxt-link>
        <nuxt-link tag="li" to="/experience" exact-active-class="active-link">Experience Us</nuxt-link>
      </ul>
    </nav>
    <nav class="mobile-nav">
      <div class="hamburger" @click="toggleNav">
        <i class="fas fa-bars"></i>
      </div>
      <ul class="toggle-nav" id="links">
        <li @click="toggleNav"><i class="fas fa-times"></i></li>
        <li @click="toggleNav"><nuxt-link tag="a" to="/" exact-active-class="active-link">Home</nuxt-link></li>
        <li @click="toggleNav"><nuxt-link tag="a" to="/about" exact-active-class="active-link">About</nuxt-link></li>
        <li @click="toggleNav"><nuxt-link tag="a" to="/stories" exact-active-class="active-link">Shared Stories</nuxt-link></li>
        <li @click="toggleNav"><nuxt-link tag="a" to="/experience" exact-active-class="active-link">Experience Us</nuxt-link></li>
      </ul>
      <nuxt-link to="/" tag="div" class="logo">
        <img src="img/Logo.png" alt="Teelonis logo">
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav() {
      const links = document.querySelector('#links');
      links.classList.toggle('toggle-nav');
    }
  }
}
</script>


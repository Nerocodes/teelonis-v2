<template>
  <section class="body">
    <Nav/>

    <main>
      <nuxt />
    </main>
    <!-- Start of HubSpot Embed Code -->
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/6197532.js"></script>
    <!-- End of HubSpot Embed Code -->
    <Footer/>
  </section>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>
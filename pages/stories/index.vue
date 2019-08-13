<template>
  <section class="stories">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="flex">
        <div class="text">
          <p class="title">
            {{ allStories[page].title }}
          </p>
          <p class="featured">
            <i class="far fa-star"></i>
            Featured story
          </p>
          <p class="body">
            {{ allStories[page].body }}
          </p>
          <div class="pagination">
            <button v-if='page > 0' @click="prevPage">
              <i class="fas fa-angle-left"></i>
            </button>
            <span>{{ page + 1 }}</span>
            <button v-if='page < allStories.length - 1' @click="nextPage">
              <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div class="image">
          <Carousel :per-page="1" :autoplay="true" :autoplayTimeout="3000" :loop="true">
            <Slide v-for="(image, index) in allStories[page].images" :key="index">
              <img :src="image" alt="gifts">
            </Slide>
          </Carousel>
        </div>
      </div>
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
      <div class="message">
        <img src="img/msg.jpg" alt="message icon">
        <p>Talk to us</p>
      </div>
    </div>
  </section>
</template>

<script>
import stories from '~/static/js/stories.js';
import { Carousel, Slide } from 'vue-carousel';

export default {
  layout: 'app',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      page: 0,
      allStories: stories
    }
  },
  methods: {
    nextPage() {
      this.page++;
    },
    prevPage() {
      this.page--;
    }
  },
  mounted() {
    const nav = document.querySelector('.main-nav');
    nav.classList.add('text-primary');
  }
}
</script>
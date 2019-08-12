<template>
  <section class="stories">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="flex">
        <div class="text">
          <p class="title">
            {{ }}
          </p>
          <p class="bio">
            Ceo mayers vision scope enterprise
            <br>
            lorem ipsum loremipsum
          </p>
          <p class="featured">
            <i class="far fa-star"></i>
            Featured story
          </p>
          <p class="body">
            
          </p>
          <a href="#" class="read-more">Read More</a>
        </div>
        <div class="image">
          <img src="img/sit.jpg" alt="gifts">
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
export default {
  layout: 'app',
  data() {
    return {
      apiUrl: 'https://teelonis.com/wp-json/wp/v2/posts',
      stories: [],
      story: {}
    }
  },
  methods: {
    async getStories() {
      console.log('in here');
     await  this.$axios.get(this.apiUrl).then((res) => {
        if (res) {
          const stories = res.data;
          this.$store.commit('setStories', stories);
          this.stories = [...stories];
          this.story = {...stories[0]};
          console.log(this.story.title.rendered);
        }
      }).catch(err => console.log(err));
    }
  },
  created() {
    this.getStories();
  },
  mounted() {
    const nav = document.querySelector('.main-nav');
    nav.classList.add('text-primary');
  }
}
</script>
<template>
  <section class="about">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="text">
        <p class="title">
          Making The World A Happier Place… and loving every moment of it!
        </p>
        <p class="body">
          We know that your relationships matter. They matter a great deal. <br>
          We also know that gift giving play an 
          important role in developing healthy, loving relationships. <br>
          Regardless of the type of relationship- finding the perfect 
          gifts for men or women can be a lot of hard work which 
          leaves you struggling with one or all the following: 
          <ul>
            <li>What gift to give</li>
            <li>Where to get unique and quality gifts</li>
            <li>How to get your gift beautifully packaged</li>
            <li>Finding the time to think of the gifts and/or shop for it.</li>
          </ul>
          If these are your struggles- then you have come to the right place! <br>
          We will take care of you. <br>
          We have built a community of <nuxt-link to="/stories" class="text-link">thoughtful gifters</nuxt-link> who we 
          have helped give the perfect gifts - for a decade!
        </p>
        <div class="body mb-3 more">
          <p class="body">Teelonis was founded in April 2009 and it has been an epic ride ever since.</p>
          <p class="body">It began as a company offering personal shopping services for the busy professional in 
          Nigeria who wanted to purchase quality clothing from the UK
          without all the associated stress of shopping.</p>
          <p class="body">The goal was to help our clients live less stressful, happier and more beautiful lives.
          We have since evolved.</p>
          <p class="body">With this passion to help people live more beautiful lives, the founder- Temitope Olonilua
          not only took the bold step to pioneer the industry but has over the past decade built a brand
          that has transitioned from being a personal shopping company to a bespoke gifting company. 
          The goal has remained the same- but with more focus on helping to build, strengthen
           and restore relationships through the art of thoughtful expressions.</p>

          <p class="body">With a superb eye for quality, attention to details, a great dose of creativity 
          and totally driven by passion- we would work with you to give the gift that is truly thoughtful.
          We should also let you know that thoughtfulness isn’t just a way we do business.
          It is who we are.</p>

          <p class="body">With each thoughtful gift delivered, there are at least two happy people.</p>
          <p class="body">You - the Giver and The Recipient.</p>
          <p class="body">With thousands of thoughtful gifts delivered, there are thousands more happy people.</p>
          <p class="body">This is what we live for.</p>
          <p class="body">To create beautiful stories of special moments.</p>
          <p class="body">To sprinkle happiness and joy in the world like confetti.</p>
          <a href="/experience" class="read-more">Get Started</a>
        </div>
        <a href="#" class="read-more" id="read-more-btn" @click="readMore">Read More</a>
      </div>
      <div class="gift">
        <img src="img/ourstory.png" alt="gifts">
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
  },
  methods: {
    readMore() {
      const readMoreBtn = document.querySelector('#read-more-btn');
      const more = document.querySelector('.more');
      readMoreBtn.classList.add('more');
      more.classList.remove('more');
    }
  }
}
</script>


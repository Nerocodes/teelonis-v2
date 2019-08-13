<template>
  <section class="how-it-works">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="text">
        <h2 class="title">How It Works</h2>
        <p>
          At Teelonis, our approach to giving the perfect gift is BESPOKE. INDIVIDUALISED.  PERSONALISED.
          This means that the gift package is created for you- to suit the recipient, the occasion and your budget.
          With Thoughtful Gifting- one size does not fit all. 
          We believe that you are unlike anyone else, so are your recipients and your relationship with them.
          Your relationship isn’t off the shelf. It is Unique. It is Special. It is unlike any other.
          And so should your gift.
        </p>
        <p>
          Here is how we journey with you to give a truly thoughtful gift:
        </p>
        <div class="steps">
          <details>
            <summary>
              1). You answer some questions
            </summary>
            <p>
              The best of gifts are given when the focus is on the recipient.
              We certainly don’t know the recipient as much as you do, 
              so we start the journey by asking you to tell us all you can 
              about the recipient by completing this *short form*.
              We know that sometimes, you don’t have all the information. 
              Whatever you know would be helpful.
            </p>
          </details>
          <details>
            <summary>
              2). You pick your package
            </summary>
            <p>
              Based on the information you have provided; we would send
                some package options for you to choose from.
            </p>
          </details>
          <details>
            <summary>
              3). We deliver
            </summary>
            <p>
              After the gift package has been agreed and payment is received,
              your gift package will be delivered - to you directly or to the recipient.
            </p>
          </details>
          <details>
            <summary>
              4). Feel PROUD. Feel HAPPY.
            </summary>
            <p>
              Okay- this is not a step. 😊 
              It is what you experience after steps 1,2,3.
              The pride from getting it right and giving someone a gift that is perfect for them.
              The joy and excitement you get from making someone else happy.
              Both Priceless emotions.
            </p>
          </details>
        </div>
        <nuxt-link to="/gift-diary" class="cta-btn">
          Manage My Gift Diary
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
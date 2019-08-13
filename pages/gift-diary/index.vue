<template>
  <section class="gift-diary">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="flex">
        <div class="text">
          <p class="title">
            Manage My Gift Diary
          </p>
          <p class="write-up">
            Ever forgotten the birthday of a loved one? <br>
            Ever remembered a little bit too late to find enough
             time to get the perfect gift? <br>
            Yeah- we know forgetting doesn’t leave you feeling great.  <br>
            Oh- it is worse if it’s the birthday of your significant 
            other- you might find yourself in the “doghouse” or in the black book for a while! 
            Certainly not a great place to be.
          </p>
          <p class="write-up">
            We really do care about your relationships. 
            We exist to help you build and strengthen them through 
            the art of thoughtful gifting.
          </p>
          <p class="write-up">
            Take a few minutes to complete the form with your details 
            and special dates and we would ensure you don’t forget or remember too late.
            We would provide you this service free of charge!
          </p>
          
        </div>
        <div class="form">
          <form>
            <div class="form-group">
              <label for="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter text here">
            </div>
            <div class="form-group">
              <label for="name">Contact Number:</label>
              <input type="tel" id="number" name="number" placeholder="Enter text here">
            </div>
            <div class="form-group">
              <label for="email">Email Address:</label>
              <input type="email" id="email" name="email" placeholder="Enter text here">
            </div>
            <fieldset>
              <legend>Special Date</legend>
              <div class="form-group">
                <label for="name">Person Name:</label>
                <input type="text" id="person_name" name="person_name" placeholder="Enter text here">
              </div>
              <div class="form-group">
                <label for="name">Relationship:</label>
                <select name="relationship" id="relationship">
                  <option value="husband">Husband</option>
                  <option value="wife">Wife</option>
                  <option value="boyfriend">Boyfriend</option>
                  <option value="girlfriend">Girlfriend</option>
                  <option value="fiancé">Fiancé</option>
                  <option value="fiancée">Fiancée</option>
                  <option value="partner">Partner</option>
                  <option value="father">Father</option>
                  <option value="mother">Mother</option>
                  <option value="parents">Parents</option>
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                  <option value="uncle">Uncle</option>
                  <option value="aunty">Aunty</option>
                  <option value="friend">Friend</option>
                  <option value="boss">Boss</option>
                  <option value="mentor">Mentor</option>
                  <option value="pastor">Pastor</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">Occasion:</label>
                <select name="occasion" id="occasion">
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </select>
              </div>
              <div class="form-group">
                <label for="name">Date:</label>
                <input type="date" id="date" name="date" placeholder="Enter text here">
              </div>
            </fieldset>
            <input type="submit" value="ENTER" disabled>
          </form>
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
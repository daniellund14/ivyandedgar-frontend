<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('/static/img/landing-page-1.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Dedicated to a Healthy Legacy</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are</h2>
            <h5 class="description">
              Ivy and Edgar is the simplest and best way for people to purchase
              their new furry best friend. We are committed to finding the right
              dog for you! Our breeders are the best and the world, and are committed
              to providing the highest quality dogs in the industry. Try us out now, and
              say hello to your new best friend!
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('/static/img/dog-family-reunion-2.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Ivy and Edgar sets up the perfect way to find your favorite breed"
                  <br />
                  <br />
                  <small>-Potential Business Review</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('/static/img/dog-with-owner.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('/static/img/corgi-1.jpg')"
              ></div>
              <h3>
                Dedicated to the highest quality breeders
              </h3>
              <p>
                Ivy and Edgar ensures the highest quality dogs, by requiring breeders
                to live up to our extensive expectations. Each breeder is required to
                submit references before they are signed up and able to list dogs. It is
                also required that breeders submit a full veterinarian check for the dogs
                listed on our site, ensuring the highest quality.
              </p>
              <h3>
                Customer Satisfaction Guarantee
              </h3>
              <p>
                All Ivy and Edgar dogs come with the Ivy and Edgar Pledge. This pledge
                ensures you are satisfied with your new pup. We are committed to making
                sure your experience with your dog is everything you want it to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">What our customers say</h2>
        <div class="team">
          <div class="row">
            <CustomerReview
              v-for="review in reviews"
              :imageUrl="review.imageUrl"
              :customerName="review.customerName"
              :dogBreed="review.dogBreed"
              :reviewText="review.text"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to sign up for early access?</h2>
        <p class="description">We can't wait to show off our product - register here</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            ></fg-input>
            <fg-input
              class="input-lg"
              placeholder="Last Name..."
              v-model="form.lastName"
              addon-left-icon="now-ui-icons users_circle-08"
            ></fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Register</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Button, FormGroupInput } from '@/components';
  import CustomerReview from '../components/molecules/CustomerReview';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    CustomerReview,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      reviews: [],
      form: {
        firstName: '',
        lastName: '',
        email: ''
      }
    };
  },
  methods: {
    getReviews: function(){
      // TODO replace this with API Call
      this.reviews = [
        {
          imageUrl: "/static/img/macie.jpg",
          customerName: "Daniel Lund",
          dogBreed: "Mini Golden Doodle",
          text: `
            This is the best site ever. We found Macie within hours of searching
            for our new family dog. <a href="https://ivyandedgar.com">High Mesa Doodles</a> raised an amazing puppy.
            Carol helped us learn about the dog we were getting
            and made sure Macie was the right dog. Ivy and Edgar's
            process was so simple and our new puppy
            was at our door within a week. WE ARE SO HAPPY TO HAVE HER!
          `
        },
        {
          imageUrl: "/static/img/border-collie.jpg",
          customerName: "Ryan Tompson",
          dogBreed: "Mini Golden Doodle",
          text: `
            Easiest way to find a dog hands down. From start to finish
            Ivy and Edgar does a great job to accommodate for their
            customer's needs. Will definitely be recommending to my friends.
            `
        },
        {
          imageUrl: "/static/img/australian-shepherd.jpeg",
          customerName: "Eva Jenner",
          dogBreed: "Australian Shepherd",
          text: `
            It is clear that Ivy and Edgar is dedicated to finding quality breeders.
            <a href="">Australian Breeders</a> was amazing throughout the whole process.
            We are so happy to have Mack in our life! Highly recommend this site.
            `
        }
      ]
    }
  },
  beforeMount() {
    this.getReviews();
  }
};
</script>

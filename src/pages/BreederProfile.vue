<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image:url('/static/img/background/bg7.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="photo-container">
          <img src="/static/img/mychelle-lopez.jpeg" alt="" />
        </div>
        <h3 class="title">{{ breeder.about.kennelName }}</h3>
        <p class="category">{{ breeder.about.breederName }}</p>
        <div class="content">
          <div class="social-description">
            <h2>{{ breeder.reviews.avgRating }}</h2>
            <p>Rating</p>
          </div>
          <div class="social-description">
            <h2>{{ breeder.reviews.numberOfReviews }}</h2>
            <p>Number of Reviews</p>
          </div>
          <div class="social-description">
            <h2>{{breeder.about.numberOfFollowers}}</h2>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a @click="followBreeder" class="btn btn-primary btn-round btn-lg" style="color: white" :class="{disabled: followed}">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
            v-if="false"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
            v-if="false"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <h3 class="title">About Breeder</h3>
        <h5 class="description">
          {{ breeder.about.summary }}
        </h5>
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h4 class="title text-center">My Portfolio</h4>
          </div>
          <tabs
            pills
            class="nav-align-center"
            tab-content-classes="gallery"
            tab-nav-classes="nav-pills-just-icons"
            type="primary"
          >
            <tab-pane title="Profile">
              <i slot="label" class="now-ui-icons design_image"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg6.jpg" class="img-raised" />
                    <img src="img/bg11.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Home">
              <i slot="label" class="now-ui-icons location_world"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg1.jpg" alt="" class="img-raised" />
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>

            <tab-pane title="Messages">
              <i slot="label" class="now-ui-icons sport_user-run"></i>

              <div class="col-md-10 ml-auto mr-auto">
                <div class="row collections">
                  <div class="col-md-6">
                    <img src="img/bg3.jpg" alt="" class="img-raised" />
                    <img src="img/bg8.jpg" alt="" class="img-raised" />
                  </div>
                  <div class="col-md-6">
                    <img src="img/bg7.jpg" alt="" class="img-raised" />
                    <img src="img/bg6.jpg" class="img-raised" />
                  </div>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'profile',
  bodyClass: 'profile-page',
  props: {
    id: String,
  },
  data() {
    return {
      breeder: {},
      followed: false
    }
  },
  components: {
    Tabs,
    TabPane,
  },
  methods: {
    followBreeder() {
      console.log("Following breeder");
      this.breeder.about.numberOfFollowers++;
      this.followed = true;
    },
    loadBreederProfile() {
      this.breeder = {
        id: "~LKYHSKTYHA19k",
        about: {
          breeds: ["Golden Retriever"],
          kennelName: "Golden Oasis",
          breederName: "Mychelle J. Lopez",
          website: "http://www.goldenoasisonline.com",
          summary: "Golden Oasis, llc is a family owned dog-breeding business with outstanding professional standards. We specialize in golden retrievers ranging in colors from the traditional golden, red goldens, honey golds to the crème platinums. We have been in business since 2004 and focus on individualized attention and love to each of our dogs. We are located in the small quaint town of Berthoud, CO near Boulder and Loveland. All our dogs and puppies are handled, raised, and trained daily by Golden Oasis. We strive for healthy, gorgeous, stately confirmation; outstanding mellow temperament, well- socialized and well adjusted dogs. Thank you for looking us up, let us help set up a puppy visit with your family-(303) 710-1388",
          location: {
            city: "Berthoud",
            state: "Colorado",
            stateShort: "CO",
            zipCode: "80513",
          },
          contact: [
            {type: "PHONE", address: "303-847-2087"}
          ],
          certificates: [
            {name: "IV&E Certified", status: true},
            {name: "IV&E Club Member", status: true},
          ],
          numberOfFollowers: 12
        },
        reviews: {
          avgRating: 4.1,
          numberOfReviews: 20,
          lastReviews: [
            {
              name: "Muhammad S.",
              rating: 4,
              reviewText: "Mychelle was awesome, she was so helpful in answering all of our questions about Golden Retrievers and helping us find the best puppy for our family",
            },
            {
              name: "Gabriel L.",
              rating: 5,
              reviewText: "Would give a 10 if I could. These puppies are great and Mychelle was so helpful throughout this whole process."
            },
            {
              name: "Stephanie G.",
              rating: 4,
              reviewText: "One thing is clear, Mychelle really cares about all of her puppies. We felt right from the start that she only cared about finding the perfect family for each and every dog"
            }
          ]

        }
        }
      }
    },
  created() {
    this.loadBreederProfile();
  },
};
</script>
<style></style>

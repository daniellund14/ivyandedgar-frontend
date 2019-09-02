<template>
    <div class="col-md-4">
      <div class="team-player">
        <img
          :src="imageUrl"
          alt="Thumbnail Image"
          class="rounded-circle img-fluid img-raised"
        />
        <h4 class="title">{{ customerName }}</h4>
        <p class="category text-primary">{{ dogBreed }}</p>
        <p class="description" v-html="reviewText"></p>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'CustomerReview',
    props: {
      imageUrl: '',
      customerName: '',
      dogBreed: '',
      reviewText: ``
    }
  };
</script>

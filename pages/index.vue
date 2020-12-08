<template>
  <div class="about">
    <b-container>
      <b-row class="justify-content-center align-items-center">
        <b-col sm="12" md="12" lg="6">
          <h1>{{ pagetitle }}</h1>
          <p>{{ description }}</p>
        </b-col>
        <b-col sm="12" md="12" lg="6">
          <img :src="imgsrc" :alt="imgalt" class="img-fluid" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      pagetitle: "About Page",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,tenetur? Laboriosam neque optio saepe natus quaerat, placeat involuptatum ea iste excepturi nulla fuga sint quisquam iusto errorvoluptas velit.",
      imgsrc: require("~/static/about.svg"),
      imgalt: "about-img",
    };
  },
  // for SEO overiding nuxt config meta data with my page data
  head() {
    return {
      title: this.pagetitle,
      meta: [
        {
          hid: "description",
          name: "about",
          content: this.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding-top: 35px;
}
</style>


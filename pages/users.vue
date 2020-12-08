<template>
  <div class="user container">
    <b-row>
      <b-col
        sm="12"
        md="12"
        lg="6"
        v-for="(user, idx) in $store.state.users"
        :key="idx"
      >
        <user-card :user="user"></user-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UserCard from "~/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  // for SEO overiding nuxt config meta data with my page data
  head() {
    return {
      title: "Users",
      meta: [
        {
          hid: "description",
          name: "Users",
          content: "Users Data",
        },
      ],
    };
  },
  fetch({ $axios, store }) {
    return $axios.$get("/users").then((res) => {
      store.commit("updateusers", res);
    });
  },
};
</script>
<style lang="scss" scoped>
.user {
  padding-top: 35px;
}
</style>

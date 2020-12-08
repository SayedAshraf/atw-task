<template>
  <b-navbar type="dark" variant="dark" class="AppHeader">
    <!-- looping on items in data  -->
    <b-navbar-nav class="list" v-for="(item, idx) in items" :key="idx">
      <b-nav-item class="list-item" :to="item.to">{{ item.title }}</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      items: [
        { title: "About", to: "/" },
        { title: "Users", to: "/users" },
        { title: "Contact", to: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.AppHeader {
  justify-content: center;
  align-items: center;
  .list {
    margin: 0;
    padding: 0;
    display: inline;
    .list-item {
      color: #fff;
      list-style: none;
      padding: 5px 10px;
      a,
      &:active {
        color: inherit;
        text-decoration: none;
        border-radius: 5px;
      }
      a.nuxt-link-exact-active {
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>

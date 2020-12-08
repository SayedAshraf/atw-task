<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader";
export default {
  name: "mainlayout",
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>

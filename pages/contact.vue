<template>
  <div class="contact container">
    <FormValidation />
  </div>
</template>

<script>
import FormValidation from "~/components/FormValidation";

export default {
  name: "contact",
  components: { FormValidation },
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "Contact",
          content: "Contact us!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contact {
  padding-top: 35px;
}
</style>

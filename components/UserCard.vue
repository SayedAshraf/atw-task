<template>
  <div class="card">
    <div class="row">
      <!-- image column -->
      <div class="col-4">
        <img class="avatar" :src="`https://i.pravatar.cc/150?img=${user.id}`" />
      </div>
      <!-- information column -->
      <div class="col-8">
        <div class="infos">
          <div class="name capitalize">{{ user.username }}</div>
          <div class="birth"><i class="fas fa-id-card"></i>{{ user.id }}</div>
          <div class="email"><i class="fas fa-fw fa-envelope"></i>{{ user.email }}</div>
          <div class="phone"><i class="fas fa-fw fa-phone"></i>{{ user.phone }}</div>
          <div class="nationality capitalize"><i class="fas fa-fw fa-globe-americas"></i>{{ user.address.city }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usercard",
  props: ["user"],
  data() {
    return {
      // picture: "https://i.pravatar.cc/150?img=4",
    };
  },
};
</script>

<style lang="scss" scoped>
$global_gap: 10px;
$shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
$shadow_hover: 0 6px 10px rgba(0, 0, 0, 0.16), 0 6px 10px rgba(0, 0, 0, 0.23);

.card {
  padding: $global_gap;
  border-radius: 5px;
  box-shadow: $shadow;
  background: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  .avatar {
    margin-right: $global_gap;
    border-radius: 50%;
  }
  .infos {
    div {
      &:not(:last-child) {
        margin-bottom: $global_gap;
      }
      &.capitalize {
        text-transform: capitalize;
      }
      &.name {
        font-size: 150%;
        font-weight: bold;
      }
      i {
        margin-right: $global_gap;
      }
    }
  }
}
</style>


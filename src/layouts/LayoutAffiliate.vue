<template>
  <fragment>
    <div class="background-mountain">
      <c-header-affiliate nav-position="right" />
      <main class="site-content">
        <slot />
      </main>
      <c-footer />
    </div>
  </fragment>
</template>


<script>
import CHeaderAffiliate from "@/layouts/headers/HeaderAffiliate.vue";
import CFooter from "@/layouts/footers/Footer02.vue";
export default {
  components: {
    CHeaderAffiliate,
    CFooter,
  }
};
</script>


<style media="screen">
.background-mountain {
  background: url(../assets/images/backgroundMountain.svg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 80%;
}
</style>

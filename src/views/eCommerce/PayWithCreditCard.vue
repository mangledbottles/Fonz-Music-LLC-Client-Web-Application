<template>
  <div class="pay-with-credit-card-page">
    <fragment>
      <c-PayCreditCard />
    </fragment>
  </div>
</template>
<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.paymentTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}
.btn-secondary {
  background-color: #b288b9;
}
.paymentTab p {
  text-align: center;
}
.submitButton {
  background-color: #ff9425;
  color: white;
}
.button-block {
  margin: 35px 0;
}
.pay-with-credit-card-page {
  min-height: 900px;
}
</style>

<script>
import CLayoutCheck from "@/layouts/layoutECommerce.vue";
import CPayCreditCard from "@/components/sections/ecommerce/PayCreditCard.vue";

export default {
  name: "Secondary",
  components: {
    CPayCreditCard
  },
  data() {
    return {
      demoModalActive: false
    };
  },
  created() {
    this.$emit("update:layout", CLayoutCheck);
  },
  mounted() {
    // let polyfillScript = document.createElement("script");
    // polyfillScript.setAttribute(
    //   "src",
    //   "https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch"
    // );
    // document.head.appendChild(polyfillScript);
  }
};
</script>

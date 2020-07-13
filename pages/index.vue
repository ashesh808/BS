<template>
  <div>
    <Carousel />
    <Newarrivals />
    <Products />
    <Services />
    <!-- <transition name="fade">
      <Enquiry
        v-if="$store.getters.form"
        :closeHandler="closeForm"
        :notificationHandler="notification"
      />
    </transition>-->
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Products from "@/components/index/Products";
import Newarrivals from "@/components/index/Newarrivals";
import Services from "@/components/index/Services";

export default {
  components: {
    Carousel,
    Products,
    Newarrivals,
    Services
  },

  methods: {
    // showForm() {
    //   this.$store.commit("show");
    //   document.getElementsByTagName("html")[0].className = "overlay";
    // },
    // closeForm() {
    //   this.$store.commit("hide");
    //   document.getElementsByTagName("html")[0].className = "";
    // },

    notification(success) {
      // this.showNotification = success;
      // setTimeout(() => {
      //   this.showNotification = false;
      // }, 3000);
    }
  }
};
</script>

<style type="text/css" lang="scss">
</style>
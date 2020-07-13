<template>
  <div>
    <HeaderBar />
    <SearchBar />
    <Navigation />
    <nuxt />
    <Footer />
    <transition name="fade">
      <Enquiry v-if="$store.getters.form" />
    </transition>
  </div>
</template>

<script>
import HeaderBar from "@/components/includes/HeaderBar";
import Navigation from "@/components/includes/Navigation";
import SearchBar from "@/components/includes/SearchBar";
import Footer from "@/components/includes/Footer";
import Enquiry from "@/components/includes/Enquiry";

export default {
  components: {
    HeaderBar,
    SearchBar,
    Navigation,
    Footer,
    Enquiry
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/*
 *  STYLE 5
 */

*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

*::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
  background-color: #f14668;

  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    color-stop(0.5, rgba(255, 255, 255, 0.2)),
    color-stop(0.5, transparent),
    to(transparent)
  );
}
</style>

<template>
  <div class="container">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 v-if="error.statusCode === 404" class="is-size-3">404, Page not found</h1>
        <h1 v-else class="is-size-3">An error occurred</h1>
        <br />
        <nuxt-link to="/">Home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>

<style scoped lang="scss">
.container {
  padding-top: 96px;
  padding-bottom: 96px;
}
</style>


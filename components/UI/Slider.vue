<template>
  <div class="slider has-background-info">
    <aside class="menu">
      <div>
        <i class="las la-times" @click="toggle" />
      </div>
      <ul class="menu-list">
        <li @click="toggle">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li @click="toggle">
          <nuxt-link to="/products">Products</nuxt-link>
        </li>
        <li @click="toggle">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li @click="toggle">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  props: ["toggle"]
};
</script>


<style scoped lang="scss">
.slider {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 60vw;
  z-index: 1000;
}

aside {
  padding: 16px;
  padding-top: 32px;
  a {
    color: #fff;
    margin: 16px 0;
  }
  div {
    margin-top: 16px;
    margin-bottom: 64px;
    text-align: right;
    i {
      font-size: 24px;
      color: #fff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .slider {
    display: none;
  }
}

@media screen and(max-width: 576px) {
  .slider {
    width: 70vw !important;
  }
}
</style>

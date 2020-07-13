<template>
  <div class="has-background-white-bis">
    <div class="container py-4">
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <img src="@/assets/logo2.png" />
            <i class="las la-bars is-hidden-desktop is-hidden-tablet" @click="toggle"></i>
          </div>
        </div>
        <div class="level-right">
          <div class="field has-addons">
            <p class="control inputWrapper">
              <input
                class="input is-radiusless"
                type="text"
                v-model="keyword"
                placeholder="Search"
                @keyup.enter="search"
              />
            </p>
            <p class="control">
              <button class="button is-warning is-radiusless search px-2" @click="search">
                <i class="las la-search"></i>
              </button>
            </p>
            <p class="control">
              <button class="button is-danger is-radiusless" @click="$store.commit('show')">
                <i class="las la-book"></i>{{list}}   Book(S)
              </button>
            </p>
          </div>
        </div>
      </nav>
    </div>
    <div class="sliderOverlay" v-if="slide" @click="toggle"></div>

    <transition
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <Slider v-show="slide" :toggle="toggle" />
    </transition>
  </div>
</template>

<script>
import Slider from "@/components/UI/Slider";

export default {
  data() {
    return {
      keyword: "",
      slide: false
    };
  },

  computed: {
    list() {
      return this.$store.getters.medicines.length;
    }
  },

  methods: {
    search() {
      this.$router.push(`/products?search=${this.keyword}`);
    },

    toggle() {
      this.slide = !this.slide;
    }
  },

  components: {
    Slider
  }
};
</script>

<style scoped lang="scss">
img {
  width: 256px;
  height: auto;
  padding-right: 16px;
}
.container {
  i {
    font-size: 24px;
    &:hover {
      cursor: pointer;
    }
  }
  .is-danger {
    margin-left: 16px;
  }
  .inputWrapper {
    width: 100%;
    input {
      border: solid #f5cb25 2px;
    }
  }
}

.level-left {
  .level-item {
    justify-content: space-between;
    i {
      color: #f5cb25;
    }
  }
}

@media screen and(min-width: 992px ) {
  input {
    width: 456px;
  }
}

@media screen and(max-width: 1024px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

.sliderOverlay {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1000;
  overflow: hidden;
}

@media screen and (min-width: 769px) {
  .sliderOverlay {
    display: none;
  }
}
</style>
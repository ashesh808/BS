<template>
  <div class="container">
    <div class="services">
      <h1 class="is-size-5">Featured</h1>
    </div>
    <br />
    <div class="columns is-multiline is-mobile">
      <!-- <div class="column is-4-tablet is-3-desktop">
        <figure class="image is-4by4 ad">
          <img
            src="http://aaryaweb.info/opc/healthstore/healthstore3/drugstore/image/cache/catalog/left-banner-277x404.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>-->
      <div
        class="column is-4-tablet is-3-desktop"
        v-for="(medicine,index) in medicines"
        :key="index"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by4" v-show="!lazy.includes(index)">
              <img src="/placeholder.png" :alt="medicine.name" />
            </figure>
            <transition name="fade">
              <figure class="image is-4by4" v-show="lazy.includes(index)">
                <img src="~/assets/placeholder.jpeg" :alt="medicine.name" @load="lazy.push(index)" />
              </figure>
            </transition>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="upper">To Kill A Mocking bird</p>
                <p class="subtitle">NPR 1000</p>
                <button class="button is-info is-radiusless" @click="add(medicine)">
                  <b>Add to Order</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="columns">
      <div class="column banner">
        <img
          src="https://aaryaweb.info/opc/healthstore/healthstore3/drugstore/image/catalog/sub-banner3.jpg"
        />
      </div>
    </div>-->
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      medicines: [],
      lazy: []
    };
  },

  async created() {
    this.fetchMedicines(`${process.env.url}/api/product?limit=12`);
  },

  methods: {
    fetchMedicines(url) {
      this.$axios.get(url).then(res => {
        this.medicines = res.data.data.filter(m => !m.isDeleted);
      });
    },

    add(medicine) {
      this.$store.commit("addMedicine", {
        name: medicine.name,
        qty: "1 Unit"
      });
      Swal.fire("", `${medicine.name} has been added to your cart.`, "success");
    },

    loaded() {}
  }
};
</script>
<style scoped lang="scss">
.container {
  margin-top: 96px;
  margin-bottom: 96px;
}

.column {
  display: flex;
  .image {
    width: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    width: 100%;
    border: solid 1px #e3e3e3;
    box-shadow: none;
    .card-image {
      flex: 1;
    }
    .card-content {
      flex: 1;
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      align-items: flex-end;
      .upper{
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 16px;
        margin-top: 8px;

      }

      .subtitle {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 16px;
        margin-top: 8px;
      }
      
    }

    figure {
      overflow: hidden;
      img {
        transition: 250ms;
      }
    }

    &:hover {
      img {
        transform: scale(1.15);
        transition: transform 500ms;
      }
    }
  }

  .ad {
    background-image: url(http://aaryaweb.info/opc/healthstore/healthstore3/drugstore/image/cache/catalog/left-banner-277x404.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repat;
  }
}

.services {
  background: #fafaf1;
  h1 {
    background-color: #f5cb25;
    width: 128px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    color: #fff;
  }
  h1::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: #fafafa;
    border: #f5cb25 19px solid;
    border-right: transparent 24px solid !important;
    top: 0;
  }
}

.banner {
  img {
    margin: auto;
  }
  
}
</style>
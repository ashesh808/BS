<template>
  <div class="container">
    <div class="services">
      <h1 class="is-size-5">Services</h1>
    </div>
    <br />
    <div class="columns is-multiline">
      <div class="column is-4-tablet is-4-desktop" v-for="(service,index) in services" :key="index">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <i class="las" :class="service.icon"></i>
                <h1 class="is-size-5">{{service.title}}</h1>
                <h1 class="is-size-6 subtitle">{{service.content}}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          icon: "la-money-bill-wave",
          title: "10% DISCOUNT",
          content: "On Books."
        },
        {
          icon: "la-paper-plane",
          title: "VERY FAST & FREE DELIVERY",
          content: "Within Ringroad."
        },
        {
          icon: "la-thumbs-up",
          title: "CASH ON DELIVERY",
          content: "Online payment avaliable."
        }
      ]
    };
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
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    border: solid 1px #e3e3e3;
    box-shadow: none;
    .media-content {
      text-align: center;
    }
    .card-content {
      padding-top: 0;
      padding-bottom: 0;
      .subtitle {
        font-size: 14px;
        margin-bottom: 16px;
        margin-top: 8px;
      }
    }
  }

  i {
    font-size: 52px;
    color: #f14668;
  }

  h1 {
    color: #f14668;
    margin-bottom: 16px;
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
</style>
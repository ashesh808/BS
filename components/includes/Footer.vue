<template>
  <div class="has-background-black has-text-white">
    <div class="container py-8">
      <div class="columns is-multiline is-variable is-6 is-mobile">
        <div class="column is-one-quarter-fullhd is-full-tablet is-one-quarter-desktop">
          <img src="@/assets/logo2.png" />
          <ul class="contact">
            <li class="is-flex">
              <span class="has-text-warning">
                <i class="las la-map-marker-alt"></i>
              </span>
              <p>Kathmandu, Nepal</p>
            </li>
            <li class="is-flex">
              <span class="has-text-warning">
                <i class="las la-envelope"></i>
              </span>
              <a href="mailto:asheshusa9@gmail.com">book@gmail.com</a>
            </li>
            <li class="is-flex">
              <span class="has-text-warning">
                <i class="las la-phone"></i>
              </span>
              <a href="tel:+977 80808080">+977 80808080</a>
            </li>
          </ul>
        </div>
        <div
          class="column is-one-quarter-fullhd is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <h4>
            <b>MY ACCOUNT</b>
          </h4>
          <hr />
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div
          class="column is-one-quarter-fullhd is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <h4>
            <b>QUICK LINKS</b>
          </h4>
          <hr />
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products">Products</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">Contact Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/terms-and-conditions">Terms &amp; Conditions</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column is-one-quarter-fullhd is-half-tablet is-one-quarter-desktop">
          <!-- <h4>
            <b>NEWSLETTER</b>
          </h4>
          <hr />
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-radiusless has-background-black has-text-white"
                type="text"
                placeholder="Enter you email address"
              />
            </div>
            <div class="control">
              <a class="button is-info is-radiusless">GO</a>
            </div>
          </div>
          <br />-->
          <h4>
            <b>FOLLOW US</b>
          </h4>
          <hr />
          <ul class="social">
            <li class="is-inline-block">
              <a href="https://www.facebook.com/Medmandu" target="_blank">
                <i class="lab la-facebook-f"></i>
              </a>
            </li>
            <li class="is-inline-block">
              <a href="https://www.instagram.com/medmandu_np/" target="_blank">
                <i class="lab la-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="hero is-warning">
      <div class="hero-body has-text-centered">
        <p>&copy; 2020 Books Nepal, All Rights Reserved.</p>
      </div>
    </section>

    <div id="scrollToTop" class="hide">
      <button class="button is-white is-radiusless" @click="scrollToTop">
        <i class="las la-angle-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      if (process.client)
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }
  }
};

let debounceScroll = (func, delay) => {
  var timeoutId;
  return function() {
    clearTimeout(timeoutId);
    var args = arguments;
    var context = this;
    timeoutId = setTimeout(() => {
      func.apply(context, arguments);
    }, delay);
  };
};

if (process.client)
  window.onscroll = debounceScroll(function(e) {
    let y = window.scrollY;
    if (y >= 256) {
      document.getElementById("scrollToTop").className = "show";
    } else {
      document.getElementById("scrollToTop").className = "hide";
    }
  }, 60);
</script>

<style scoped lang='scss'>
@import "@/assets/style/colors.scss";
.container {
  .column {
    margin-bottom: 16px;
  }

  img {
    width: 256px;
    margin-bottom: 8px;
  }
  .contact {
    li {
      align-items: center;
      margin-bottom: 16px;
      i {
        font-size: 24px;
        margin-right: 8px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  hr {
    margin-top: 8px;
    margin-bottom: 24px;
    width: 30px;
    background-color: $primary;
  }

  h4 {
    margin-top: 12px;
    b {
      padding-bottom: 8px;
    }
  }

  li {
    a {
      color: #fff;
      font-size: 14px;
      &:hover {
        color: $primary !important;
        transition: color 300ms;
      }
    }
  }
}
.control {
  input {
    border: 2px solid $primary;
    font-size: 14px;
    &::placeholder {
      color: #e3e3e3;
      opacity: 0.5;
    }
  }
  a {
    font-size: 14px;
  }
}

.hero-body {
  padding-top: 16px;
  padding-bottom: 16px;
}

.social {
  li {
    margin-right: 4px;
    i {
      font-size: 24px;
      padding: 4px;
      border: solid 1px #fff;
      transition: 200ms;
      &:hover {
        transition: background-color 500ms;
        background-color: $primary;
        cursor: pointer;
        border-color: $primary;
      }
    }
  }
}

// Scroll To Top //ok fine

#scrollToTop {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 3;
  border: 3px solid #f5cb25;
  i {
    color: #f5cb25;
  }
  button {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.show {
  opacity: 1;
  transition: opacity 500ms;
}

.hide {
  opacity: 0;
  z-index: -1 !important;
  transition: opacity 250ms;
}

@media screen and(max-width: 1024px) {
  .container {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
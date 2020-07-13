<template>
<!-- changes -->
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <header class="modal-card-head is-radiusless has-background-white border-white">
          <p class="modal-card-title is-size-4">
            <b class="has-text-weight-medium">Book Order Form</b>
            <br />
            <span
              v-if="step==0"
              class="is-size-7"
            >Please search for your Books and fill in the quantity.</span>
            <span
              v-if="step==1"
              class="is-size-7"
            >Please fill in your information and we'll be sending your order in no time.</span>
          </p>

          <button class="delete" aria-label="close" @click="close"></button>
        </header>

        <nav
          class="breadcrumb is-centered has-arrow-separator is-hidden-mobile"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <div class="has-text-centered" :class="{'active': step==0, 'completed': step>0}">
                <i class="fa fa-book"></i>
                <br />Book Enquiry
              </div>
            </li>
            <li>
              <a href="#">
                <div
                  class="has-text-centered"
                  :class="{'active': step==2, 'completed': step>2, 'disabled': step<2}">
                  <i class="fa fa-user-tie"></i>
                  <br />Contact Information
                </div>
              </a>
            </li>
           
          </ul>
        </nav>
        <br />
        <form @submit.prevent>
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="steps[step]" @back="back" @next="next" @reset="step=0"></component>
            </keep-alive>
          </transition>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import Medicines from "@/components/includes/enquiry/Medicines";
import PersonalDetails from "@/components/includes/enquiry/PersonalDetails";
// import Submit from "@/components/includes/enquiry/Submit";

export default {
  data() {
    return {
      step: 0,
      steps: [
        Medicines,
        PersonalDetails
        // , Submit
      ],
      error: {},
      success: false,
      busy: false
    };
  },

  methods: {
    next() {
      this.step++;
    },

    back() {
      this.step--;
    },

    close() {
      this.$store.commit("hide");
    }
  },

  components: {
    Medicines,
    PersonalDetails
    // Submit
  }
};
</script>

<style scoped lang="scss">
.modal-card-head {
  border: none !important;
  padding: 0;
  padding-bottom: 32px;
}

.modal-card-title {
  flex-shrink: unset !important;
  b {
    color: #3298dc;
  }
}

.modal-card-body {
  max-height: 640px;
  min-height: 640px;
  overflow-y: scroll;
}

.is-one-fifth {
  p {
    font-size: 14px;
    padding-top: 7px;
  }
}
.pb-0 {
  padding-bottom: 0;
}

.file-name {
  width: 100%;
  max-width: none !important;
}
.file-div {
  width: 100%;
  .file-cta,
  .file-name {
    font-size: 14px;
  }
}

input,
textarea {
  font-size: 14px;
}

@media screen and (min-width: 769px) {
  .modal-card {
    width: 768px !important;
  }
}

small {
  font-size: 10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.breadcrumb {
  margin-bottom: 8px;
  i {
    font-size: 24px;
    border: 1px solid #e3e3e3;
    padding: 8px;
    border-radius: 50%;
  }
  .has-text-centered {
    font-size: 13px !important;
  }

  .active {
    color: #3298dc;
  }
  .disabled {
    color: #9e9e9e;
  }
  .completed {
    color: #4caf50;
  }
}

footer {
  button {
    margin-left: auto;
  }
}

form {
  margin-top: 8px;
}
</style>
<template>
  <div>
    <div class="columns">
      <div class="column is-one-fifth pb-0">
        <p>Name</p>
      </div>
      <div class="column">
        <input v-model="enquiry.name" class="input" type="text" placeholder="John Doe" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth pb-0">
        <p>Address</p>
      </div>
      <div class="column">
        <input
          v-model="enquiry.address"
          class="input"
          placeholder="e.g. Deepnagar Locality, Koteshwor-35, Kathmandu"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth pb-0">
        <p>Phone</p>
      </div>
      <div class="column">
        <input
          v-model="enquiry.phoneNumber"
          class="input"
          type="number"
          placeholder="e.g. 9843684612"
        />
      </div>
      <div class="column is-2 pb-0">
        <p>
          Email
          <small>(Optional)</small>
        </p>
      </div>
      <div class="column">
        <input
          v-model="enquiry.email"
          class="input"
          type="email"
          placeholder="e.g. johndoe@example.com"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-fifth pb-0">
        <p>
          Notes
          <small>(Optional)</small>
        </p>
      </div>
      <div class="column">
        <textarea
          v-model="enquiry.note"
          class="textarea"
          rows="5"
          placeholder="e.g. I would like to request for a medicine supply delivered to my home..."
        ></textarea>
      </div>
    </div>

    <div class="spacer"></div>
    <footer class="modal-card-foot">
      <button class="button is-danger is-radiusless back" @click="$emit('back')">Previous</button>

      <button
        class="button is-danger is-radiusless save"
        @click="submit"
        :class="{'is-loading': busy}"
        :disabled="isDisabled || busy"
      >Submit</button>
    </footer>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      busy: false,
      success: false
    };
  },

  computed: {
    enquiry() {
      return this.$store.getters.enquiry;
    },

    isDisabled() {
      return (
        this.enquiry.name.length == 0 ||
        this.enquiry.phoneNumber.length <= 7 ||
        this.enquiry.address.length == 0 ||
        (this.enquiry.email.length > 0 &&
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            this.enquiry.email
          ))
      );
    }
  },

  methods: {
    // save() {
    //   this.$emit("next");
    // },

    notification() {},

    submit() {
      this.busy = true;
      let formData = new FormData();

      for (let key in this.$store.getters.enquiry) {
        if (key != "prescription" && key != "medicine")
          formData.append(key, this.$store.getters.enquiry[key]);
      }

      formData.append(
        "medicine",
        JSON.stringify(this.$store.getters.medicines)
      );

      this.$store.getters.prescriptions.forEach(file => {
        formData.append("prescription", file);
      });

      this.$axios
        .post(`${process.env.url}/api/enquiry`, formData)
        .then(res => {
          Swal.fire(
            "Your Order has been placed successfully!",
            "Our support team will contact you shortly for approval of your order.",
            "success"
          );
          this.success = true;
          this.busy = false;
          this.$emit("reset");
          this.$store.commit("clear");
          this.$store.commit("hide");
        })
        .finally(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
small {
  font-size: 10px;
}
.is-one-fifth,
.is-2 {
  p {
    font-size: 14px;
    padding-top: 7px;
  }
}
.pb-0 {
  padding-bottom: 0;
}
input,
textarea {
  font-size: 14px;
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

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .back {
    margin-left: auto;
  }
}
.spacer {
  margin-bottom: 100px;
}
</style>
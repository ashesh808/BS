<template>
  <div>
    <div class="columns">
      <div class="column is-1 pb-0">
        <p>Books</p>
      </div>
      <div class="column pb-0 is-two-fifths">
        <!-- <div class="dropdown is-active"> -->
        <div class="dropdown" :class="drop? 'is-active': ''">
          <div class="dropdown-trigger">
            <input
              class="input"
              v-model="name"
              type="text"
              placeholder="To kill A Mocking Bird"
              @keydown="navigate"
              @keydown.enter.prevent.stop="select"
              ref="medicine"
            />
            <div
              class="dropdown-menu"
              id="dropdown-menu"
              role="menu"
              v-if="medicines.length>0 && drop && name.length>3"
            >
              <div class="dropdown-content">
                <a
                  @click="choose(medicine)"
                  :class="{'is-active': i == index}"
                  class="dropdown-item"
                  v-for="(medicine,i) in medicines"
                  :key="medicine.id"
                >{{medicine.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-1 pb-0">
        <p>Quantity</p>
      </div>
      <div class="column">
        <input class="input" v-model="qty" type="text" placeholder="e.g. 1 Pack" />
      </div>
      <div class="column">
        <button
          class="button is-info is-outlined add"
          @click.prevent="add"
          :disabled="name.length==0"
        >Add to List</button>
      </div>
    </div>

    <div class="columns table-holder">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Medicine</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(m,index) in cart" :key="index">
              <th>{{index + 1}}</th>
              <td>{{m.name}}</td>
              <td>{{m.qty}}</td>
              <td>
                <i class="las la-edit" @click="edit(index)"></i>
                <i class="las la-trash-alt" @click="remove(index)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <footer class="modal-card-foot">
      <button
        :disabled="cart.length==0"
        class="button is-danger is-radiusless is-pulled-right"
        @click="$emit('next')"
      >Next</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medicines: [],
      name: "",
      qty: "",
      index: -1,
      debounceId: null,
      drop: false
    };
  },

  computed: {
    cart() {
      return this.$store.getters.medicines;
    }
  },

  watch: {
    name() {
      if (this.name.length > 2 && this.drop) {
        if (this.debounceId) clearTimeout(this.debounceId);
        this.debounceId = setTimeout(() => {
          this.$axios
            .get(
              `${process.env.url}/api/medicine?searchText=${this.name}&limit=7`
            )
            .then(res => {
              this.medicines = res.data.data;
              this.index = -1;
            });
        }, 256);
      }
    }
  },

  methods: {
    add() {
      this.$store.commit("addMedicine", { name: this.name, qty: this.qty });
      this.name = "";
      this.qty = "";
      this.medicines = [];
      this.$refs.medicine.focus();
    },

    choose(medicine) {
      this.drop = false;
      this.name = medicine.name;
    },

    remove(index) {
      this.$store.commit("removeMedicine", { index });
    },

    edit(index) {
      let { name, qty } = this.cart[index];
      this.name = name;
      this.qty = qty;
      this.$store.commit("removeMedicine", { index });
    },

    navigate(e) {
      this.drop = true;
      if (e.code == "ArrowDown") {
        if (this.index < this.medicines.length - 1) this.index++;
      } else if (e.code == "ArrowUp") {
        if (this.index > 0) this.index--;
      } else if (e.code == "Tab") {
        this.drop = false;
      }
    },

    select() {
      if (this.index > -1) {
        this.choose(this.medicines[this.index]);
        this.index = -1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input,
.add,
textarea {
  font-size: 14px;
}

.add {
  width: 100%;
}

.is-1 {
  margin-right: 8px;
}

.is-2,
.is-1 {
  p {
    font-size: 14px;
    padding-top: 7px;
  }
}
.pb-0 {
  padding-bottom: 0;
}
.dropdown,
.dropdown-trigger,
.dropdown-menu,
.dropdown-content {
  width: 100%;
}

.dropdown-content {
  max-height: 256px;
  overflow-y: hidden;
}

table {
  width: 100%;
  font-size: 14px;
  margin-bottom: 80px;
  td {
    i {
      font-size: 18px;
      &:hover {
        cursor: pointer;
      }
    }
    .la-edit {
      color: #3298dc;
    }
    .la-trash-alt {
      color: #f14668;
    }
  }
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  button {
    margin-left: auto;
  }
}
</style>
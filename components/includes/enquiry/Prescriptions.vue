<template>
  <div>
    <div class="columns">
      <div class="column is-3 pb-0">
        <p>
          Prescription
          <small>(Optional)</small>
        </p>
      </div>
      <div class="column">
        <div class="file has-name is-right">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              @change="add"
              :disabled="prescriptions.length >= 8"
              accept="image/*, application/pdf"
            />
            <span class="file-cta" :class="{'disabled' : prescriptions.length >=8}">
              <span class="file-icon">
                <i class="las la-cloud-upload-alt"></i>
              </span>
              <span
                class="file-label"
                :class="{'disabled' : prescriptions.length >=8}"
              >Choose a file…</span>
            </span>
            <span
              class="file-name"
              :class="{'disabled' : prescriptions.length >=8}"
            >Medical Prescription File</span>
          </label>
        </div>
      </div>
    </div>

    <div class="columns table-holder">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>S.N.</th>
              <th>File</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(file,index) in prescriptions" :key="index">
              <th>{{index+1}}</th>
              <td>{{file.name}}</td>
              <td>{{(file.size/1000).toFixed(2)}} KB</td>
              <td>
                <i class="las la-trash-alt" @click="remove(index)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <footer class="modal-card-foot">
      <button class="button is-danger is-radiusless back" @click="$emit('back')">Previous</button>
      <button class="button is-danger is-radiusless save" @click="$emit('next')">Next</button>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    prescriptions() {
      return this.$store.getters.prescriptions;
    }
  },

  methods: {
    add(e) {
      if (e.target.files[0]) this.$store.commit("addFile", e.target.files[0]);
    },

    remove(index) {
      this.$store.commit("removeFile", { index });
    }
  }
};
</script>

<style scoped lang="scss">
small {
  font-size: 10px;
}
.is-3 {
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

.file-name {
  font-size: 14px;

  width: 100%;
  max-width: none !important;
}

.file-label {
  font-size: 14px;
  width: 100%;
}
.file-div {
  width: 100%;
  .file-cta,
  .file-name {
    font-size: 14px;
  }
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
  .back {
    margin-left: auto;
  }
}

.disabled {
  cursor: not-allowed;
}
</style>
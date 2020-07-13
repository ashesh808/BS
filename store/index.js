export const state = () => ({
  enquiry: {
    medicines: [],
    prescriptions: [],
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    note: ""
  },

  show: false
})

export const mutations = {
  addMedicine(state, payload) {
    state.enquiry.medicines.push(payload);
  },

  removeMedicine(state, {
    index
  }) {
    state.enquiry.medicines = state.enquiry.medicines.filter((m, i) => i != index);
  },


  addFile(state, payload) {
    state.enquiry.prescriptions.push(payload)
  },

  removeFile(state, {
    index
  }) {
    state.enquiry.prescriptions = state.enquiry.prescriptions.filter((m, i) => i != index)

  },

  hide(state) {
    state.show = false
  },

  show(state) {
    state.show = true;
  },

  clear(state) {
    state.enquiry = {
      medicines: [],
      prescriptions: [],
      name: "",
      phoneNumber: "",
      email: "",
      address: "",
      note: ""
    }
  },
}

export const getters = {
  medicines(state) {
    return state.enquiry.medicines;
  },

  prescriptions(state) {
    return state.enquiry.prescriptions;
  },

  enquiry(state) {
    return state.enquiry;
  },

  form(state) {
    return state.show;
  }
}

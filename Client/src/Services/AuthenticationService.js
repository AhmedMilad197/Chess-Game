import api from "./Api.js"

export default {
    signUp (formData) {
      return api().post('api/sign-up', formData);
    }
  }

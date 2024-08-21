import api from "./Api.js"

export default {
    signUp (formData) {
      return api().post('auth/sign-up', formData);
    }
  }

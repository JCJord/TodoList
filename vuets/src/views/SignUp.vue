<template>
  <v-container class="form-container">
    <v-card class="pr-7 pl-7 pb-8 form-card">
      <div class="form-logo-box">
        <img
          class="form-logo"
          src="https://cdn.dribbble.com/users/131151/screenshots/3458266/drb_jcbear-02.png?compress=1&resize=100x100"
          alt=""
        />
      </div>
      <div class="form-title">
        <b>Create your account</b>
      </div>
      <sign-up></sign-up>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SignUpForm from "../components/form/SignUpForm.vue";

@Component({
  components: {
    "sign-up": SignUpForm,
  },
})
export default class SignUp extends Vue {}
</script>

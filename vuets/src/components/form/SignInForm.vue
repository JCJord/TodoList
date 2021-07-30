<template>
  <v-form ref="form"
    ><v-alert
      v-if="errorMsg.length > 0"
      border="right"
      class="mt-4 mb-5"
      color="pink darken-1"
      dark
    >
      {{ errorMsg }}
    </v-alert>
    <v-text-field
      v-model="email"
      prepend-icon="mail"
      label="E-mail"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="'password'"
      :rules="passRules"
      prepend-icon="lock"
      label="Password"
      required
    ></v-text-field>

    <div class="tip-form pb-5">
      <router-link to="/signup"
        ><a href="">Don't have an account?</a>
      </router-link>
    </div>

    <v-btn
      block
      color="#2196F3"
      class="mr-4 form-button"
      @click="logIn"
      :loading="loading"
    >
      Sign In
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import firebase from "firebase/app"
import "firebase/auth"
import "vue-router"
import { Vue, Component } from "vue-property-decorator"

@Component
export default class SignInForm extends Vue {
  email = ""
  password = ""
  loading = false
  errorMsg = ""

  emailRules = [(v: any) => !!v || "E-mail is required"]
  passRules = [(v: any) => !!v || "Password is required"]

  async finishLoad(): Promise<boolean> {
    return (this.loading = true)
  }
  async logIn(): Promise<void> {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      try {
        this.loading = true
        const data = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)

        this.finishLoad()

        this.$router.push("/dashboard")
      } catch (err) {
        console.log(err)
        this.loading = false
        this.errorMsg = err.message
      }
    }
  }
}
</script>

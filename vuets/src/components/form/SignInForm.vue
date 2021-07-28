<template>
  <v-form ref="form">
    <v-text-field
      v-model="email"
      prepend-icon="mail"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="'password'"
      prepend-icon="lock"
      label="Password"
      required
    ></v-text-field>

    <div class="tip-form pb-5">
      <router-link to="/signup"
        ><a href="">Don't have an account?</a>
      </router-link>
    </div>

    <v-btn block color="#2196F3" class="mr-4 form-button" @click="logIn">
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

  async logIn(): Promise<void> {
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
      alert(data)

      this.$router.push("/dashboard")
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

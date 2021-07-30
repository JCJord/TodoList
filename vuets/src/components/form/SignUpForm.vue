<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-alert
      v-if="errorMsg.length > 0"
      border="right"
      class="mt-4 mb-5"
      color="pink darken-1"
      dark
    >
      {{ errorMsg }}
    </v-alert>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      prepend-icon="person"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="[emailRules.required, emailRules.valid, emailRules.min]"
      prepend-icon="mail"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="role"
      :rules="roleRules"
      prepend-icon="work"
      label="Role"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="'password'"
      :rules="passwordRules"
      prepend-icon="lock"
      label="Password"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn depressed block @click="submit" color="#e6e6e6" :loading="loading">
      Sign Up
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import firebase from "firebase/app"
import "firebase/auth"
import "vue-router"
import axios from "axios"
import { Vue, Component } from "vue-property-decorator"

@Component
export default class SignUpForm extends Vue {
  show = false
  valid = false
  name = ""
  email = ""
  role = ""
  password = ""
  checkbox = ""
  loading = false
  errorMsg = ""

  nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => v.length <= 16 || "Name must be less than 24 characters",
  ]

  emailRules = {
    required: (v: any) => !!v || "Email is required",
    valid: (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    min: (v: any) => v.length <= 64 || "E-mail Too big",
  }

  roleRules = [
    (v: any) => !!v || "Role is required",
    (v: any) => v.length >= 3 || "Role is invalid",
  ]

  passwordRules = [
    (v: any) => !!v || "Password is required",
    (v: any) => v.length >= 8 || "Password must be at least 8 characters long",
    (v: any) => v.length <= 255 || "Password too big",
  ]

  async postData(): Promise<string> {
    return await axios.post(
      "https://todolist-2ec1e-default-rtdb.firebaseio.com/user.json",
      {
        name: this.name,
        email: this.email,
        role: this.role,
        password: this.password,
      }
    )
  }

  async finishLoad(): Promise<boolean> {
    return (this.loading = false)
  }

  async submit(): Promise<void> {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      try {
        this.loading = true

        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)

        this.postData()
        this.finishLoad()
        this.$router.push("/login")
      } catch (errr) {
        console.log(errr)
        this.loading = false
        this.errorMsg = errr.message
      }
    }
  }
}
</script>

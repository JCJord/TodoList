<template>
  <v-form ref="form" v-model="valid" lazy-validation>
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

    <v-btn depressed block @click="submit" color="#e6e6e6">
      Sign Up
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class SignUpForm extends Vue {
  show = false;
  valid = false;
  name = "";
  email = "";
  role = "";
  password = "";
  checkbox = "";

  nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => v.length <= 16 || "Name must be less than 24 characters",
  ];

  emailRules = {
    required: (v: any) => !!v || "Email is required",
    valid: (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    min: (v: any) => v.length <= 64 || "E-mail Too big",
  };

  roleRules = [
    (v: any) => !!v || "Role is required",
    (v: any) => v.length >= 3 || "Role is invalid",
  ];
  passwordRules = [
    (v: any) => !!v || "Password is required",
    (v: any) => v.length >= 8 || "Password must be at least 8 characters long",
  ];

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      console.log(
        "nome: " +
          this.name +
          " email: " +
          this.email +
          " role : " +
          this.role +
          " password : " +
          this.password
      );
    }
  }
}
</script>

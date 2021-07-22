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
      :rules="emailRules"
      prepend-icon="mail"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-icon="work"
      label="Role"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="'password'"
      :rules="emailRules"
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

    <v-btn depressed block color="#e6e6e6" @click="validate">
      Sign Up
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

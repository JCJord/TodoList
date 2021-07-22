<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-icon="mail"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :type="'password'"
      prepend-icon="lock"
      :rules="emailRules"
      label="Password"
      required
    ></v-text-field>

    <div class="tip-form pb-5">
      <router-link to="/signup"
        ><a href="">Don't have an account?</a>
      </router-link>
    </div>

    <v-btn block color="#2196F3" class="mr-4 form-button" @click="validate">
      Sign In
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class SignInForm extends Vue {}
</script>

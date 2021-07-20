<template>
  <v-container class="intro-block">
    <v-row class="mt-10">
      <v-col class="banner-title-box" cols="12" md="6" lg="6" sm="12">
        <div class="banner-title">
          <b>
            Work on big ideas,
          </b>
        </div>

        <div class="banner-title line-2">
          <b>without the busywork.</b>
        </div>
        <hr style="width:70px;" class="mb-4" />
        <div class="banner-description">
          <p>
            From the small stuff to the big picture, Asana organizes work so
            teams know what to do, why it matters, and how to get it done.
          </p>
        </div>
        <div class="buttons-box">
          <v-btn elevation="2" class="mr-5" dark tile>Sign up</v-btn>
          <v-btn elevation="2" tile>Sign in</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" lg="6" sm="12">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-width="100%"
          src="../assets/dashboard.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Home extends Vue {}
</script>

<template>
  <v-app class="body">
    <TheHeader></TheHeader>
    <v-main class=" mb-4"><router-view></router-view></v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheHeader from "./components/header/TheHeader.vue";

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>

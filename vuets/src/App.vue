<template>
  <v-app class="body">
    <TheHeader></TheHeader>
    <v-content class=" mb-4"><router-view></router-view></v-content>
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
<style scoped>
h1 {
  margin-top: 100px;
  border: dotted;
}
</style>

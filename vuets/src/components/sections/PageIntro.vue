<template>
  <div class="page-intro">
    <v-row class="mt-10 banner-row">
      <slot name="column-1"></slot>
      <slot name="column-2"></slot>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PageIntro extends Vue {}
</script>

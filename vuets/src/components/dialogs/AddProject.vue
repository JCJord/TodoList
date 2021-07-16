<template>
  <div class="popDialog ma-5">
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white"
            class="black--text project-btn"
            tile
            v-bind="attrs"
            v-on="on"
          >
            Add new project
          </v-btn>
        </template>
        <v-card tile class="pa-7">
          <div class="title-form mb-5">
            <h2>Add new project</h2>
          </div>
          <v-form ref="form">
            <v-text-field
              prepend-icon="folder"
              v-model="name"
              label="name"
            ></v-text-field
            ><v-textarea prepend-icon="edit" label="information"></v-textarea>
            <v-btn right tile depressed class="mt-3 " @click="dialog = false"
              >Cancel</v-btn
            >
          </v-form>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AddProject extends Vue {
  dialog = false;
}
</script>

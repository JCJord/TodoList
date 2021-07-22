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
          <v-form v-model="valid" ref="form">
            <v-text-field
              prepend-icon="folder"
              v-model="title"
              :rules="titleRules"
              label="Project title"
              required
            ></v-text-field
            ><v-textarea
              v-model="info"
              prepend-icon="edit"
              label="Information"
              :rules="infoRules"
              required
            ></v-textarea>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="due"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="due"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  :rules="dueRules"
                  v-bind="attrs"
                  v-on="on"
                  required
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(due)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-btn tile depressed class="mt-3 mr-5 " @click="dialog = false"
              >Cancel</v-btn
            >
            <v-btn
              color="#3cd1c2"
              tile
              depressed
              class="mt-3 white--text"
              @click="submit"
              >Submit</v-btn
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
  valid = false;
  title = "";
  info = "";
  due = "";
  menu = null;
  dialog = false;

  titleRules = [
    (v: any) => !!v || "Title is required",
    (v: any) => v.length <= 16 || "Title must be less than 24 characters",
  ];
  infoRules = [
    (v: any) => !!v || "Info is required",
    (v: any) => v.length >= 10 || "Name must be bigger than 10 characters",
  ];
  dueRules = [
    (v: any) => !!v || "Date is required",
    (v: any) => v.length >= 3 || "Date must be bigger than 3 characters",
  ];

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      console.log(
        "nome: " + this.title + "info: " + this.info + " Due by : " + this.due
      );
      this.dialog = false;
    }
  }
}
</script>

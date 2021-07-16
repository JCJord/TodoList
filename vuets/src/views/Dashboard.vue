<template>
  <div class="dashboard">
    <v-container>
      <div class="dash-title grey--text">
        <h2>Dashboard</h2>
      </div>
      <v-row class="mb-1 pa-4">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="sortByTitle"
              depressed
              small
              v-bind="attrs"
              v-on="on"
              class="mr-5 text-lowercase sort grey--text"
              ><v-icon left class="mr-4">folder</v-icon> by project name</v-btn
            >
          </template>
          <span>Order projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="sortByPerson"
              depressed
              small
              v-bind="attrs"
              v-on="on"
              class="text-lowercase sort grey--text"
            >
              <v-icon class="mr-4" left>person</v-icon>by person</v-btn
            >
          </template>
          <span>Order projects by person</span>
        </v-tooltip>
      </v-row>
      <div v-for="item in activities" :key="item.title">
        <v-row no-gutters :class="`card ${item.status}`">
          <v-col cols="12" xs="11" md="6">
            <v-card class="pa-5 noborder match" outlined tile>
              <div class="caption  grey--text">Project Title</div>
              <div>{{ item.title }}</div>
            </v-card>
          </v-col>

          <v-col cols="12" xs="6" sm="4" md="2">
            <v-card class="pa-5 noborder match" outlined tile>
              <div class="caption  grey--text">Name</div>
              <div>{{ item.person }}</div>
            </v-card>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <v-card class="pa-5 noborder match" outlined tile>
              <div class="caption  grey--text">Due by</div>
              <div>{{ item.dueby }}</div>
            </v-card>
          </v-col>
          <v-col cols="12" xs="6" sm="4" md="2">
            <v-card class="pa-5 noborder match" outlined tile>
              <v-chip class="mt-2 " :class="`chip ${item.status} cu`">
                {{ item.status }}
              </v-chip></v-card
            >
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {
  readonly activities = [
    {
      title: "Create new Website",
      person: "Michael Metz",
      dueby: "14 May 2021",
      status: "complete",
    },
    {
      title: "The U.S threat book",
      person: "Robison Far",
      dueby: "28 Jan 2021",
      status: "complete",
    },
    {
      title: "Finish TodoList project",
      person: "Júlio César",
      dueby: "20 Jul 2021",
      status: "ongoing",
    },
    {
      title: "Implement TypeScript perfectly",
      person: "Júlio César",
      dueby: "13 jul 2021",
      status: "overdue",
    },
  ];

  sortByTitle(): any {
    function compare(a: any, b: any) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
    return this.activities.sort(compare);
  }

  sortByPerson(): any {
    function compare(a: any, b: any) {
      if (a.person < b.person) return -1;
      if (a.person > b.person) return 1;
      return 0;
    }

    return this.activities.sort(compare);
  }
}
</script>

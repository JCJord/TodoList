<template>
  <nav>
    <v-toolbar app flat class="#fff"
      ><v-app-bar-nav-icon @click="toggler()"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text toolbar-title">
        <span class="font-weight-light ">Todo</span>
        <span>Jord</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn class="sign-out">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      absolute
      left
      temporary
      v-model="drawer"
      color="#9652ff"
    >
      <v-list nav dense>
        <v-list-item-group
          v-for="link in links"
          :key="link.text"
          class="side-tile"
        >
          <v-list-item router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text ">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {
  private drawer = false;

  readonly links = [
    { icon: "dashboard", text: "Dashboard", route: "/" },
    { icon: "folder", text: "My Projects", route: "/projects" },
    { icon: "person", text: "Team", route: "/team" },
  ];

  toggler(): boolean {
    return (this.drawer = !this.drawer);
  }
}
</script>

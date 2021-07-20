<template>
  <nav>
    <v-toolbar flat class="#fff"
      ><v-app-bar-nav-icon @click="toggler()"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text toolbar-title">
        <v-img
          class="logo"
          max-width="150"
          src="https://cdn.dribbble.com/users/131151/screenshots/3458266/drb_jcbear-02.png?compress=1&resize=800x600"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="menu-dropdown mr-5">
        <v-menu offset-y :rounded="'0'">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="sign-out"
              color="#fff"
              v-bind="attrs"
              v-on="on"
              depressed
            >
              <v-icon left>expand_more</v-icon>
              Menu
            </v-btn>
          </template>
          <v-list v-for="link in links" :key="link.route">
            <v-list-item router :to="link.route">
              {{ link.text }}
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div class="btn-header-box">
        <v-btn class="sign-out">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-navigation-drawer
      absolute
      left
      temporary
      v-model="drawer"
      color="primary"
    >
      <div class="profile text-center pt-5">
        <v-avatar color="primary" class="text-center" size="125"
          ><img
            src="https://media-exp3.licdn.com/dms/image/C4D03AQFIF8hIuNYRhA/profile-displayphoto-shrink_800_800/0/1618525030660?e=1631750400&v=beta&t=1Xz6wI4figvRBW6h0vRqv_x6F5JiQmkmayGTG_rmPyk"
            alt=""
        /></v-avatar>
        <div class="profile-name pt-5 white--text">
          <p>Júlio César</p>
        </div>
        <add-project></add-project>
      </div>

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
import AddProject from "../dialogs/AddProject.vue";

@Component({ components: { AddProject } })
export default class TheHeader extends Vue {
  private drawer = false;

  readonly links: any = [
    { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
    { icon: "folder", text: "My Projects", route: "/projects" },
    { icon: "person", text: "Team", route: "/team" },
  ];

  toggler(): boolean {
    return (this.drawer = !this.drawer);
  }
}
</script>

<style></style>

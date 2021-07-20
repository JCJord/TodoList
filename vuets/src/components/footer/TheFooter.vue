<template>
  <v-footer class="footer" dark padless>
    <v-card class="flex " flat tile>
      <v-card-title class="grey darken-3 footer-bg">
        <strong class="subheading">Contact me on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="i in icons" :key="i.icon" class="mx-4" dark icon>
          <a class="media-buttons" :href="i.link"
            ><v-icon size="24px">
              {{ i.icon }}
            </v-icon></a
          >
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>JCJord</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TheFooter extends Vue {
  icons: any[] = [
    { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jc-jord/" },
    {
      icon: "mdi-whatsapp",
      link:
        "https://api.whatsapp.com/send/?phone=5511941296138&text&app_absent=0",
    },
    { icon: "mdi-github", link: "https://github.com/JCJord" },
  ];
}
</script>

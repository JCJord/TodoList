<template>
  <div class="team panel-body">
    <v-container>
      <div class="dash-title grey--text">
        <h2>Team</h2>
      </div>

      <v-row>
        <v-col
          v-for="people in team"
          :key="people.person"
          cols="12"
          xs="4"
          md="4"
          sm="4"
          lg="3"
        >
          <v-card class="text-center" flat>
            <div class="pt-5">
              <v-avatar color="primary" size="125"
                ><img :src="people.profileUrl" alt=""
              /></v-avatar>
            </div>
            <div>
              <div class="bold  pt-4">{{ people.person }}</div>
              <div class="text-sm-body-2 grey--text pb-5">{{ people.job }}</div>
            </div>
            <div class="button-box text-left pa-2">
              <v-btn text class="grey--text"
                ><v-icon left>message</v-icon>message</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Team extends Vue {
  readonly team: any = [
    {
      person: "The Net Ninja",
      job: "Back-end Developer",
      profileUrl: "https://images.virgula.com.br/2016/06/mark-zuckerberg.jpg",
    },
    {
      person: "Júlio César",
      job: "Front-end Developer",
      profileUrl:
        "https://media-exp3.licdn.com/dms/image/C4D03AQFIF8hIuNYRhA/profile-displayphoto-shrink_800_800/0/1618525030660?e=1631750400&v=beta&t=1Xz6wI4figvRBW6h0vRqv_x6F5JiQmkmayGTG_rmPyk",
    },
    {
      person: "Vinicius",
      job: "Front-end Developer",
      profileUrl:
        "https://scontent.fgru11-1.fna.fbcdn.net/v/t1.6435-9/96584611_2589248421315576_3742953841142792192_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=_spCh2QVKooAX_c6BdU&_nc_ht=scontent.fgru11-1.fna&oh=cad8ad4008bc82e3163a48ac4460934a&oe=60FBB5D7",
    },
    {
      person: "Mario",
      job: "Front-end Developer",
      profileUrl:
        "https://lh3.googleusercontent.com/6geoqgXLoeCK4-A1xxkR9KcGcI_KF23SGeHX1sAM2gauaIhNp515feFNS3ML1zmCugI=w300",
    },
    {
      person: "Mike",
      job: "Front-end Developer",
      profileUrl:
        "https://pbs.twimg.com/media/EZqRRpTUMAABaHI?format=jpg&name=large",
    },
  ];
}
</script>

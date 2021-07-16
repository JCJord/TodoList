<template>
  <div class="team">
    <v-container>
      <div class="dash-title grey--text">
        <h2>Team</h2>
      </div>

      <v-row>
        <v-col
          v-for="people in team"
          :key="people"
          cols="12"
          xs="4"
          md="4"
          sm="4"
          lg="3"
        >
          <v-card :loading="loading" class="text-center" flat>
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
        "https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.6435-9/102362843_2974971225873994_3698971774008950784_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFp7x_mlwet4FKBU7eg-StckkZnt0ChoCGSRme3QKGgIUEfKD0MZk7D3LAmwtARZXSo_HOzbT2noH5QRXYGFFxZ&_nc_ohc=r6vqUZ8npCcAX_cUUYT&_nc_ht=scontent.fbfh1-2.fna&oh=438c52627f196ee9c50f3a025ecf465a&oe=60F47764",
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

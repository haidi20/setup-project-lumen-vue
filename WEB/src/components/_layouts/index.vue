<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-card
        height="100%"
        class="mx-auto"
      >
        <v-navigation-drawer  v-model="drawer" >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Setup Project SPA
              </v-list-item-title>
              <v-list-item-subtitle>
                <!-- subtext --><br>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in menus"
              :key="item.name"
              :to="item.path"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar 
      color="primary"
      app>
      <v-app-bar-nav-icon 
        color="white"
        @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Application</v-toolbar-title> JANGAN DI HAPUS -->
      <v-spacer></v-spacer>
       <v-btn icon>
        <v-icon
          color="white">
            mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {routes} from '@/router';

  export default {
    data: () => ({ 
      drawer: true,
      menus: [],
      right: null,    
    }),
    mounted() {
      this.menus = routes;
    }
  }
</script>
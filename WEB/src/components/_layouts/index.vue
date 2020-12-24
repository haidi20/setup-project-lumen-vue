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
              <v-list-item-title 
                style="margin-top: 10px"
                class="title">
                Setup Project SPA
              </v-list-item-title>
              <v-list-item-subtitle>
                <!-- subtext -->
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list>
            <v-list-item-group
              color="primary">
               <v-list-item
                v-for="item in menus"
                :to="item.path"
                :key="item.name"
                active-class="highlighted" 
                @click="closeAllSubMenu"
                           
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list-item-group>
            <v-list-group
              v-for="item in menuHaveChildren"
              :key="item.name"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
            >
              <template v-slot:activator >
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.children"
                :key="child.name"
                :to="child.path"
                active-class="highlighted"                
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
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
    data() {
      return {
        menus: [],
        right: null,   
        drawer: true,
        closeOnClick: true,
        menuHaveChildren: [],
        
      }
    },
    mounted() {
      let filterMenus = routes.filter(item => item.name === "Layout").map(item => item.children);
      
      filterMenus.map(item => {
        item.map(value => {
          if(value.children == undefined) {
            this.menus = [...this.menus, value];
          }else {
            this.menuHaveChildren = [...this.menuHaveChildren, value];
          }
        });
      });
    },
    methods: {
      chooseSelected(name) {
        let index = routes.map(function(x) { return x.name; }).indexOf(name);
        if(this.selected != index) {
          console.log('tidak sama');
          this.selected = index;
        }
      },
      closeAllSubMenu() {
        this.menuHaveChildren.map(item => item.active = false);
      }
    }
  }
</script>